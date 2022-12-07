import { html } from "../utilities/html";
import errorPageStyles from "../styles/error.css";
import { network2Ico } from "../assets";
import { ROUTES } from "../constants";

type ErrorType = "404" | "500";

const resolveErrorTitle = (errorType: ErrorType) => {
  switch (errorType) {
    case "404":
      return "Whoops, that page is gone...";
    case "500":
      return "Wow! Something went terribly wrong...";
    default:
      throw new Error(`Error type ${errorType} is not supported`);
  }
};

export const ErrorPage = (errorType: ErrorType) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="stylesheet" href="${errorPageStyles}" />
        <title>Holy molly! It ain't look good...</title>
      </head>
      <body>
        <main class="error-page__wrapper">
          <h2>${resolveErrorTitle(errorType)}</h2>
          <h1 class="error_page__error-code">${errorType}</h1>
          <h3><a href="${ROUTES.home}">Go back home</a></h3>
        </main>
      </body>
    </html>`;
};
