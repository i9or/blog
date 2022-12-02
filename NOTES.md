# Some Notes

## Controllers

### Returning `html` and `json` and using middleware

```ts
router.get(
  "/",
  (req, res, next) => {
    console.log("SOME MIDDLEWARE");
    next();
  },
  (_, res) => {
    res.format({
      html: () => {
        res.send(
          Layout({
            body: html`<h1>Posts#index</h1>`,
          })
        );
      },
      json: () => {
        res.send({
          posts: [
            { name: "Post1" },
            { name: "Post2" },
            { name: "Post3" },
            { name: "Post4" },
          ],
        });
      },
    });
  }
);
```

### Using request parameters

```ts
app.get("/page/:page/", (req, res) => {
  res.status(200).send(
    Layout({
      body: html`
        <h1>Some cool page!!!</h1>
        <h2>URL</h2>
        ${req.url}
        <h2>Params</h2>
        ${JSON.stringify(req.params, null, 2)}
      `,
    })
  );
});
```

### Base Controller class reference implementation

```ts
export class BaseController {
  private readonly _router = new App();

  protected constructor() {
    this.index = this.index.bind(this);
    this._router.get("/", this.index);
  }

  index(req: Request, res: Response, next: NextFunction) {
    res.send(`${this.constructor.name}#index is not implemented`);
  }

  new = () => {}; // might be not the best name
  create = (req: Request, res: Response, next: NextFunction) => {};
  edit = (req: Request, res: Response, next: NextFunction) => {};
  show = (req: Request, res: Response, next: NextFunction) => {};
  update = (req: Request, res: Response, next: NextFunction) => {};
  destroy = (req: Request, res: Response, next: NextFunction) => {};

  get router() {
    return this._router;
  }
}
```
