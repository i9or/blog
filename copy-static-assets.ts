import * as shell from "shelljs";

shell.mkdir("-p", "dist/public/images");
shell.cp("-R", "src/public/images/*", "dist/public/images/");
