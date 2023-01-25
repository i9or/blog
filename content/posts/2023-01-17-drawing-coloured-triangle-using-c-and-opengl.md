---
{ "tags": ["Graphics", "OpenGL", "C", "GLUT"] }
---

# Drawing a Coloured Triangle using C and OpenGL

In this tutorial, we will be learning how to draw a coloured triangle using the C programming language and the legacy OpenGL 2.1 graphics library. We will be using the GLUT (OpenGL Utility Toolkit) library to create a window and handle user inputs.

![Some OpenGL source code](/images/2023-01-17/krishna-pandey-KNZHyTpre18-unsplash.jpg "Yes, I know, we won't be using shaders and GLFW!")

### Prerequisites

Before we begin, make sure that you have the following installed on your system:

- A C compiler (such as GCC)
- GLUT library

The GLUT library is already available on macOS; for other operating systems, alternatives could be used. For example, on Debian-based systems, you can install it by running the following command:

```sh
sudo apt-get install freeglut3-dev
```

# Setting up the Project

We will start by creating a new C file, `triangle.c`, and adding the following code to it:

```c
#include <GL/glut.h>

int main(int argc, char** argv) {
  glutInit(&argc, argv);
  glutCreateWindow("Coloured Triangle");

  glutMainLoop();
  return 0;
}
```

This code initializes GLUT, creates a window with the title "Coloured Triangle", and enters the main loop.

To compile this code, run the following command in your terminal:

```sh
gcc triangle.c -lGL -lGLU -lglut -o triangle
```

This will create an executable file, `triangle`, that you can run to see the window.

## Drawing the Triangle

Now that we have a window set up, we can start drawing the triangle. We will do this by defining a function, `display`, that will be called by GLUT to render the scene. Add the following code to your `triangle.c` file:

```c
#include <GL/glut.h>

void display() {
  glClear(GL_COLOR_BUFFER_BIT);
  glBegin(GL_TRIANGLES);
  glColor3f(1.0, 0.0, 0.0);
  glVertex2f(-0.5, -0.5);
  glColor3f(0.0, 1.0, 0.0);
  glVertex2f(0.5, -0.5);
  glColor3f(0.0, 0.0, 1.0);
  glVertex2f(0.0, 0.5);
  glEnd();
  glFlush();
}

int main(int argc, char** argv) {
  glutInit(&argc, argv);
  glutCreateWindow("Coloured Triangle");
  glutDisplayFunc(display);
  glutMainLoop();
  return 0;
}
```

This code defines the display function, which does the following:

1. Clears the color buffer (this is where the triangle will be drawn)
1. Begins a triangle primitive
1. Sets the color for the first vertex to red
1. Sets the first vertex to the bottom left corner of the window (-0.5, -0.5)
1. Sets the color for the second vertex to green
1. Sets the second vertex to the bottom right corner of the window (0.5, -0.5)
1. Sets the color for the third vertex to blue
1. Sets the third vertex to the top center of the window (0.0, 0.5)
1. Ends the triangle primitive
1. Flushes the OpenGL pipeline to draw the triangle

Compile and run the code again, and you should see a coloured triangle in the window.

## Handling User Inputs

Now that we have a coloured triangle being drawn, let's add some interactivity to our program by handling user inputs. We will do this by defining a function, `keyboard`, that will be called by GLUT when a key is pressed. Add the following code to your `triangle.c` file:

```c
#include <GL/glut.h>

float red = 1.0, green = 0.0, blue = 0.0;

void display() {
  glClear(GL_COLOR_BUFFER_BIT);
  glBegin(GL_TRIANGLES);
  glColor3f(red, green, blue);
  glVertex2f(-0.5, -0.5);
  glVertex2f(0.5, -0.5);
  glVertex2f(0.0, 0.5);
  glEnd();
  glFlush();
}

void keyboard(unsigned char key, int x, int y) {
  switch (key) {
    case 'r':
      red = 1.0;
      green = 0.0;
      blue = 0.0;
      break;
    case 'g':
      red = 0.0;
      green = 1.0;
      blue = 0.0;
      break;
    case 'b':
      red = 0.0;
      green = 0.0;
      blue = 1.0;
      break;
  }
  glutPostRedisplay();
}

int main(int argc, char** argv) {
  glutInit(&argc, argv);
  glutCreateWindow("Coloured Triangle");
  glutDisplayFunc(display);
  glutKeyboardFunc(keyboard);
  glutMainLoop();
  return 0;
}
```

This code defines the `keyboard` function, which takes in three arguments:

- `key`: the ASCII code of the key pressed
- `x`: the x-coordinate of the mouse cursor
- `y`: the y-coordinate of the mouse cursor

The `keyboard` function then checks which key was pressed and updates the values of the `red`, `green`, and `blue` variables accordingly. Finally, it calls `glutPostRedisplay` to redraw the scene with the updated colors.

## Conclusion

In this tutorial, we learned how to draw a coloured triangle using the C programming language and the legacy OpenGL 2.1 graphics library. We used the GLUT library to create a window and handle user inputs.

We started by setting up the project and creating a window with GLUT. Then, we defined the `display` function to draw the triangle using the OpenGL API. Finally, we added interactivity to our program by defining the `keyboard` function to handle user inputs and change the color of the triangle.

With these basics in place, you can now start exploring more advanced features of OpenGL and create more complex graphics.
