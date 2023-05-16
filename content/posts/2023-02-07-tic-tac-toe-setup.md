=====
{ "tags": ["Game Development", "C++", "SFML", "macOS"] }
=====

# Tic Tac Toe: Setup

In this tutorial, we will be setting up a project for implementation of a small
Tic Tac Toe game. The game will be written in C++ with the help of CMake and the
SFML library. The setup below will be working on macOS only for now. Windows
support will be added in the next parts. This is a _step-by-step_ tutorial, some
steps might look too verbose.

## Prerequisites

This tutorial assumes that the system has C++ compiler, git, CMake and text
editor/IDE already installed. The easiest way to get all that is to
install [Homebrew](https://brew.sh/) package manager and/or Xcode.

Quick check if everything is installed correctly:

```sh
clang++ -v
cmake --version
git --version
```

If none of the commands returned something like `Command not found`, we're
ready to go.

## Setting up a project

First, we need to create a folder for the project and initialise an empty git
repository. The Git repository is optional. However, it will help us later with
dependency management using Git Submodules. Open the terminal and type:

```sh
mkdir tictactoe
cd $_
git init
```

Output should indicate that the empty git repository was initialized.

Next, let's set up an empty C++ project. We will need to create a few folders
and CMake configuration file:

```sh
mkdir bin
touch CMakeLists.txt
touch main.cpp
```

The `bin` folder will be used to store compiled binary of the game.

Let's populate `main.cpp` with a simple C++ program:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;

    return EXIT_SUCCESS;
}
```

To build this program, we'll need to add CMake configuration
into `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.24)
project(tictactoe VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wno-deprecated-declarations")
set(PROJECT_OUTPUT_BIN_DIR "${PROJECT_SOURCE_DIR}/bin")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${PROJECT_OUTPUT_BIN_DIR}")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG "${PROJECT_OUTPUT_BIN_DIR}")

add_executable(${PROJECT_NAME} main.cpp)
```

This CMake configuration specifies to use C++17 to compile the program,
redirects executable to be put to `bin` folder and also turns off deprecated
warnings (`-Wno-deprecated-declaration`) as SFML compilation generates quite a
lot of those on macOS, mostly because of OpenGL.

At this point, it should be possible to bootstrap the project and build it:

```sh
mkdir build
cmake -S . -B ./build
cmake --build ./build
```

After the project is built successfully, just run it from the terminal:

```sh
./bin/tictactoe
```

The program should print `Hello, World!` and exit.

The next step is to add the SFML library to the project. There are many ways to
do that, including installing pre-built shared libraries using a package
manager. I went with Git Submodules and building library locally as it's more
convenient if a project will need cross-platform support or quick update to the
latest version of the dependency (stable release of the SFML was done in 2018,
for example, and does not have a few needed fixes for macOS).

First, we need to create a folder for the Git Submodules:

```sh
mkdir vendor
```

The other popular name for the folder is `third_party` or `dependencies`, I'll
go with `vendor`.

The second step is to add the SFML library repository as a submodule and switch
to a specific commit. This tutorial assumes the same state of SFML library is
used. The latest version of SFML support is not guaranteed.

```sh
git submodule add https://github.com/SFML/SFML.git ./vendor/SFML
cd ./vendor/SFML
git checkout 938e90b7d2b345d06783ba88fe8d8e1ca2f09855
cd ../..
```

At this point, we should have SFML library pinned to a specific commit added as
a submodule to our repository.

The next step is to integrate the SFML library into the project. To accomplish
that `CMakeLists.txt` needs to be changed:

```cmake
# ...
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG "${PROJECT_OUTPUT_BIN_DIR}")

# new lines:
include_directories(vendor/SFML/include)

set(SFML_USE_STATIC_STD_LIBS TRUE)
set(BUILD_SHARED_LIBS FALSE)
add_subdirectory(vendor/SFML)
```

This will add the SFML library as a subproject. Next, we need to link libraries
to our executable:

```cmake
# ...
add_executable(${PROJECT_NAME} main.cpp)

# new lines:
target_link_libraries(${PROJECT_NAME}
        sfml-graphics
        sfml-window
        sfml-graphics
        sfml-system
        sfml-audio)
```

The final `CMakeLists.txt` should look like this:

```cmake
cmake_minimum_required(VERSION 3.24)
project(tictactoe VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS
        "${CMAKE_CXX_FLAGS} -Wno-deprecated-declarations")
set(PROJECT_OUTPUT_BIN_DIR "${PROJECT_SOURCE_DIR}/bin")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${PROJECT_OUTPUT_BIN_DIR}")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG "${PROJECT_OUTPUT_BIN_DIR}")

include_directories(vendor/SFML/include)

set(SFML_USE_STATIC_STD_LIBS TRUE)
set(BUILD_SHARED_LIBS FALSE)
add_subdirectory(vendor/SFML)

add_executable(${PROJECT_NAME} main.cpp)
target_link_libraries(${PROJECT_NAME}
        sfml-graphics
        sfml-window
        sfml-graphics
        sfml-system
        sfml-audio)
```

Before adding SFML-related code to the game, let's check that the project builds
without any issues from the root of the project:

```sh
cmake --build ./build
```

It should build the whole SFML library and statically link it to our empty
project.

![Build output](/images/2023-02-07/screenshot-build-output.png "CMake build output")

Now we're ready to add the basic SFML code to our game, replace `main.cpp`
contents with the next code:

```cpp
#include <SFML/Graphics.hpp>

int main() {
  sf::Vector2u windowSize{300, 300};
  sf::RenderWindow window{sf::VideoMode{windowSize}, "Tic Tac Toe"};

  while (window.isOpen()) {
    sf::Event event{};
    while (window.pollEvent(event)) {
      if (event.type == sf::Event::Closed) { window.close(); }

      if (event.type == sf::Event::KeyPressed &&
          (event.key.code == sf::Keyboard::Escape)) {
        window.close();
      }
    }

    window.clear(sf::Color::Black);
    window.display();
  }

  return EXIT_SUCCESS;
}
```

Let's build and run the code above:

```sh
cmake --build ./build
./bin/tictactoe
```

The result should be a small empty window:

[//]: # "@formatter:off"

![Empty window](/images/2023-02-07/screenshot-tictactoe.png "Empty window"){width=350}

[//]: # "@formatter:on"

Press escape to exit the game.

It's time to commit all the changes. Let's first create `.gitignore` file:

```
# Prerequisites
*.d

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod
*.smod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app

# CLion
cmake-build-debug
cmake-build-release

# Executable
bin/*
!bin/.gitkeep
```

Pay attention to the last two lines. Those two are needed to ignore any contents
of the `bin` folder but allow `bin` folder to be committed to the repository.
The final step is to create an empty `.gitkeep` file in the `bin` folder:

```sh
touch ./bin/.gitkeep
```

Now we can commit the changes:

```sh
git add -A
git commit -m "Initial commit"
```

Done!

Link to the project on
GitHub: [https://github.com/i9or/tictactoe](https://github.com/i9or/tictactoe/tree/c367bd4a2859402d7d8422905cc7012258cf6086)

---

In this tutorial, we've set up a basis for the C++ game using SFML. In the
next part, we will try to draw graphics and add basic game logic. That's all for
now, have a good one!
