"use strict";
var _l = Object.create,
  ot = Object.freeze,
  Wi = Object.defineProperty;
var wl = Object.getOwnPropertyDescriptor;
var kl = Object.getOwnPropertyNames;
var Cl = Object.getPrototypeOf,
  El = Object.prototype.hasOwnProperty;
var y = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var Al = (a, e, i, n) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let t of kl(e))
      !El.call(a, t) &&
        t !== i &&
        Wi(a, t, {
          get: () => e[t],
          enumerable: !(n = wl(e, t)) || n.enumerable,
        });
  return a;
};
var U = (a, e, i) => (
  (i = a != null ? _l(Cl(a)) : {}),
  Al(
    e || !a || !a.__esModule
      ? Wi(i, "default", { value: a, enumerable: !0 })
      : i,
    a
  )
);
var st = (a, e) => ot(Wi(a, "raw", { value: ot(e || a.slice()) }));
var lt = y((pt) => {
  var { join: Yi, resolve: Dl } = require("path"),
    { readdirSync: Pl, statSync: Sl } = require("fs");
  function ct(a, e, i = "") {
    a = Dl(".", a);
    let n = Pl(a),
      t = 0,
      r,
      o;
    for (; t < n.length; t++)
      (r = Yi(a, n[t])),
        (o = Sl(r)),
        o.isDirectory() ? ct(r, e, Yi(i, n[t])) : e(Yi(i, n[t]), r, o);
  }
  pt.totalist = ct;
});
var dt = y((ut) => {
  var Tl = require("querystring");
  function Il(a) {
    let e = a.url;
    if (e == null) return;
    let i = a._parsedUrl;
    if (i && i.raw === e) return i;
    let n = e,
      t = "",
      r;
    if (e.length > 1) {
      let o = e.indexOf("?", 1);
      o !== -1 &&
        ((t = e.substring(o)),
        (n = e.substring(0, o)),
        t.length > 1 && (r = Tl.parse(t.substring(1))));
    }
    return (a._parsedUrl = { pathname: n, search: t, query: r, raw: e });
  }
  ut.parse = Il;
});
var ft = y((ea) => {
  var mt = {
    ez: "application/andrew-inset",
    aw: "application/applixware",
    atom: "application/atom+xml",
    atomcat: "application/atomcat+xml",
    atomdeleted: "application/atomdeleted+xml",
    atomsvc: "application/atomsvc+xml",
    dwd: "application/atsc-dwd+xml",
    held: "application/atsc-held+xml",
    rsat: "application/atsc-rsat+xml",
    bdoc: "application/bdoc",
    xcs: "application/calendar+xml",
    ccxml: "application/ccxml+xml",
    cdfx: "application/cdfx+xml",
    cdmia: "application/cdmi-capability",
    cdmic: "application/cdmi-container",
    cdmid: "application/cdmi-domain",
    cdmio: "application/cdmi-object",
    cdmiq: "application/cdmi-queue",
    cu: "application/cu-seeme",
    mpd: "application/dash+xml",
    davmount: "application/davmount+xml",
    dbk: "application/docbook+xml",
    dssc: "application/dssc+der",
    xdssc: "application/dssc+xml",
    es: "application/ecmascript",
    ecma: "application/ecmascript",
    emma: "application/emma+xml",
    emotionml: "application/emotionml+xml",
    epub: "application/epub+zip",
    exi: "application/exi",
    fdt: "application/fdt+xml",
    pfr: "application/font-tdpfr",
    geojson: "application/geo+json",
    gml: "application/gml+xml",
    gpx: "application/gpx+xml",
    gxf: "application/gxf",
    gz: "application/gzip",
    hjson: "application/hjson",
    stk: "application/hyperstudio",
    ink: "application/inkml+xml",
    inkml: "application/inkml+xml",
    ipfix: "application/ipfix",
    its: "application/its+xml",
    jar: "application/java-archive",
    war: "application/java-archive",
    ear: "application/java-archive",
    ser: "application/java-serialized-object",
    class: "application/java-vm",
    js: "application/javascript",
    mjs: "application/javascript",
    json: "application/json",
    map: "application/json",
    json5: "application/json5",
    jsonml: "application/jsonml+json",
    jsonld: "application/ld+json",
    lgr: "application/lgr+xml",
    lostxml: "application/lost+xml",
    hqx: "application/mac-binhex40",
    cpt: "application/mac-compactpro",
    mads: "application/mads+xml",
    webmanifest: "application/manifest+json",
    mrc: "application/marc",
    mrcx: "application/marcxml+xml",
    ma: "application/mathematica",
    nb: "application/mathematica",
    mb: "application/mathematica",
    mathml: "application/mathml+xml",
    mbox: "application/mbox",
    mscml: "application/mediaservercontrol+xml",
    metalink: "application/metalink+xml",
    meta4: "application/metalink4+xml",
    mets: "application/mets+xml",
    maei: "application/mmt-aei+xml",
    musd: "application/mmt-usd+xml",
    mods: "application/mods+xml",
    m21: "application/mp21",
    mp21: "application/mp21",
    mp4s: "application/mp4",
    m4p: "application/mp4",
    doc: "application/msword",
    dot: "application/msword",
    mxf: "application/mxf",
    nq: "application/n-quads",
    nt: "application/n-triples",
    cjs: "application/node",
    bin: "application/octet-stream",
    dms: "application/octet-stream",
    lrf: "application/octet-stream",
    mar: "application/octet-stream",
    so: "application/octet-stream",
    dist: "application/octet-stream",
    distz: "application/octet-stream",
    pkg: "application/octet-stream",
    bpk: "application/octet-stream",
    dump: "application/octet-stream",
    elc: "application/octet-stream",
    deploy: "application/octet-stream",
    exe: "application/octet-stream",
    dll: "application/octet-stream",
    deb: "application/octet-stream",
    dmg: "application/octet-stream",
    iso: "application/octet-stream",
    img: "application/octet-stream",
    msi: "application/octet-stream",
    msp: "application/octet-stream",
    msm: "application/octet-stream",
    buffer: "application/octet-stream",
    oda: "application/oda",
    opf: "application/oebps-package+xml",
    ogx: "application/ogg",
    omdoc: "application/omdoc+xml",
    onetoc: "application/onenote",
    onetoc2: "application/onenote",
    onetmp: "application/onenote",
    onepkg: "application/onenote",
    oxps: "application/oxps",
    relo: "application/p2p-overlay+xml",
    xer: "application/patch-ops-error+xml",
    pdf: "application/pdf",
    pgp: "application/pgp-encrypted",
    asc: "application/pgp-signature",
    sig: "application/pgp-signature",
    prf: "application/pics-rules",
    p10: "application/pkcs10",
    p7m: "application/pkcs7-mime",
    p7c: "application/pkcs7-mime",
    p7s: "application/pkcs7-signature",
    p8: "application/pkcs8",
    ac: "application/pkix-attr-cert",
    cer: "application/pkix-cert",
    crl: "application/pkix-crl",
    pkipath: "application/pkix-pkipath",
    pki: "application/pkixcmp",
    pls: "application/pls+xml",
    ai: "application/postscript",
    eps: "application/postscript",
    ps: "application/postscript",
    provx: "application/provenance+xml",
    cww: "application/prs.cww",
    pskcxml: "application/pskc+xml",
    raml: "application/raml+yaml",
    rdf: "application/rdf+xml",
    owl: "application/rdf+xml",
    rif: "application/reginfo+xml",
    rnc: "application/relax-ng-compact-syntax",
    rl: "application/resource-lists+xml",
    rld: "application/resource-lists-diff+xml",
    rs: "application/rls-services+xml",
    rapd: "application/route-apd+xml",
    sls: "application/route-s-tsid+xml",
    rusd: "application/route-usd+xml",
    gbr: "application/rpki-ghostbusters",
    mft: "application/rpki-manifest",
    roa: "application/rpki-roa",
    rsd: "application/rsd+xml",
    rss: "application/rss+xml",
    rtf: "application/rtf",
    sbml: "application/sbml+xml",
    scq: "application/scvp-cv-request",
    scs: "application/scvp-cv-response",
    spq: "application/scvp-vp-request",
    spp: "application/scvp-vp-response",
    sdp: "application/sdp",
    senmlx: "application/senml+xml",
    sensmlx: "application/sensml+xml",
    setpay: "application/set-payment-initiation",
    setreg: "application/set-registration-initiation",
    shf: "application/shf+xml",
    siv: "application/sieve",
    sieve: "application/sieve",
    smi: "application/smil+xml",
    smil: "application/smil+xml",
    rq: "application/sparql-query",
    srx: "application/sparql-results+xml",
    gram: "application/srgs",
    grxml: "application/srgs+xml",
    sru: "application/sru+xml",
    ssdl: "application/ssdl+xml",
    ssml: "application/ssml+xml",
    swidtag: "application/swid+xml",
    tei: "application/tei+xml",
    teicorpus: "application/tei+xml",
    tfi: "application/thraud+xml",
    tsd: "application/timestamped-data",
    toml: "application/toml",
    trig: "application/trig",
    ttml: "application/ttml+xml",
    ubj: "application/ubjson",
    rsheet: "application/urc-ressheet+xml",
    td: "application/urc-targetdesc+xml",
    vxml: "application/voicexml+xml",
    wasm: "application/wasm",
    wgt: "application/widget",
    hlp: "application/winhlp",
    wsdl: "application/wsdl+xml",
    wspolicy: "application/wspolicy+xml",
    xaml: "application/xaml+xml",
    xav: "application/xcap-att+xml",
    xca: "application/xcap-caps+xml",
    xdf: "application/xcap-diff+xml",
    xel: "application/xcap-el+xml",
    xns: "application/xcap-ns+xml",
    xenc: "application/xenc+xml",
    xhtml: "application/xhtml+xml",
    xht: "application/xhtml+xml",
    xlf: "application/xliff+xml",
    xml: "application/xml",
    xsl: "application/xml",
    xsd: "application/xml",
    rng: "application/xml",
    dtd: "application/xml-dtd",
    xop: "application/xop+xml",
    xpl: "application/xproc+xml",
    xslt: "application/xml",
    xspf: "application/xspf+xml",
    mxml: "application/xv+xml",
    xhvml: "application/xv+xml",
    xvml: "application/xv+xml",
    xvm: "application/xv+xml",
    yang: "application/yang",
    yin: "application/yin+xml",
    zip: "application/zip",
    "3gpp": "video/3gpp",
    adp: "audio/adpcm",
    amr: "audio/amr",
    au: "audio/basic",
    snd: "audio/basic",
    mid: "audio/midi",
    midi: "audio/midi",
    kar: "audio/midi",
    rmi: "audio/midi",
    mxmf: "audio/mobile-xmf",
    mp3: "audio/mpeg",
    m4a: "audio/mp4",
    mp4a: "audio/mp4",
    mpga: "audio/mpeg",
    mp2: "audio/mpeg",
    mp2a: "audio/mpeg",
    m2a: "audio/mpeg",
    m3a: "audio/mpeg",
    oga: "audio/ogg",
    ogg: "audio/ogg",
    spx: "audio/ogg",
    opus: "audio/ogg",
    s3m: "audio/s3m",
    sil: "audio/silk",
    wav: "audio/wav",
    weba: "audio/webm",
    xm: "audio/xm",
    ttc: "font/collection",
    otf: "font/otf",
    ttf: "font/ttf",
    woff: "font/woff",
    woff2: "font/woff2",
    exr: "image/aces",
    apng: "image/apng",
    avif: "image/avif",
    bmp: "image/bmp",
    cgm: "image/cgm",
    drle: "image/dicom-rle",
    emf: "image/emf",
    fits: "image/fits",
    g3: "image/g3fax",
    gif: "image/gif",
    heic: "image/heic",
    heics: "image/heic-sequence",
    heif: "image/heif",
    heifs: "image/heif-sequence",
    hej2: "image/hej2k",
    hsj2: "image/hsj2",
    ief: "image/ief",
    jls: "image/jls",
    jp2: "image/jp2",
    jpg2: "image/jp2",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    jpe: "image/jpeg",
    jph: "image/jph",
    jhc: "image/jphc",
    jpm: "image/jpm",
    jpx: "image/jpx",
    jpf: "image/jpx",
    jxr: "image/jxr",
    jxra: "image/jxra",
    jxrs: "image/jxrs",
    jxs: "image/jxs",
    jxsc: "image/jxsc",
    jxsi: "image/jxsi",
    jxss: "image/jxss",
    ktx: "image/ktx",
    ktx2: "image/ktx2",
    png: "image/png",
    btif: "image/prs.btif",
    pti: "image/prs.pti",
    sgi: "image/sgi",
    svg: "image/svg+xml",
    svgz: "image/svg+xml",
    t38: "image/t38",
    tif: "image/tiff",
    tiff: "image/tiff",
    tfx: "image/tiff-fx",
    webp: "image/webp",
    wmf: "image/wmf",
    "disposition-notification": "message/disposition-notification",
    u8msg: "message/global",
    u8dsn: "message/global-delivery-status",
    u8mdn: "message/global-disposition-notification",
    u8hdr: "message/global-headers",
    eml: "message/rfc822",
    mime: "message/rfc822",
    "3mf": "model/3mf",
    gltf: "model/gltf+json",
    glb: "model/gltf-binary",
    igs: "model/iges",
    iges: "model/iges",
    msh: "model/mesh",
    mesh: "model/mesh",
    silo: "model/mesh",
    mtl: "model/mtl",
    obj: "model/obj",
    stpz: "model/step+zip",
    stpxz: "model/step-xml+zip",
    stl: "model/stl",
    wrl: "model/vrml",
    vrml: "model/vrml",
    x3db: "model/x3d+fastinfoset",
    x3dbz: "model/x3d+binary",
    x3dv: "model/x3d-vrml",
    x3dvz: "model/x3d+vrml",
    x3d: "model/x3d+xml",
    x3dz: "model/x3d+xml",
    appcache: "text/cache-manifest",
    manifest: "text/cache-manifest",
    ics: "text/calendar",
    ifb: "text/calendar",
    coffee: "text/coffeescript",
    litcoffee: "text/coffeescript",
    css: "text/css",
    csv: "text/csv",
    html: "text/html",
    htm: "text/html",
    shtml: "text/html",
    jade: "text/jade",
    jsx: "text/jsx",
    less: "text/less",
    markdown: "text/markdown",
    md: "text/markdown",
    mml: "text/mathml",
    mdx: "text/mdx",
    n3: "text/n3",
    txt: "text/plain",
    text: "text/plain",
    conf: "text/plain",
    def: "text/plain",
    list: "text/plain",
    log: "text/plain",
    in: "text/plain",
    ini: "text/plain",
    dsc: "text/prs.lines.tag",
    rtx: "text/richtext",
    sgml: "text/sgml",
    sgm: "text/sgml",
    shex: "text/shex",
    slim: "text/slim",
    slm: "text/slim",
    spdx: "text/spdx",
    stylus: "text/stylus",
    styl: "text/stylus",
    tsv: "text/tab-separated-values",
    t: "text/troff",
    tr: "text/troff",
    roff: "text/troff",
    man: "text/troff",
    me: "text/troff",
    ms: "text/troff",
    ttl: "text/turtle",
    uri: "text/uri-list",
    uris: "text/uri-list",
    urls: "text/uri-list",
    vcard: "text/vcard",
    vtt: "text/vtt",
    yaml: "text/yaml",
    yml: "text/yaml",
    "3gp": "video/3gpp",
    "3g2": "video/3gpp2",
    h261: "video/h261",
    h263: "video/h263",
    h264: "video/h264",
    m4s: "video/iso.segment",
    jpgv: "video/jpeg",
    jpgm: "image/jpm",
    mj2: "video/mj2",
    mjp2: "video/mj2",
    ts: "video/mp2t",
    mp4: "video/mp4",
    mp4v: "video/mp4",
    mpg4: "video/mp4",
    mpeg: "video/mpeg",
    mpg: "video/mpeg",
    mpe: "video/mpeg",
    m1v: "video/mpeg",
    m2v: "video/mpeg",
    ogv: "video/ogg",
    qt: "video/quicktime",
    mov: "video/quicktime",
    webm: "video/webm",
  };
  function $l(a) {
    let e = ("" + a).trim().toLowerCase(),
      i = e.lastIndexOf(".");
    return mt[~i ? e.substring(++i) : e];
  }
  ea.lookup = $l;
  ea.mimes = mt;
});
var vt = y((Yx, gt) => {
  var ia = require("fs"),
    { join: jl, normalize: Rl, resolve: Fl } = require("path"),
    { totalist: Bl } = lt(),
    { parse: ql } = dt(),
    { lookup: zl } = ft(),
    Ll = () => {};
  function Hl(a, e) {
    for (let i = 0; i < e.length; i++) if (e[i].test(a)) return !0;
  }
  function ht(a, e) {
    let i = 0,
      n,
      t = a.length - 1;
    a.charCodeAt(t) === 47 && (a = a.substring(0, t));
    let r = [],
      o = `${a}/index`;
    for (; i < e.length; i++)
      (n = e[i] ? `.${e[i]}` : ""), a && r.push(a + n), r.push(o + n);
    return r;
  }
  function Ol(a, e, i) {
    let n = 0,
      t,
      r = ht(e, i);
    for (; n < r.length; n++) if ((t = a[r[n]])) return t;
  }
  function Ml(a, e, i, n) {
    let t = 0,
      r = ht(i, n),
      o,
      s,
      c,
      p;
    for (; t < r.length; t++)
      if (((o = Rl(jl(a, (c = r[t])))), o.startsWith(a) && ia.existsSync(o))) {
        if (((s = ia.statSync(o)), s.isDirectory())) continue;
        return (
          (p = xt(c, s, e)),
          (p["Cache-Control"] = e ? "no-cache" : "no-store"),
          { abs: o, stats: s, headers: p }
        );
      }
  }
  function Nl(a, e) {
    return (e.statusCode = 404), e.end();
  }
  function Gl(a, e, i, n, t) {
    let r = 200,
      o,
      s = {};
    t = { ...t };
    for (let c in t) (o = e.getHeader(c)), o && (t[c] = o);
    if (
      ((o = e.getHeader("content-type")) && (t["Content-Type"] = o),
      a.headers.range)
    ) {
      r = 206;
      let [c, p] = a.headers.range.replace("bytes=", "").split("-"),
        u = (s.end = parseInt(p, 10) || n.size - 1),
        m = (s.start = parseInt(c, 10) || 0);
      if (m >= n.size || u >= n.size)
        return (
          e.setHeader("Content-Range", `bytes */${n.size}`),
          (e.statusCode = 416),
          e.end()
        );
      (t["Content-Range"] = `bytes ${m}-${u}/${n.size}`),
        (t["Content-Length"] = u - m + 1),
        (t["Accept-Ranges"] = "bytes");
    }
    e.writeHead(r, t), ia.createReadStream(i, s).pipe(e);
  }
  var Ul = { ".br": "br", ".gz": "gzip" };
  function xt(a, e, i) {
    let n = Ul[a.slice(-3)],
      t = zl(a.slice(0, n && -3)) || "";
    t === "text/html" && (t += ";charset=utf-8");
    let r = {
      "Content-Length": e.size,
      "Content-Type": t,
      "Last-Modified": e.mtime.toUTCString(),
    };
    return (
      n && (r["Content-Encoding"] = n),
      i && (r.ETag = `W/"${e.size}-${e.mtime.getTime()}"`),
      r
    );
  }
  gt.exports = function (a, e = {}) {
    a = Fl(a || ".");
    let i = e.onNoMatch || Nl,
      n = e.setHeaders || Ll,
      t = e.extensions || ["html", "htm"],
      r = e.gzip && t.map((d) => `${d}.gz`).concat("gz"),
      o = e.brotli && t.map((d) => `${d}.br`).concat("br"),
      s = {},
      c = "/",
      p = !!e.etag,
      u = !!e.single;
    if (typeof e.single == "string") {
      let d = e.single.lastIndexOf(".");
      c += ~d ? e.single.substring(0, d) : e.single;
    }
    let m = [];
    e.ignores !== !1 &&
      (m.push(/[/]([A-Za-z\s\d~$._-]+\.\w+){1,}$/),
      e.dotfiles ? m.push(/\/\.\w/) : m.push(/\/\.well-known/),
      [].concat(e.ignores || []).forEach((d) => {
        m.push(new RegExp(d, "i"));
      }));
    let f = e.maxAge != null && `public,max-age=${e.maxAge}`;
    f && e.immutable
      ? (f += ",immutable")
      : f && e.maxAge === 0 && (f += ",must-revalidate"),
      e.dev ||
        Bl(a, (d, h, x) => {
          if (!/\.well-known[\\+\/]/.test(d)) {
            if (!e.dotfiles && /(^\.|[\\+|\/+]\.)/.test(d)) return;
          }
          let v = xt(d, x, p);
          f && (v["Cache-Control"] = f),
            (s["/" + d.normalize().replace(/\\+/g, "/")] = {
              abs: h,
              stats: x,
              headers: v,
            });
        });
    let l = e.dev ? Ml.bind(0, a, p) : Ol.bind(0, s);
    return function (d, h, x) {
      let v = [""],
        g = ql(d).pathname,
        b = d.headers["accept-encoding"] || "";
      if (
        (r && b.includes("gzip") && v.unshift(...r),
        o && /(br|brotli)/i.test(b) && v.unshift(...o),
        v.push(...t),
        g.indexOf("%") !== -1)
      )
        try {
          g = decodeURIComponent(g);
        } catch {}
      let k = l(g, v) || (u && !Hl(g, m) && l(c, v));
      if (!k) return x ? x() : i(d, h);
      if (p && d.headers["if-none-match"] === k.headers.ETag)
        return h.writeHead(304), h.end();
      (r || o) && h.setHeader("Vary", "Accept-Encoding"),
        n(h, g, k.stats),
        Gl(d, h, k.abs, k.stats, k.headers);
    };
  };
});
var _t = y((yt, oi) => {
  (function (a) {
    "use strict";
    let e = "(0?\\d+|0x[a-f0-9]+)",
      i = {
        fourOctet: new RegExp(`^${e}\\.${e}\\.${e}\\.${e}$`, "i"),
        threeOctet: new RegExp(`^${e}\\.${e}\\.${e}$`, "i"),
        twoOctet: new RegExp(`^${e}\\.${e}$`, "i"),
        longValue: new RegExp(`^${e}$`, "i"),
      },
      n = new RegExp("^0[0-7]+$", "i"),
      t = new RegExp("^0x[a-f0-9]+$", "i"),
      r = "%[0-9a-z]{1,}",
      o = "(?:[0-9a-f]+::?)+",
      s = {
        zoneIndex: new RegExp(r, "i"),
        native: new RegExp(`^(::)?(${o})?([0-9a-f]+)?(::)?(${r})?$`, "i"),
        deprecatedTransitional: new RegExp(
          `^(?:::)(${e}\\.${e}\\.${e}\\.${e}(${r})?)$`,
          "i"
        ),
        transitional: new RegExp(
          `^((?:${o})|(?:::)(?:${o})?)${e}\\.${e}\\.${e}\\.${e}(${r})?$`,
          "i"
        ),
      };
    function c(l, d) {
      if (l.indexOf("::") !== l.lastIndexOf("::")) return null;
      let h = 0,
        x = -1,
        v = (l.match(s.zoneIndex) || [])[0],
        g,
        b;
      for (
        v && ((v = v.substring(1)), (l = l.replace(/%.+$/, "")));
        (x = l.indexOf(":", x + 1)) >= 0;

      )
        h++;
      if (
        (l.substr(0, 2) === "::" && h--, l.substr(-2, 2) === "::" && h--, h > d)
      )
        return null;
      for (b = d - h, g = ":"; b--; ) g += "0:";
      return (
        (l = l.replace("::", g)),
        l[0] === ":" && (l = l.slice(1)),
        l[l.length - 1] === ":" && (l = l.slice(0, -1)),
        (d = (function () {
          let k = l.split(":"),
            T = [];
          for (let _ = 0; _ < k.length; _++) T.push(parseInt(k[_], 16));
          return T;
        })()),
        { parts: d, zoneId: v }
      );
    }
    function p(l, d, h, x) {
      if (l.length !== d.length)
        throw new Error(
          "ipaddr: cannot match CIDR for objects with different lengths"
        );
      let v = 0,
        g;
      for (; x > 0; ) {
        if (((g = h - x), g < 0 && (g = 0), l[v] >> g !== d[v] >> g)) return !1;
        (x -= h), (v += 1);
      }
      return !0;
    }
    function u(l) {
      if (t.test(l)) return parseInt(l, 16);
      if (l[0] === "0" && !isNaN(parseInt(l[1], 10))) {
        if (n.test(l)) return parseInt(l, 8);
        throw new Error(`ipaddr: cannot parse ${l} as octal`);
      }
      return parseInt(l, 10);
    }
    function m(l, d) {
      for (; l.length < d; ) l = `0${l}`;
      return l;
    }
    let f = {};
    (f.IPv4 = (function () {
      function l(d) {
        if (d.length !== 4)
          throw new Error("ipaddr: ipv4 octet count should be 4");
        let h, x;
        for (h = 0; h < d.length; h++)
          if (((x = d[h]), !(0 <= x && x <= 255)))
            throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
        this.octets = d;
      }
      return (
        (l.prototype.SpecialRanges = {
          unspecified: [[new l([0, 0, 0, 0]), 8]],
          broadcast: [[new l([255, 255, 255, 255]), 32]],
          multicast: [[new l([224, 0, 0, 0]), 4]],
          linkLocal: [[new l([169, 254, 0, 0]), 16]],
          loopback: [[new l([127, 0, 0, 0]), 8]],
          carrierGradeNat: [[new l([100, 64, 0, 0]), 10]],
          private: [
            [new l([10, 0, 0, 0]), 8],
            [new l([172, 16, 0, 0]), 12],
            [new l([192, 168, 0, 0]), 16],
          ],
          reserved: [
            [new l([192, 0, 0, 0]), 24],
            [new l([192, 0, 2, 0]), 24],
            [new l([192, 88, 99, 0]), 24],
            [new l([198, 51, 100, 0]), 24],
            [new l([203, 0, 113, 0]), 24],
            [new l([240, 0, 0, 0]), 4],
          ],
        }),
        (l.prototype.kind = function () {
          return "ipv4";
        }),
        (l.prototype.match = function (d, h) {
          let x;
          if (
            (h === void 0 && ((x = d), (d = x[0]), (h = x[1])),
            d.kind() !== "ipv4")
          )
            throw new Error(
              "ipaddr: cannot match ipv4 address with non-ipv4 one"
            );
          return p(this.octets, d.octets, 8, h);
        }),
        (l.prototype.prefixLengthFromSubnetMask = function () {
          let d = 0,
            h = !1,
            x = {
              0: 8,
              128: 7,
              192: 6,
              224: 5,
              240: 4,
              248: 3,
              252: 2,
              254: 1,
              255: 0,
            },
            v,
            g,
            b;
          for (v = 3; v >= 0; v -= 1)
            if (((g = this.octets[v]), g in x)) {
              if (((b = x[g]), h && b !== 0)) return null;
              b !== 8 && (h = !0), (d += b);
            } else return null;
          return 32 - d;
        }),
        (l.prototype.range = function () {
          return f.subnetMatch(this, this.SpecialRanges);
        }),
        (l.prototype.toByteArray = function () {
          return this.octets.slice(0);
        }),
        (l.prototype.toIPv4MappedAddress = function () {
          return f.IPv6.parse(`::ffff:${this.toString()}`);
        }),
        (l.prototype.toNormalizedString = function () {
          return this.toString();
        }),
        (l.prototype.toString = function () {
          return this.octets.join(".");
        }),
        l
      );
    })()),
      (f.IPv4.broadcastAddressFromCIDR = function (l) {
        try {
          let d = this.parseCIDR(l),
            h = d[0].toByteArray(),
            x = this.subnetMaskFromPrefixLength(d[1]).toByteArray(),
            v = [],
            g = 0;
          for (; g < 4; )
            v.push(parseInt(h[g], 10) | (parseInt(x[g], 10) ^ 255)), g++;
          return new this(v);
        } catch {
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      }),
      (f.IPv4.isIPv4 = function (l) {
        return this.parser(l) !== null;
      }),
      (f.IPv4.isValid = function (l) {
        try {
          return new this(this.parser(l)), !0;
        } catch {
          return !1;
        }
      }),
      (f.IPv4.isValidFourPartDecimal = function (l) {
        return !!(
          f.IPv4.isValid(l) && l.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)
        );
      }),
      (f.IPv4.networkAddressFromCIDR = function (l) {
        let d, h, x, v, g;
        try {
          for (
            d = this.parseCIDR(l),
              x = d[0].toByteArray(),
              g = this.subnetMaskFromPrefixLength(d[1]).toByteArray(),
              v = [],
              h = 0;
            h < 4;

          )
            v.push(parseInt(x[h], 10) & parseInt(g[h], 10)), h++;
          return new this(v);
        } catch {
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      }),
      (f.IPv4.parse = function (l) {
        let d = this.parser(l);
        if (d === null)
          throw new Error(
            "ipaddr: string is not formatted like an IPv4 Address"
          );
        return new this(d);
      }),
      (f.IPv4.parseCIDR = function (l) {
        let d;
        if ((d = l.match(/^(.+)\/(\d+)$/))) {
          let h = parseInt(d[2]);
          if (h >= 0 && h <= 32) {
            let x = [this.parse(d[1]), h];
            return (
              Object.defineProperty(x, "toString", {
                value: function () {
                  return this.join("/");
                },
              }),
              x
            );
          }
        }
        throw new Error(
          "ipaddr: string is not formatted like an IPv4 CIDR range"
        );
      }),
      (f.IPv4.parser = function (l) {
        let d, h, x;
        if ((d = l.match(i.fourOctet)))
          return (function () {
            let v = d.slice(1, 6),
              g = [];
            for (let b = 0; b < v.length; b++) (h = v[b]), g.push(u(h));
            return g;
          })();
        if ((d = l.match(i.longValue))) {
          if (((x = u(d[1])), x > 4294967295 || x < 0))
            throw new Error("ipaddr: address outside defined range");
          return (function () {
            let v = [],
              g;
            for (g = 0; g <= 24; g += 8) v.push((x >> g) & 255);
            return v;
          })().reverse();
        } else
          return (d = l.match(i.twoOctet))
            ? (function () {
                let v = d.slice(1, 4),
                  g = [];
                if (((x = u(v[1])), x > 16777215 || x < 0))
                  throw new Error("ipaddr: address outside defined range");
                return (
                  g.push(u(v[0])),
                  g.push((x >> 16) & 255),
                  g.push((x >> 8) & 255),
                  g.push(x & 255),
                  g
                );
              })()
            : (d = l.match(i.threeOctet))
            ? (function () {
                let v = d.slice(1, 5),
                  g = [];
                if (((x = u(v[2])), x > 65535 || x < 0))
                  throw new Error("ipaddr: address outside defined range");
                return (
                  g.push(u(v[0])),
                  g.push(u(v[1])),
                  g.push((x >> 8) & 255),
                  g.push(x & 255),
                  g
                );
              })()
            : null;
      }),
      (f.IPv4.subnetMaskFromPrefixLength = function (l) {
        if (((l = parseInt(l)), l < 0 || l > 32))
          throw new Error("ipaddr: invalid IPv4 prefix length");
        let d = [0, 0, 0, 0],
          h = 0,
          x = Math.floor(l / 8);
        for (; h < x; ) (d[h] = 255), h++;
        return (
          x < 4 && (d[x] = (Math.pow(2, l % 8) - 1) << (8 - (l % 8))),
          new this(d)
        );
      }),
      (f.IPv6 = (function () {
        function l(d, h) {
          let x, v;
          if (d.length === 16)
            for (this.parts = [], x = 0; x <= 14; x += 2)
              this.parts.push((d[x] << 8) | d[x + 1]);
          else if (d.length === 8) this.parts = d;
          else throw new Error("ipaddr: ipv6 part count should be 8 or 16");
          for (x = 0; x < this.parts.length; x++)
            if (((v = this.parts[x]), !(0 <= v && v <= 65535)))
              throw new Error("ipaddr: ipv6 part should fit in 16 bits");
          h && (this.zoneId = h);
        }
        return (
          (l.prototype.SpecialRanges = {
            unspecified: [new l([0, 0, 0, 0, 0, 0, 0, 0]), 128],
            linkLocal: [new l([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
            multicast: [new l([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
            loopback: [new l([0, 0, 0, 0, 0, 0, 0, 1]), 128],
            uniqueLocal: [new l([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
            ipv4Mapped: [new l([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
            rfc6145: [new l([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
            rfc6052: [new l([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
            "6to4": [new l([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
            teredo: [new l([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
            reserved: [[new l([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]],
          }),
          (l.prototype.isIPv4MappedAddress = function () {
            return this.range() === "ipv4Mapped";
          }),
          (l.prototype.kind = function () {
            return "ipv6";
          }),
          (l.prototype.match = function (d, h) {
            let x;
            if (
              (h === void 0 && ((x = d), (d = x[0]), (h = x[1])),
              d.kind() !== "ipv6")
            )
              throw new Error(
                "ipaddr: cannot match ipv6 address with non-ipv6 one"
              );
            return p(this.parts, d.parts, 16, h);
          }),
          (l.prototype.prefixLengthFromSubnetMask = function () {
            let d = 0,
              h = !1,
              x = {
                0: 16,
                32768: 15,
                49152: 14,
                57344: 13,
                61440: 12,
                63488: 11,
                64512: 10,
                65024: 9,
                65280: 8,
                65408: 7,
                65472: 6,
                65504: 5,
                65520: 4,
                65528: 3,
                65532: 2,
                65534: 1,
                65535: 0,
              },
              v,
              g;
            for (let b = 7; b >= 0; b -= 1)
              if (((v = this.parts[b]), v in x)) {
                if (((g = x[v]), h && g !== 0)) return null;
                g !== 16 && (h = !0), (d += g);
              } else return null;
            return 128 - d;
          }),
          (l.prototype.range = function () {
            return f.subnetMatch(this, this.SpecialRanges);
          }),
          (l.prototype.toByteArray = function () {
            let d,
              h = [],
              x = this.parts;
            for (let v = 0; v < x.length; v++)
              (d = x[v]), h.push(d >> 8), h.push(d & 255);
            return h;
          }),
          (l.prototype.toFixedLengthString = function () {
            let d = function () {
                let x = [];
                for (let v = 0; v < this.parts.length; v++)
                  x.push(m(this.parts[v].toString(16), 4));
                return x;
              }
                .call(this)
                .join(":"),
              h = "";
            return this.zoneId && (h = `%${this.zoneId}`), d + h;
          }),
          (l.prototype.toIPv4Address = function () {
            if (!this.isIPv4MappedAddress())
              throw new Error(
                "ipaddr: trying to convert a generic ipv6 address to ipv4"
              );
            let d = this.parts.slice(-2),
              h = d[0],
              x = d[1];
            return new f.IPv4([h >> 8, h & 255, x >> 8, x & 255]);
          }),
          (l.prototype.toNormalizedString = function () {
            let d = function () {
                let x = [];
                for (let v = 0; v < this.parts.length; v++)
                  x.push(this.parts[v].toString(16));
                return x;
              }
                .call(this)
                .join(":"),
              h = "";
            return this.zoneId && (h = `%${this.zoneId}`), d + h;
          }),
          (l.prototype.toRFC5952String = function () {
            let d = /((^|:)(0(:|$)){2,})/g,
              h = this.toNormalizedString(),
              x = 0,
              v = -1,
              g;
            for (; (g = d.exec(h)); )
              g[0].length > v && ((x = g.index), (v = g[0].length));
            return v < 0 ? h : `${h.substring(0, x)}::${h.substring(x + v)}`;
          }),
          (l.prototype.toString = function () {
            return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
          }),
          l
        );
      })()),
      (f.IPv6.broadcastAddressFromCIDR = function (l) {
        try {
          let d = this.parseCIDR(l),
            h = d[0].toByteArray(),
            x = this.subnetMaskFromPrefixLength(d[1]).toByteArray(),
            v = [],
            g = 0;
          for (; g < 16; )
            v.push(parseInt(h[g], 10) | (parseInt(x[g], 10) ^ 255)), g++;
          return new this(v);
        } catch (d) {
          throw new Error(
            `ipaddr: the address does not have IPv6 CIDR format (${d})`
          );
        }
      }),
      (f.IPv6.isIPv6 = function (l) {
        return this.parser(l) !== null;
      }),
      (f.IPv6.isValid = function (l) {
        if (typeof l == "string" && l.indexOf(":") === -1) return !1;
        try {
          let d = this.parser(l);
          return new this(d.parts, d.zoneId), !0;
        } catch {
          return !1;
        }
      }),
      (f.IPv6.networkAddressFromCIDR = function (l) {
        let d, h, x, v, g;
        try {
          for (
            d = this.parseCIDR(l),
              x = d[0].toByteArray(),
              g = this.subnetMaskFromPrefixLength(d[1]).toByteArray(),
              v = [],
              h = 0;
            h < 16;

          )
            v.push(parseInt(x[h], 10) & parseInt(g[h], 10)), h++;
          return new this(v);
        } catch (b) {
          throw new Error(
            `ipaddr: the address does not have IPv6 CIDR format (${b})`
          );
        }
      }),
      (f.IPv6.parse = function (l) {
        let d = this.parser(l);
        if (d.parts === null)
          throw new Error(
            "ipaddr: string is not formatted like an IPv6 Address"
          );
        return new this(d.parts, d.zoneId);
      }),
      (f.IPv6.parseCIDR = function (l) {
        let d, h, x;
        if (
          (h = l.match(/^(.+)\/(\d+)$/)) &&
          ((d = parseInt(h[2])), d >= 0 && d <= 128)
        )
          return (
            (x = [this.parse(h[1]), d]),
            Object.defineProperty(x, "toString", {
              value: function () {
                return this.join("/");
              },
            }),
            x
          );
        throw new Error(
          "ipaddr: string is not formatted like an IPv6 CIDR range"
        );
      }),
      (f.IPv6.parser = function (l) {
        let d, h, x, v, g, b;
        if ((x = l.match(s.deprecatedTransitional)))
          return this.parser(`::ffff:${x[1]}`);
        if (s.native.test(l)) return c(l, 8);
        if (
          (x = l.match(s.transitional)) &&
          ((b = x[6] || ""), (d = c(x[1].slice(0, -1) + b, 6)), d.parts)
        ) {
          for (
            g = [
              parseInt(x[2]),
              parseInt(x[3]),
              parseInt(x[4]),
              parseInt(x[5]),
            ],
              h = 0;
            h < g.length;
            h++
          )
            if (((v = g[h]), !(0 <= v && v <= 255))) return null;
          return (
            d.parts.push((g[0] << 8) | g[1]),
            d.parts.push((g[2] << 8) | g[3]),
            { parts: d.parts, zoneId: d.zoneId }
          );
        }
        return null;
      }),
      (f.IPv6.subnetMaskFromPrefixLength = function (l) {
        if (((l = parseInt(l)), l < 0 || l > 128))
          throw new Error("ipaddr: invalid IPv6 prefix length");
        let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          h = 0,
          x = Math.floor(l / 8);
        for (; h < x; ) (d[h] = 255), h++;
        return (
          x < 16 && (d[x] = (Math.pow(2, l % 8) - 1) << (8 - (l % 8))),
          new this(d)
        );
      }),
      (f.fromByteArray = function (l) {
        let d = l.length;
        if (d === 4) return new f.IPv4(l);
        if (d === 16) return new f.IPv6(l);
        throw new Error(
          "ipaddr: the binary input is neither an IPv6 nor IPv4 address"
        );
      }),
      (f.isValid = function (l) {
        return f.IPv6.isValid(l) || f.IPv4.isValid(l);
      }),
      (f.parse = function (l) {
        if (f.IPv6.isValid(l)) return f.IPv6.parse(l);
        if (f.IPv4.isValid(l)) return f.IPv4.parse(l);
        throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
      }),
      (f.parseCIDR = function (l) {
        try {
          return f.IPv6.parseCIDR(l);
        } catch {
          try {
            return f.IPv4.parseCIDR(l);
          } catch {
            throw new Error(
              "ipaddr: the address has neither IPv6 nor IPv4 CIDR format"
            );
          }
        }
      }),
      (f.process = function (l) {
        let d = this.parse(l);
        return d.kind() === "ipv6" && d.isIPv4MappedAddress()
          ? d.toIPv4Address()
          : d;
      }),
      (f.subnetMatch = function (l, d, h) {
        let x, v, g, b;
        h == null && (h = "unicast");
        for (v in d)
          if (Object.prototype.hasOwnProperty.call(d, v)) {
            for (
              g = d[v], g[0] && !(g[0] instanceof Array) && (g = [g]), x = 0;
              x < g.length;
              x++
            )
              if (((b = g[x]), l.kind() === b[0].kind() && l.match.apply(l, b)))
                return v;
          }
        return h;
      }),
      typeof oi < "u" && oi.exports ? (oi.exports = f) : (a.ipaddr = f);
  })(yt);
});
var St = y((og, du) => {
  du.exports = {
    "application/1d-interleaved-parityfec": { source: "iana" },
    "application/3gpdash-qoe-report+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/3gpp-ims+xml": { source: "iana", compressible: !0 },
    "application/3gpphal+json": { source: "iana", compressible: !0 },
    "application/3gpphalforms+json": { source: "iana", compressible: !0 },
    "application/a2l": { source: "iana" },
    "application/ace+cbor": { source: "iana" },
    "application/activemessage": { source: "iana" },
    "application/activity+json": { source: "iana", compressible: !0 },
    "application/alto-costmap+json": { source: "iana", compressible: !0 },
    "application/alto-costmapfilter+json": { source: "iana", compressible: !0 },
    "application/alto-directory+json": { source: "iana", compressible: !0 },
    "application/alto-endpointcost+json": { source: "iana", compressible: !0 },
    "application/alto-endpointcostparams+json": {
      source: "iana",
      compressible: !0,
    },
    "application/alto-endpointprop+json": { source: "iana", compressible: !0 },
    "application/alto-endpointpropparams+json": {
      source: "iana",
      compressible: !0,
    },
    "application/alto-error+json": { source: "iana", compressible: !0 },
    "application/alto-networkmap+json": { source: "iana", compressible: !0 },
    "application/alto-networkmapfilter+json": {
      source: "iana",
      compressible: !0,
    },
    "application/alto-updatestreamcontrol+json": {
      source: "iana",
      compressible: !0,
    },
    "application/alto-updatestreamparams+json": {
      source: "iana",
      compressible: !0,
    },
    "application/aml": { source: "iana" },
    "application/andrew-inset": { source: "iana", extensions: ["ez"] },
    "application/applefile": { source: "iana" },
    "application/applixware": { source: "apache", extensions: ["aw"] },
    "application/at+jwt": { source: "iana" },
    "application/atf": { source: "iana" },
    "application/atfx": { source: "iana" },
    "application/atom+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["atom"],
    },
    "application/atomcat+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["atomcat"],
    },
    "application/atomdeleted+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["atomdeleted"],
    },
    "application/atomicmail": { source: "iana" },
    "application/atomsvc+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["atomsvc"],
    },
    "application/atsc-dwd+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["dwd"],
    },
    "application/atsc-dynamic-event-message": { source: "iana" },
    "application/atsc-held+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["held"],
    },
    "application/atsc-rdt+json": { source: "iana", compressible: !0 },
    "application/atsc-rsat+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rsat"],
    },
    "application/atxml": { source: "iana" },
    "application/auth-policy+xml": { source: "iana", compressible: !0 },
    "application/bacnet-xdd+zip": { source: "iana", compressible: !1 },
    "application/batch-smtp": { source: "iana" },
    "application/bdoc": { compressible: !1, extensions: ["bdoc"] },
    "application/beep+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/calendar+json": { source: "iana", compressible: !0 },
    "application/calendar+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xcs"],
    },
    "application/call-completion": { source: "iana" },
    "application/cals-1840": { source: "iana" },
    "application/captive+json": { source: "iana", compressible: !0 },
    "application/cbor": { source: "iana" },
    "application/cbor-seq": { source: "iana" },
    "application/cccex": { source: "iana" },
    "application/ccmp+xml": { source: "iana", compressible: !0 },
    "application/ccxml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["ccxml"],
    },
    "application/cdfx+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["cdfx"],
    },
    "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] },
    "application/cdmi-container": { source: "iana", extensions: ["cdmic"] },
    "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] },
    "application/cdmi-object": { source: "iana", extensions: ["cdmio"] },
    "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
    "application/cdni": { source: "iana" },
    "application/cea": { source: "iana" },
    "application/cea-2018+xml": { source: "iana", compressible: !0 },
    "application/cellml+xml": { source: "iana", compressible: !0 },
    "application/cfw": { source: "iana" },
    "application/city+json": { source: "iana", compressible: !0 },
    "application/clr": { source: "iana" },
    "application/clue+xml": { source: "iana", compressible: !0 },
    "application/clue_info+xml": { source: "iana", compressible: !0 },
    "application/cms": { source: "iana" },
    "application/cnrp+xml": { source: "iana", compressible: !0 },
    "application/coap-group+json": { source: "iana", compressible: !0 },
    "application/coap-payload": { source: "iana" },
    "application/commonground": { source: "iana" },
    "application/conference-info+xml": { source: "iana", compressible: !0 },
    "application/cose": { source: "iana" },
    "application/cose-key": { source: "iana" },
    "application/cose-key-set": { source: "iana" },
    "application/cpl+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["cpl"],
    },
    "application/csrattrs": { source: "iana" },
    "application/csta+xml": { source: "iana", compressible: !0 },
    "application/cstadata+xml": { source: "iana", compressible: !0 },
    "application/csvm+json": { source: "iana", compressible: !0 },
    "application/cu-seeme": { source: "apache", extensions: ["cu"] },
    "application/cwt": { source: "iana" },
    "application/cybercash": { source: "iana" },
    "application/dart": { compressible: !0 },
    "application/dash+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mpd"],
    },
    "application/dash-patch+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mpp"],
    },
    "application/dashdelta": { source: "iana" },
    "application/davmount+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["davmount"],
    },
    "application/dca-rft": { source: "iana" },
    "application/dcd": { source: "iana" },
    "application/dec-dx": { source: "iana" },
    "application/dialog-info+xml": { source: "iana", compressible: !0 },
    "application/dicom": { source: "iana" },
    "application/dicom+json": { source: "iana", compressible: !0 },
    "application/dicom+xml": { source: "iana", compressible: !0 },
    "application/dii": { source: "iana" },
    "application/dit": { source: "iana" },
    "application/dns": { source: "iana" },
    "application/dns+json": { source: "iana", compressible: !0 },
    "application/dns-message": { source: "iana" },
    "application/docbook+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["dbk"],
    },
    "application/dots+cbor": { source: "iana" },
    "application/dskpp+xml": { source: "iana", compressible: !0 },
    "application/dssc+der": { source: "iana", extensions: ["dssc"] },
    "application/dssc+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xdssc"],
    },
    "application/dvcs": { source: "iana" },
    "application/ecmascript": {
      source: "iana",
      compressible: !0,
      extensions: ["es", "ecma"],
    },
    "application/edi-consent": { source: "iana" },
    "application/edi-x12": { source: "iana", compressible: !1 },
    "application/edifact": { source: "iana", compressible: !1 },
    "application/efi": { source: "iana" },
    "application/elm+json": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/elm+xml": { source: "iana", compressible: !0 },
    "application/emergencycalldata.cap+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/emergencycalldata.comment+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.control+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.deviceinfo+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.ecall.msd": { source: "iana" },
    "application/emergencycalldata.providerinfo+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.serviceinfo+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.subscriberinfo+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emergencycalldata.veds+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/emma+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["emma"],
    },
    "application/emotionml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["emotionml"],
    },
    "application/encaprtp": { source: "iana" },
    "application/epp+xml": { source: "iana", compressible: !0 },
    "application/epub+zip": {
      source: "iana",
      compressible: !1,
      extensions: ["epub"],
    },
    "application/eshop": { source: "iana" },
    "application/exi": { source: "iana", extensions: ["exi"] },
    "application/expect-ct-report+json": { source: "iana", compressible: !0 },
    "application/express": { source: "iana", extensions: ["exp"] },
    "application/fastinfoset": { source: "iana" },
    "application/fastsoap": { source: "iana" },
    "application/fdt+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["fdt"],
    },
    "application/fhir+json": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/fhir+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/fido.trusted-apps+json": { compressible: !0 },
    "application/fits": { source: "iana" },
    "application/flexfec": { source: "iana" },
    "application/font-sfnt": { source: "iana" },
    "application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
    "application/font-woff": { source: "iana", compressible: !1 },
    "application/framework-attributes+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/geo+json": {
      source: "iana",
      compressible: !0,
      extensions: ["geojson"],
    },
    "application/geo+json-seq": { source: "iana" },
    "application/geopackage+sqlite3": { source: "iana" },
    "application/geoxacml+xml": { source: "iana", compressible: !0 },
    "application/gltf-buffer": { source: "iana" },
    "application/gml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["gml"],
    },
    "application/gpx+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["gpx"],
    },
    "application/gxf": { source: "apache", extensions: ["gxf"] },
    "application/gzip": {
      source: "iana",
      compressible: !1,
      extensions: ["gz"],
    },
    "application/h224": { source: "iana" },
    "application/held+xml": { source: "iana", compressible: !0 },
    "application/hjson": { extensions: ["hjson"] },
    "application/http": { source: "iana" },
    "application/hyperstudio": { source: "iana", extensions: ["stk"] },
    "application/ibe-key-request+xml": { source: "iana", compressible: !0 },
    "application/ibe-pkg-reply+xml": { source: "iana", compressible: !0 },
    "application/ibe-pp-data": { source: "iana" },
    "application/iges": { source: "iana" },
    "application/im-iscomposing+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/index": { source: "iana" },
    "application/index.cmd": { source: "iana" },
    "application/index.obj": { source: "iana" },
    "application/index.response": { source: "iana" },
    "application/index.vnd": { source: "iana" },
    "application/inkml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["ink", "inkml"],
    },
    "application/iotp": { source: "iana" },
    "application/ipfix": { source: "iana", extensions: ["ipfix"] },
    "application/ipp": { source: "iana" },
    "application/isup": { source: "iana" },
    "application/its+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["its"],
    },
    "application/java-archive": {
      source: "apache",
      compressible: !1,
      extensions: ["jar", "war", "ear"],
    },
    "application/java-serialized-object": {
      source: "apache",
      compressible: !1,
      extensions: ["ser"],
    },
    "application/java-vm": {
      source: "apache",
      compressible: !1,
      extensions: ["class"],
    },
    "application/javascript": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["js", "mjs"],
    },
    "application/jf2feed+json": { source: "iana", compressible: !0 },
    "application/jose": { source: "iana" },
    "application/jose+json": { source: "iana", compressible: !0 },
    "application/jrd+json": { source: "iana", compressible: !0 },
    "application/jscalendar+json": { source: "iana", compressible: !0 },
    "application/json": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["json", "map"],
    },
    "application/json-patch+json": { source: "iana", compressible: !0 },
    "application/json-seq": { source: "iana" },
    "application/json5": { extensions: ["json5"] },
    "application/jsonml+json": {
      source: "apache",
      compressible: !0,
      extensions: ["jsonml"],
    },
    "application/jwk+json": { source: "iana", compressible: !0 },
    "application/jwk-set+json": { source: "iana", compressible: !0 },
    "application/jwt": { source: "iana" },
    "application/kpml-request+xml": { source: "iana", compressible: !0 },
    "application/kpml-response+xml": { source: "iana", compressible: !0 },
    "application/ld+json": {
      source: "iana",
      compressible: !0,
      extensions: ["jsonld"],
    },
    "application/lgr+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["lgr"],
    },
    "application/link-format": { source: "iana" },
    "application/load-control+xml": { source: "iana", compressible: !0 },
    "application/lost+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["lostxml"],
    },
    "application/lostsync+xml": { source: "iana", compressible: !0 },
    "application/lpf+zip": { source: "iana", compressible: !1 },
    "application/lxf": { source: "iana" },
    "application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
    "application/mac-compactpro": { source: "apache", extensions: ["cpt"] },
    "application/macwriteii": { source: "iana" },
    "application/mads+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mads"],
    },
    "application/manifest+json": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["webmanifest"],
    },
    "application/marc": { source: "iana", extensions: ["mrc"] },
    "application/marcxml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mrcx"],
    },
    "application/mathematica": {
      source: "iana",
      extensions: ["ma", "nb", "mb"],
    },
    "application/mathml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mathml"],
    },
    "application/mathml-content+xml": { source: "iana", compressible: !0 },
    "application/mathml-presentation+xml": { source: "iana", compressible: !0 },
    "application/mbms-associated-procedure-description+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/mbms-deregister+xml": { source: "iana", compressible: !0 },
    "application/mbms-envelope+xml": { source: "iana", compressible: !0 },
    "application/mbms-msk+xml": { source: "iana", compressible: !0 },
    "application/mbms-msk-response+xml": { source: "iana", compressible: !0 },
    "application/mbms-protection-description+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/mbms-reception-report+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/mbms-register+xml": { source: "iana", compressible: !0 },
    "application/mbms-register-response+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/mbms-schedule+xml": { source: "iana", compressible: !0 },
    "application/mbms-user-service-description+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/mbox": { source: "iana", extensions: ["mbox"] },
    "application/media-policy-dataset+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mpf"],
    },
    "application/media_control+xml": { source: "iana", compressible: !0 },
    "application/mediaservercontrol+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mscml"],
    },
    "application/merge-patch+json": { source: "iana", compressible: !0 },
    "application/metalink+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["metalink"],
    },
    "application/metalink4+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["meta4"],
    },
    "application/mets+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mets"],
    },
    "application/mf4": { source: "iana" },
    "application/mikey": { source: "iana" },
    "application/mipc": { source: "iana" },
    "application/missing-blocks+cbor-seq": { source: "iana" },
    "application/mmt-aei+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["maei"],
    },
    "application/mmt-usd+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["musd"],
    },
    "application/mods+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mods"],
    },
    "application/moss-keys": { source: "iana" },
    "application/moss-signature": { source: "iana" },
    "application/mosskey-data": { source: "iana" },
    "application/mosskey-request": { source: "iana" },
    "application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
    "application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] },
    "application/mpeg4-generic": { source: "iana" },
    "application/mpeg4-iod": { source: "iana" },
    "application/mpeg4-iod-xmt": { source: "iana" },
    "application/mrb-consumer+xml": { source: "iana", compressible: !0 },
    "application/mrb-publish+xml": { source: "iana", compressible: !0 },
    "application/msc-ivr+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/msc-mixer+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/msword": {
      source: "iana",
      compressible: !1,
      extensions: ["doc", "dot"],
    },
    "application/mud+json": { source: "iana", compressible: !0 },
    "application/multipart-core": { source: "iana" },
    "application/mxf": { source: "iana", extensions: ["mxf"] },
    "application/n-quads": { source: "iana", extensions: ["nq"] },
    "application/n-triples": { source: "iana", extensions: ["nt"] },
    "application/nasdata": { source: "iana" },
    "application/news-checkgroups": { source: "iana", charset: "US-ASCII" },
    "application/news-groupinfo": { source: "iana", charset: "US-ASCII" },
    "application/news-transmission": { source: "iana" },
    "application/nlsml+xml": { source: "iana", compressible: !0 },
    "application/node": { source: "iana", extensions: ["cjs"] },
    "application/nss": { source: "iana" },
    "application/oauth-authz-req+jwt": { source: "iana" },
    "application/oblivious-dns-message": { source: "iana" },
    "application/ocsp-request": { source: "iana" },
    "application/ocsp-response": { source: "iana" },
    "application/octet-stream": {
      source: "iana",
      compressible: !1,
      extensions: [
        "bin",
        "dms",
        "lrf",
        "mar",
        "so",
        "dist",
        "distz",
        "pkg",
        "bpk",
        "dump",
        "elc",
        "deploy",
        "exe",
        "dll",
        "deb",
        "dmg",
        "iso",
        "img",
        "msi",
        "msp",
        "msm",
        "buffer",
      ],
    },
    "application/oda": { source: "iana", extensions: ["oda"] },
    "application/odm+xml": { source: "iana", compressible: !0 },
    "application/odx": { source: "iana" },
    "application/oebps-package+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["opf"],
    },
    "application/ogg": {
      source: "iana",
      compressible: !1,
      extensions: ["ogx"],
    },
    "application/omdoc+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["omdoc"],
    },
    "application/onenote": {
      source: "apache",
      extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"],
    },
    "application/opc-nodeset+xml": { source: "iana", compressible: !0 },
    "application/oscore": { source: "iana" },
    "application/oxps": { source: "iana", extensions: ["oxps"] },
    "application/p21": { source: "iana" },
    "application/p21+zip": { source: "iana", compressible: !1 },
    "application/p2p-overlay+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["relo"],
    },
    "application/parityfec": { source: "iana" },
    "application/passport": { source: "iana" },
    "application/patch-ops-error+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xer"],
    },
    "application/pdf": {
      source: "iana",
      compressible: !1,
      extensions: ["pdf"],
    },
    "application/pdx": { source: "iana" },
    "application/pem-certificate-chain": { source: "iana" },
    "application/pgp-encrypted": {
      source: "iana",
      compressible: !1,
      extensions: ["pgp"],
    },
    "application/pgp-keys": { source: "iana", extensions: ["asc"] },
    "application/pgp-signature": { source: "iana", extensions: ["asc", "sig"] },
    "application/pics-rules": { source: "apache", extensions: ["prf"] },
    "application/pidf+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/pidf-diff+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/pkcs10": { source: "iana", extensions: ["p10"] },
    "application/pkcs12": { source: "iana" },
    "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] },
    "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] },
    "application/pkcs8": { source: "iana", extensions: ["p8"] },
    "application/pkcs8-encrypted": { source: "iana" },
    "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] },
    "application/pkix-cert": { source: "iana", extensions: ["cer"] },
    "application/pkix-crl": { source: "iana", extensions: ["crl"] },
    "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] },
    "application/pkixcmp": { source: "iana", extensions: ["pki"] },
    "application/pls+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["pls"],
    },
    "application/poc-settings+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/postscript": {
      source: "iana",
      compressible: !0,
      extensions: ["ai", "eps", "ps"],
    },
    "application/ppsp-tracker+json": { source: "iana", compressible: !0 },
    "application/problem+json": { source: "iana", compressible: !0 },
    "application/problem+xml": { source: "iana", compressible: !0 },
    "application/provenance+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["provx"],
    },
    "application/prs.alvestrand.titrax-sheet": { source: "iana" },
    "application/prs.cww": { source: "iana", extensions: ["cww"] },
    "application/prs.cyn": { source: "iana", charset: "7-BIT" },
    "application/prs.hpub+zip": { source: "iana", compressible: !1 },
    "application/prs.nprend": { source: "iana" },
    "application/prs.plucker": { source: "iana" },
    "application/prs.rdf-xml-crypt": { source: "iana" },
    "application/prs.xsf+xml": { source: "iana", compressible: !0 },
    "application/pskc+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["pskcxml"],
    },
    "application/pvd+json": { source: "iana", compressible: !0 },
    "application/qsig": { source: "iana" },
    "application/raml+yaml": { compressible: !0, extensions: ["raml"] },
    "application/raptorfec": { source: "iana" },
    "application/rdap+json": { source: "iana", compressible: !0 },
    "application/rdf+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rdf", "owl"],
    },
    "application/reginfo+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rif"],
    },
    "application/relax-ng-compact-syntax": {
      source: "iana",
      extensions: ["rnc"],
    },
    "application/remote-printing": { source: "iana" },
    "application/reputon+json": { source: "iana", compressible: !0 },
    "application/resource-lists+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rl"],
    },
    "application/resource-lists-diff+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rld"],
    },
    "application/rfc+xml": { source: "iana", compressible: !0 },
    "application/riscos": { source: "iana" },
    "application/rlmi+xml": { source: "iana", compressible: !0 },
    "application/rls-services+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rs"],
    },
    "application/route-apd+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rapd"],
    },
    "application/route-s-tsid+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["sls"],
    },
    "application/route-usd+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rusd"],
    },
    "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] },
    "application/rpki-manifest": { source: "iana", extensions: ["mft"] },
    "application/rpki-publication": { source: "iana" },
    "application/rpki-roa": { source: "iana", extensions: ["roa"] },
    "application/rpki-updown": { source: "iana" },
    "application/rsd+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["rsd"],
    },
    "application/rss+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["rss"],
    },
    "application/rtf": {
      source: "iana",
      compressible: !0,
      extensions: ["rtf"],
    },
    "application/rtploopback": { source: "iana" },
    "application/rtx": { source: "iana" },
    "application/samlassertion+xml": { source: "iana", compressible: !0 },
    "application/samlmetadata+xml": { source: "iana", compressible: !0 },
    "application/sarif+json": { source: "iana", compressible: !0 },
    "application/sarif-external-properties+json": {
      source: "iana",
      compressible: !0,
    },
    "application/sbe": { source: "iana" },
    "application/sbml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["sbml"],
    },
    "application/scaip+xml": { source: "iana", compressible: !0 },
    "application/scim+json": { source: "iana", compressible: !0 },
    "application/scvp-cv-request": { source: "iana", extensions: ["scq"] },
    "application/scvp-cv-response": { source: "iana", extensions: ["scs"] },
    "application/scvp-vp-request": { source: "iana", extensions: ["spq"] },
    "application/scvp-vp-response": { source: "iana", extensions: ["spp"] },
    "application/sdp": { source: "iana", extensions: ["sdp"] },
    "application/secevent+jwt": { source: "iana" },
    "application/senml+cbor": { source: "iana" },
    "application/senml+json": { source: "iana", compressible: !0 },
    "application/senml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["senmlx"],
    },
    "application/senml-etch+cbor": { source: "iana" },
    "application/senml-etch+json": { source: "iana", compressible: !0 },
    "application/senml-exi": { source: "iana" },
    "application/sensml+cbor": { source: "iana" },
    "application/sensml+json": { source: "iana", compressible: !0 },
    "application/sensml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["sensmlx"],
    },
    "application/sensml-exi": { source: "iana" },
    "application/sep+xml": { source: "iana", compressible: !0 },
    "application/sep-exi": { source: "iana" },
    "application/session-info": { source: "iana" },
    "application/set-payment": { source: "iana" },
    "application/set-payment-initiation": {
      source: "iana",
      extensions: ["setpay"],
    },
    "application/set-registration": { source: "iana" },
    "application/set-registration-initiation": {
      source: "iana",
      extensions: ["setreg"],
    },
    "application/sgml": { source: "iana" },
    "application/sgml-open-catalog": { source: "iana" },
    "application/shf+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["shf"],
    },
    "application/sieve": { source: "iana", extensions: ["siv", "sieve"] },
    "application/simple-filter+xml": { source: "iana", compressible: !0 },
    "application/simple-message-summary": { source: "iana" },
    "application/simplesymbolcontainer": { source: "iana" },
    "application/sipc": { source: "iana" },
    "application/slate": { source: "iana" },
    "application/smil": { source: "iana" },
    "application/smil+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["smi", "smil"],
    },
    "application/smpte336m": { source: "iana" },
    "application/soap+fastinfoset": { source: "iana" },
    "application/soap+xml": { source: "iana", compressible: !0 },
    "application/sparql-query": { source: "iana", extensions: ["rq"] },
    "application/sparql-results+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["srx"],
    },
    "application/spdx+json": { source: "iana", compressible: !0 },
    "application/spirits-event+xml": { source: "iana", compressible: !0 },
    "application/sql": { source: "iana" },
    "application/srgs": { source: "iana", extensions: ["gram"] },
    "application/srgs+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["grxml"],
    },
    "application/sru+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["sru"],
    },
    "application/ssdl+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["ssdl"],
    },
    "application/ssml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["ssml"],
    },
    "application/stix+json": { source: "iana", compressible: !0 },
    "application/swid+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["swidtag"],
    },
    "application/tamp-apex-update": { source: "iana" },
    "application/tamp-apex-update-confirm": { source: "iana" },
    "application/tamp-community-update": { source: "iana" },
    "application/tamp-community-update-confirm": { source: "iana" },
    "application/tamp-error": { source: "iana" },
    "application/tamp-sequence-adjust": { source: "iana" },
    "application/tamp-sequence-adjust-confirm": { source: "iana" },
    "application/tamp-status-query": { source: "iana" },
    "application/tamp-status-response": { source: "iana" },
    "application/tamp-update": { source: "iana" },
    "application/tamp-update-confirm": { source: "iana" },
    "application/tar": { compressible: !0 },
    "application/taxii+json": { source: "iana", compressible: !0 },
    "application/td+json": { source: "iana", compressible: !0 },
    "application/tei+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["tei", "teicorpus"],
    },
    "application/tetra_isi": { source: "iana" },
    "application/thraud+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["tfi"],
    },
    "application/timestamp-query": { source: "iana" },
    "application/timestamp-reply": { source: "iana" },
    "application/timestamped-data": { source: "iana", extensions: ["tsd"] },
    "application/tlsrpt+gzip": { source: "iana" },
    "application/tlsrpt+json": { source: "iana", compressible: !0 },
    "application/tnauthlist": { source: "iana" },
    "application/token-introspection+jwt": { source: "iana" },
    "application/toml": { compressible: !0, extensions: ["toml"] },
    "application/trickle-ice-sdpfrag": { source: "iana" },
    "application/trig": { source: "iana", extensions: ["trig"] },
    "application/ttml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["ttml"],
    },
    "application/tve-trigger": { source: "iana" },
    "application/tzif": { source: "iana" },
    "application/tzif-leap": { source: "iana" },
    "application/ubjson": { compressible: !1, extensions: ["ubj"] },
    "application/ulpfec": { source: "iana" },
    "application/urc-grpsheet+xml": { source: "iana", compressible: !0 },
    "application/urc-ressheet+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["rsheet"],
    },
    "application/urc-targetdesc+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["td"],
    },
    "application/urc-uisocketdesc+xml": { source: "iana", compressible: !0 },
    "application/vcard+json": { source: "iana", compressible: !0 },
    "application/vcard+xml": { source: "iana", compressible: !0 },
    "application/vemmi": { source: "iana" },
    "application/vividence.scriptfile": { source: "apache" },
    "application/vnd.1000minds.decision-model+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["1km"],
    },
    "application/vnd.3gpp-prose+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp-prose-pc3ch+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp-v2x-local-service-information": { source: "iana" },
    "application/vnd.3gpp.5gnas": { source: "iana" },
    "application/vnd.3gpp.access-transfer-events+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.bsf+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.gmop+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.gtpc": { source: "iana" },
    "application/vnd.3gpp.interworking-data": { source: "iana" },
    "application/vnd.3gpp.lpp": { source: "iana" },
    "application/vnd.3gpp.mc-signalling-ear": { source: "iana" },
    "application/vnd.3gpp.mcdata-affiliation-command+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcdata-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcdata-payload": { source: "iana" },
    "application/vnd.3gpp.mcdata-service-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcdata-signalling": { source: "iana" },
    "application/vnd.3gpp.mcdata-ue-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcdata-user-profile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-affiliation-command+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-floor-request+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.mcptt-location-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-service-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-signed+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-ue-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-ue-init-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcptt-user-profile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-location-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-service-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-transmission-request+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-ue-config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mcvideo-user-profile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.mid-call+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.ngap": { source: "iana" },
    "application/vnd.3gpp.pfcp": { source: "iana" },
    "application/vnd.3gpp.pic-bw-large": {
      source: "iana",
      extensions: ["plb"],
    },
    "application/vnd.3gpp.pic-bw-small": {
      source: "iana",
      extensions: ["psb"],
    },
    "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] },
    "application/vnd.3gpp.s1ap": { source: "iana" },
    "application/vnd.3gpp.sms": { source: "iana" },
    "application/vnd.3gpp.sms+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.srvcc-ext+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.srvcc-info+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp.state-and-event-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.3gpp.ussd+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana", compressible: !0 },
    "application/vnd.3gpp2.sms": { source: "iana" },
    "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] },
    "application/vnd.3lightssoftware.imagescal": { source: "iana" },
    "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] },
    "application/vnd.accpac.simply.aso": {
      source: "iana",
      extensions: ["aso"],
    },
    "application/vnd.accpac.simply.imp": {
      source: "iana",
      extensions: ["imp"],
    },
    "application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
    "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] },
    "application/vnd.adobe.air-application-installer-package+zip": {
      source: "apache",
      compressible: !1,
      extensions: ["air"],
    },
    "application/vnd.adobe.flash.movie": { source: "iana" },
    "application/vnd.adobe.formscentral.fcdt": {
      source: "iana",
      extensions: ["fcdt"],
    },
    "application/vnd.adobe.fxp": {
      source: "iana",
      extensions: ["fxp", "fxpl"],
    },
    "application/vnd.adobe.partial-upload": { source: "iana" },
    "application/vnd.adobe.xdp+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xdp"],
    },
    "application/vnd.adobe.xfdf": { source: "iana", extensions: ["xfdf"] },
    "application/vnd.aether.imp": { source: "iana" },
    "application/vnd.afpc.afplinedata": { source: "iana" },
    "application/vnd.afpc.afplinedata-pagedef": { source: "iana" },
    "application/vnd.afpc.cmoca-cmresource": { source: "iana" },
    "application/vnd.afpc.foca-charset": { source: "iana" },
    "application/vnd.afpc.foca-codedfont": { source: "iana" },
    "application/vnd.afpc.foca-codepage": { source: "iana" },
    "application/vnd.afpc.modca": { source: "iana" },
    "application/vnd.afpc.modca-cmtable": { source: "iana" },
    "application/vnd.afpc.modca-formdef": { source: "iana" },
    "application/vnd.afpc.modca-mediummap": { source: "iana" },
    "application/vnd.afpc.modca-objectcontainer": { source: "iana" },
    "application/vnd.afpc.modca-overlay": { source: "iana" },
    "application/vnd.afpc.modca-pagesegment": { source: "iana" },
    "application/vnd.age": { source: "iana", extensions: ["age"] },
    "application/vnd.ah-barcode": { source: "iana" },
    "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] },
    "application/vnd.airzip.filesecure.azf": {
      source: "iana",
      extensions: ["azf"],
    },
    "application/vnd.airzip.filesecure.azs": {
      source: "iana",
      extensions: ["azs"],
    },
    "application/vnd.amadeus+json": { source: "iana", compressible: !0 },
    "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] },
    "application/vnd.amazon.mobi8-ebook": { source: "iana" },
    "application/vnd.americandynamics.acc": {
      source: "iana",
      extensions: ["acc"],
    },
    "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] },
    "application/vnd.amundsen.maze+xml": { source: "iana", compressible: !0 },
    "application/vnd.android.ota": { source: "iana" },
    "application/vnd.android.package-archive": {
      source: "apache",
      compressible: !1,
      extensions: ["apk"],
    },
    "application/vnd.anki": { source: "iana" },
    "application/vnd.anser-web-certificate-issue-initiation": {
      source: "iana",
      extensions: ["cii"],
    },
    "application/vnd.anser-web-funds-transfer-initiation": {
      source: "apache",
      extensions: ["fti"],
    },
    "application/vnd.antix.game-component": {
      source: "iana",
      extensions: ["atx"],
    },
    "application/vnd.apache.arrow.file": { source: "iana" },
    "application/vnd.apache.arrow.stream": { source: "iana" },
    "application/vnd.apache.thrift.binary": { source: "iana" },
    "application/vnd.apache.thrift.compact": { source: "iana" },
    "application/vnd.apache.thrift.json": { source: "iana" },
    "application/vnd.api+json": { source: "iana", compressible: !0 },
    "application/vnd.aplextor.warrp+json": { source: "iana", compressible: !0 },
    "application/vnd.apothekende.reservation+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.apple.installer+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mpkg"],
    },
    "application/vnd.apple.keynote": { source: "iana", extensions: ["key"] },
    "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] },
    "application/vnd.apple.numbers": {
      source: "iana",
      extensions: ["numbers"],
    },
    "application/vnd.apple.pages": { source: "iana", extensions: ["pages"] },
    "application/vnd.apple.pkpass": {
      compressible: !1,
      extensions: ["pkpass"],
    },
    "application/vnd.arastra.swi": { source: "iana" },
    "application/vnd.aristanetworks.swi": {
      source: "iana",
      extensions: ["swi"],
    },
    "application/vnd.artisan+json": { source: "iana", compressible: !0 },
    "application/vnd.artsquare": { source: "iana" },
    "application/vnd.astraea-software.iota": {
      source: "iana",
      extensions: ["iota"],
    },
    "application/vnd.audiograph": { source: "iana", extensions: ["aep"] },
    "application/vnd.autopackage": { source: "iana" },
    "application/vnd.avalon+json": { source: "iana", compressible: !0 },
    "application/vnd.avistar+xml": { source: "iana", compressible: !0 },
    "application/vnd.balsamiq.bmml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["bmml"],
    },
    "application/vnd.balsamiq.bmpr": { source: "iana" },
    "application/vnd.banana-accounting": { source: "iana" },
    "application/vnd.bbf.usp.error": { source: "iana" },
    "application/vnd.bbf.usp.msg": { source: "iana" },
    "application/vnd.bbf.usp.msg+json": { source: "iana", compressible: !0 },
    "application/vnd.bekitzur-stech+json": { source: "iana", compressible: !0 },
    "application/vnd.bint.med-content": { source: "iana" },
    "application/vnd.biopax.rdf+xml": { source: "iana", compressible: !0 },
    "application/vnd.blink-idb-value-wrapper": { source: "iana" },
    "application/vnd.blueice.multipass": {
      source: "iana",
      extensions: ["mpm"],
    },
    "application/vnd.bluetooth.ep.oob": { source: "iana" },
    "application/vnd.bluetooth.le.oob": { source: "iana" },
    "application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
    "application/vnd.bpf": { source: "iana" },
    "application/vnd.bpf3": { source: "iana" },
    "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] },
    "application/vnd.byu.uapi+json": { source: "iana", compressible: !0 },
    "application/vnd.cab-jscript": { source: "iana" },
    "application/vnd.canon-cpdl": { source: "iana" },
    "application/vnd.canon-lips": { source: "iana" },
    "application/vnd.capasystems-pg+json": { source: "iana", compressible: !0 },
    "application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
    "application/vnd.century-systems.tcp_stream": { source: "iana" },
    "application/vnd.chemdraw+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["cdxml"],
    },
    "application/vnd.chess-pgn": { source: "iana" },
    "application/vnd.chipnuts.karaoke-mmd": {
      source: "iana",
      extensions: ["mmd"],
    },
    "application/vnd.ciedi": { source: "iana" },
    "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] },
    "application/vnd.cirpack.isdn-ext": { source: "iana" },
    "application/vnd.citationstyles.style+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["csl"],
    },
    "application/vnd.claymore": { source: "iana", extensions: ["cla"] },
    "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] },
    "application/vnd.clonk.c4group": {
      source: "iana",
      extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"],
    },
    "application/vnd.cluetrust.cartomobile-config": {
      source: "iana",
      extensions: ["c11amc"],
    },
    "application/vnd.cluetrust.cartomobile-config-pkg": {
      source: "iana",
      extensions: ["c11amz"],
    },
    "application/vnd.coffeescript": { source: "iana" },
    "application/vnd.collabio.xodocuments.document": { source: "iana" },
    "application/vnd.collabio.xodocuments.document-template": {
      source: "iana",
    },
    "application/vnd.collabio.xodocuments.presentation": { source: "iana" },
    "application/vnd.collabio.xodocuments.presentation-template": {
      source: "iana",
    },
    "application/vnd.collabio.xodocuments.spreadsheet": { source: "iana" },
    "application/vnd.collabio.xodocuments.spreadsheet-template": {
      source: "iana",
    },
    "application/vnd.collection+json": { source: "iana", compressible: !0 },
    "application/vnd.collection.doc+json": { source: "iana", compressible: !0 },
    "application/vnd.collection.next+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.comicbook+zip": { source: "iana", compressible: !1 },
    "application/vnd.comicbook-rar": { source: "iana" },
    "application/vnd.commerce-battelle": { source: "iana" },
    "application/vnd.commonspace": { source: "iana", extensions: ["csp"] },
    "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] },
    "application/vnd.coreos.ignition+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] },
    "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] },
    "application/vnd.crick.clicker.keyboard": {
      source: "iana",
      extensions: ["clkk"],
    },
    "application/vnd.crick.clicker.palette": {
      source: "iana",
      extensions: ["clkp"],
    },
    "application/vnd.crick.clicker.template": {
      source: "iana",
      extensions: ["clkt"],
    },
    "application/vnd.crick.clicker.wordbank": {
      source: "iana",
      extensions: ["clkw"],
    },
    "application/vnd.criticaltools.wbs+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["wbs"],
    },
    "application/vnd.cryptii.pipe+json": { source: "iana", compressible: !0 },
    "application/vnd.crypto-shade-file": { source: "iana" },
    "application/vnd.cryptomator.encrypted": { source: "iana" },
    "application/vnd.cryptomator.vault": { source: "iana" },
    "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] },
    "application/vnd.ctct.ws+xml": { source: "iana", compressible: !0 },
    "application/vnd.cups-pdf": { source: "iana" },
    "application/vnd.cups-postscript": { source: "iana" },
    "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
    "application/vnd.cups-raster": { source: "iana" },
    "application/vnd.cups-raw": { source: "iana" },
    "application/vnd.curl": { source: "iana" },
    "application/vnd.curl.car": { source: "apache", extensions: ["car"] },
    "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] },
    "application/vnd.cyan.dean.root+xml": { source: "iana", compressible: !0 },
    "application/vnd.cybank": { source: "iana" },
    "application/vnd.cyclonedx+json": { source: "iana", compressible: !0 },
    "application/vnd.cyclonedx+xml": { source: "iana", compressible: !0 },
    "application/vnd.d2l.coursepackage1p0+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.d3m-dataset": { source: "iana" },
    "application/vnd.d3m-problem": { source: "iana" },
    "application/vnd.dart": {
      source: "iana",
      compressible: !0,
      extensions: ["dart"],
    },
    "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] },
    "application/vnd.datapackage+json": { source: "iana", compressible: !0 },
    "application/vnd.dataresource+json": { source: "iana", compressible: !0 },
    "application/vnd.dbf": { source: "iana", extensions: ["dbf"] },
    "application/vnd.debian.binary-package": { source: "iana" },
    "application/vnd.dece.data": {
      source: "iana",
      extensions: ["uvf", "uvvf", "uvd", "uvvd"],
    },
    "application/vnd.dece.ttml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["uvt", "uvvt"],
    },
    "application/vnd.dece.unspecified": {
      source: "iana",
      extensions: ["uvx", "uvvx"],
    },
    "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] },
    "application/vnd.denovo.fcselayout-link": {
      source: "iana",
      extensions: ["fe_launch"],
    },
    "application/vnd.desmume.movie": { source: "iana" },
    "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
    "application/vnd.dm.delegation+xml": { source: "iana", compressible: !0 },
    "application/vnd.dna": { source: "iana", extensions: ["dna"] },
    "application/vnd.document+json": { source: "iana", compressible: !0 },
    "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] },
    "application/vnd.dolby.mobile.1": { source: "iana" },
    "application/vnd.dolby.mobile.2": { source: "iana" },
    "application/vnd.doremir.scorecloud-binary-document": { source: "iana" },
    "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
    "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] },
    "application/vnd.drive+json": { source: "iana", compressible: !0 },
    "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] },
    "application/vnd.dtg.local": { source: "iana" },
    "application/vnd.dtg.local.flash": { source: "iana" },
    "application/vnd.dtg.local.html": { source: "iana" },
    "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
    "application/vnd.dvb.dvbisl+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.dvbj": { source: "iana" },
    "application/vnd.dvb.esgcontainer": { source: "iana" },
    "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
    "application/vnd.dvb.ipdcesgaccess": { source: "iana" },
    "application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
    "application/vnd.dvb.ipdcesgpdd": { source: "iana" },
    "application/vnd.dvb.ipdcroaming": { source: "iana" },
    "application/vnd.dvb.iptv.alfec-base": { source: "iana" },
    "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
    "application/vnd.dvb.notif-aggregate-root+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-container+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-generic+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-ia-msglist+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-ia-registration-request+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-ia-registration-response+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.dvb.notif-init+xml": { source: "iana", compressible: !0 },
    "application/vnd.dvb.pfr": { source: "iana" },
    "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] },
    "application/vnd.dxr": { source: "iana" },
    "application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
    "application/vnd.dzr": { source: "iana" },
    "application/vnd.easykaraoke.cdgdownload": { source: "iana" },
    "application/vnd.ecdis-update": { source: "iana" },
    "application/vnd.ecip.rlp": { source: "iana" },
    "application/vnd.eclipse.ditto+json": { source: "iana", compressible: !0 },
    "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] },
    "application/vnd.ecowin.filerequest": { source: "iana" },
    "application/vnd.ecowin.fileupdate": { source: "iana" },
    "application/vnd.ecowin.series": { source: "iana" },
    "application/vnd.ecowin.seriesrequest": { source: "iana" },
    "application/vnd.ecowin.seriesupdate": { source: "iana" },
    "application/vnd.efi.img": { source: "iana" },
    "application/vnd.efi.iso": { source: "iana" },
    "application/vnd.emclient.accessrequest+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.enliven": { source: "iana", extensions: ["nml"] },
    "application/vnd.enphase.envoy": { source: "iana" },
    "application/vnd.eprints.data+xml": { source: "iana", compressible: !0 },
    "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] },
    "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] },
    "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] },
    "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] },
    "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] },
    "application/vnd.ericsson.quickcall": { source: "iana" },
    "application/vnd.espass-espass+zip": { source: "iana", compressible: !1 },
    "application/vnd.eszigno3+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["es3", "et3"],
    },
    "application/vnd.etsi.aoc+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.asic-e+zip": { source: "iana", compressible: !1 },
    "application/vnd.etsi.asic-s+zip": { source: "iana", compressible: !1 },
    "application/vnd.etsi.cug+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvcommand+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvdiscovery+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvprofile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvsad-bc+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvsad-cod+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvsad-npvr+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvservice+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.iptvsync+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.iptvueprofile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.mcid+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.mheg5": { source: "iana" },
    "application/vnd.etsi.overload-control-policy-dataset+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.etsi.pstn+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.sci+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.simservs+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.timestamp-token": { source: "iana" },
    "application/vnd.etsi.tsl+xml": { source: "iana", compressible: !0 },
    "application/vnd.etsi.tsl.der": { source: "iana" },
    "application/vnd.eu.kasparian.car+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.eudora.data": { source: "iana" },
    "application/vnd.evolv.ecig.profile": { source: "iana" },
    "application/vnd.evolv.ecig.settings": { source: "iana" },
    "application/vnd.evolv.ecig.theme": { source: "iana" },
    "application/vnd.exstream-empower+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.exstream-package": { source: "iana" },
    "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] },
    "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] },
    "application/vnd.f-secure.mobile": { source: "iana" },
    "application/vnd.familysearch.gedcom+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.fastcopy-disk-image": { source: "iana" },
    "application/vnd.fdf": { source: "iana", extensions: ["fdf"] },
    "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] },
    "application/vnd.fdsn.seed": {
      source: "iana",
      extensions: ["seed", "dataless"],
    },
    "application/vnd.ffsns": { source: "iana" },
    "application/vnd.ficlab.flb+zip": { source: "iana", compressible: !1 },
    "application/vnd.filmit.zfc": { source: "iana" },
    "application/vnd.fints": { source: "iana" },
    "application/vnd.firemonkeys.cloudcell": { source: "iana" },
    "application/vnd.flographit": { source: "iana", extensions: ["gph"] },
    "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] },
    "application/vnd.font-fontforge-sfd": { source: "iana" },
    "application/vnd.framemaker": {
      source: "iana",
      extensions: ["fm", "frame", "maker", "book"],
    },
    "application/vnd.frogans.fnc": { source: "iana", extensions: ["fnc"] },
    "application/vnd.frogans.ltf": { source: "iana", extensions: ["ltf"] },
    "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] },
    "application/vnd.fujifilm.fb.docuworks": { source: "iana" },
    "application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" },
    "application/vnd.fujifilm.fb.docuworks.container": { source: "iana" },
    "application/vnd.fujifilm.fb.jfi+xml": { source: "iana", compressible: !0 },
    "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] },
    "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] },
    "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] },
    "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] },
    "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] },
    "application/vnd.fujixerox.art-ex": { source: "iana" },
    "application/vnd.fujixerox.art4": { source: "iana" },
    "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] },
    "application/vnd.fujixerox.docuworks": {
      source: "iana",
      extensions: ["xdw"],
    },
    "application/vnd.fujixerox.docuworks.binder": {
      source: "iana",
      extensions: ["xbd"],
    },
    "application/vnd.fujixerox.docuworks.container": { source: "iana" },
    "application/vnd.fujixerox.hbpl": { source: "iana" },
    "application/vnd.fut-misnet": { source: "iana" },
    "application/vnd.futoin+cbor": { source: "iana" },
    "application/vnd.futoin+json": { source: "iana", compressible: !0 },
    "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] },
    "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] },
    "application/vnd.gentics.grd+json": { source: "iana", compressible: !0 },
    "application/vnd.geo+json": { source: "iana", compressible: !0 },
    "application/vnd.geocube+xml": { source: "iana", compressible: !0 },
    "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] },
    "application/vnd.geogebra.slides": { source: "iana" },
    "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] },
    "application/vnd.geometry-explorer": {
      source: "iana",
      extensions: ["gex", "gre"],
    },
    "application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
    "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
    "application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
    "application/vnd.gerber": { source: "iana" },
    "application/vnd.globalplatform.card-content-mgt": { source: "iana" },
    "application/vnd.globalplatform.card-content-mgt-response": {
      source: "iana",
    },
    "application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
    "application/vnd.google-apps.document": {
      compressible: !1,
      extensions: ["gdoc"],
    },
    "application/vnd.google-apps.presentation": {
      compressible: !1,
      extensions: ["gslides"],
    },
    "application/vnd.google-apps.spreadsheet": {
      compressible: !1,
      extensions: ["gsheet"],
    },
    "application/vnd.google-earth.kml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["kml"],
    },
    "application/vnd.google-earth.kmz": {
      source: "iana",
      compressible: !1,
      extensions: ["kmz"],
    },
    "application/vnd.gov.sk.e-form+xml": { source: "iana", compressible: !0 },
    "application/vnd.gov.sk.e-form+zip": { source: "iana", compressible: !1 },
    "application/vnd.gov.sk.xmldatacontainer+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] },
    "application/vnd.gridmp": { source: "iana" },
    "application/vnd.groove-account": { source: "iana", extensions: ["gac"] },
    "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] },
    "application/vnd.groove-identity-message": {
      source: "iana",
      extensions: ["gim"],
    },
    "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] },
    "application/vnd.groove-tool-message": {
      source: "iana",
      extensions: ["gtm"],
    },
    "application/vnd.groove-tool-template": {
      source: "iana",
      extensions: ["tpl"],
    },
    "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] },
    "application/vnd.hal+json": { source: "iana", compressible: !0 },
    "application/vnd.hal+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["hal"],
    },
    "application/vnd.handheld-entertainment+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["zmm"],
    },
    "application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
    "application/vnd.hc+json": { source: "iana", compressible: !0 },
    "application/vnd.hcl-bireports": { source: "iana" },
    "application/vnd.hdt": { source: "iana" },
    "application/vnd.heroku+json": { source: "iana", compressible: !0 },
    "application/vnd.hhe.lesson-player": {
      source: "iana",
      extensions: ["les"],
    },
    "application/vnd.hl7cda+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.hl7v2+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
    "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
    "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
    "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
    "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
    "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] },
    "application/vnd.httphone": { source: "iana" },
    "application/vnd.hydrostatix.sof-data": {
      source: "iana",
      extensions: ["sfd-hdstx"],
    },
    "application/vnd.hyper+json": { source: "iana", compressible: !0 },
    "application/vnd.hyper-item+json": { source: "iana", compressible: !0 },
    "application/vnd.hyperdrive+json": { source: "iana", compressible: !0 },
    "application/vnd.hzn-3d-crossword": { source: "iana" },
    "application/vnd.ibm.afplinedata": { source: "iana" },
    "application/vnd.ibm.electronic-media": { source: "iana" },
    "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] },
    "application/vnd.ibm.modcap": {
      source: "iana",
      extensions: ["afp", "listafp", "list3820"],
    },
    "application/vnd.ibm.rights-management": {
      source: "iana",
      extensions: ["irm"],
    },
    "application/vnd.ibm.secure-container": {
      source: "iana",
      extensions: ["sc"],
    },
    "application/vnd.iccprofile": {
      source: "iana",
      extensions: ["icc", "icm"],
    },
    "application/vnd.ieee.1905": { source: "iana" },
    "application/vnd.igloader": { source: "iana", extensions: ["igl"] },
    "application/vnd.imagemeter.folder+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.imagemeter.image+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] },
    "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] },
    "application/vnd.ims.imsccv1p1": { source: "iana" },
    "application/vnd.ims.imsccv1p2": { source: "iana" },
    "application/vnd.ims.imsccv1p3": { source: "iana" },
    "application/vnd.ims.lis.v2.result+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ims.lti.v2.toolproxy+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ims.lti.v2.toolproxy.id+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ims.lti.v2.toolsettings+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ims.lti.v2.toolsettings.simple+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.informedcontrol.rms+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.informix-visionary": { source: "iana" },
    "application/vnd.infotech.project": { source: "iana" },
    "application/vnd.infotech.project+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.innopath.wamp.notification": { source: "iana" },
    "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] },
    "application/vnd.intercon.formnet": {
      source: "iana",
      extensions: ["xpw", "xpx"],
    },
    "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
    "application/vnd.intertrust.digibox": { source: "iana" },
    "application/vnd.intertrust.nncp": { source: "iana" },
    "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
    "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
    "application/vnd.iptc.g2.catalogitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.conceptitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.knowledgeitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.newsitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.newsmessage+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.packageitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.iptc.g2.planningitem+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ipunplugged.rcprofile": {
      source: "iana",
      extensions: ["rcprofile"],
    },
    "application/vnd.irepository.package+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["irp"],
    },
    "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
    "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
    "application/vnd.iso11783-10+zip": { source: "iana", compressible: !1 },
    "application/vnd.jam": { source: "iana", extensions: ["jam"] },
    "application/vnd.japannet-directory-service": { source: "iana" },
    "application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
    "application/vnd.japannet-payment-wakeup": { source: "iana" },
    "application/vnd.japannet-registration": { source: "iana" },
    "application/vnd.japannet-registration-wakeup": { source: "iana" },
    "application/vnd.japannet-setstore-wakeup": { source: "iana" },
    "application/vnd.japannet-verification": { source: "iana" },
    "application/vnd.japannet-verification-wakeup": { source: "iana" },
    "application/vnd.jcp.javame.midlet-rms": {
      source: "iana",
      extensions: ["rms"],
    },
    "application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
    "application/vnd.joost.joda-archive": {
      source: "iana",
      extensions: ["joda"],
    },
    "application/vnd.jsk.isdn-ngn": { source: "iana" },
    "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] },
    "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] },
    "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] },
    "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] },
    "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] },
    "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] },
    "application/vnd.kde.kpresenter": {
      source: "iana",
      extensions: ["kpr", "kpt"],
    },
    "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] },
    "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] },
    "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] },
    "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] },
    "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] },
    "application/vnd.koan": {
      source: "iana",
      extensions: ["skp", "skd", "skt", "skm"],
    },
    "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] },
    "application/vnd.las": { source: "iana" },
    "application/vnd.las.las+json": { source: "iana", compressible: !0 },
    "application/vnd.las.las+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["lasxml"],
    },
    "application/vnd.laszip": { source: "iana" },
    "application/vnd.leap+json": { source: "iana", compressible: !0 },
    "application/vnd.liberty-request+xml": { source: "iana", compressible: !0 },
    "application/vnd.llamagraphics.life-balance.desktop": {
      source: "iana",
      extensions: ["lbd"],
    },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["lbe"],
    },
    "application/vnd.logipipe.circuit+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.loom": { source: "iana" },
    "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] },
    "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] },
    "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] },
    "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] },
    "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] },
    "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] },
    "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] },
    "application/vnd.macports.portpkg": {
      source: "iana",
      extensions: ["portpkg"],
    },
    "application/vnd.mapbox-vector-tile": {
      source: "iana",
      extensions: ["mvt"],
    },
    "application/vnd.marlin.drm.actiontoken+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.marlin.drm.conftoken+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.marlin.drm.license+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.marlin.drm.mdcf": { source: "iana" },
    "application/vnd.mason+json": { source: "iana", compressible: !0 },
    "application/vnd.maxar.archive.3tz+zip": {
      source: "iana",
      compressible: !1,
    },
    "application/vnd.maxmind.maxmind-db": { source: "iana" },
    "application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
    "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] },
    "application/vnd.mediastation.cdkey": {
      source: "iana",
      extensions: ["cdkey"],
    },
    "application/vnd.meridian-slingshot": { source: "iana" },
    "application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
    "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
    "application/vnd.micro+json": { source: "iana", compressible: !0 },
    "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] },
    "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] },
    "application/vnd.microsoft.portable-executable": { source: "iana" },
    "application/vnd.microsoft.windows.thumbnail-cache": { source: "iana" },
    "application/vnd.miele+json": { source: "iana", compressible: !0 },
    "application/vnd.mif": { source: "iana", extensions: ["mif"] },
    "application/vnd.minisoft-hp3000-save": { source: "iana" },
    "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" },
    "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] },
    "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] },
    "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] },
    "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] },
    "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] },
    "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] },
    "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] },
    "application/vnd.mophun.application": {
      source: "iana",
      extensions: ["mpn"],
    },
    "application/vnd.mophun.certificate": {
      source: "iana",
      extensions: ["mpc"],
    },
    "application/vnd.motorola.flexsuite": { source: "iana" },
    "application/vnd.motorola.flexsuite.adsi": { source: "iana" },
    "application/vnd.motorola.flexsuite.fis": { source: "iana" },
    "application/vnd.motorola.flexsuite.gotap": { source: "iana" },
    "application/vnd.motorola.flexsuite.kmr": { source: "iana" },
    "application/vnd.motorola.flexsuite.ttc": { source: "iana" },
    "application/vnd.motorola.flexsuite.wem": { source: "iana" },
    "application/vnd.motorola.iprm": { source: "iana" },
    "application/vnd.mozilla.xul+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xul"],
    },
    "application/vnd.ms-3mfdocument": { source: "iana" },
    "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] },
    "application/vnd.ms-asf": { source: "iana" },
    "application/vnd.ms-cab-compressed": {
      source: "iana",
      extensions: ["cab"],
    },
    "application/vnd.ms-color.iccprofile": { source: "apache" },
    "application/vnd.ms-excel": {
      source: "iana",
      compressible: !1,
      extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {
      source: "iana",
      extensions: ["xlam"],
    },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
      source: "iana",
      extensions: ["xlsb"],
    },
    "application/vnd.ms-excel.sheet.macroenabled.12": {
      source: "iana",
      extensions: ["xlsm"],
    },
    "application/vnd.ms-excel.template.macroenabled.12": {
      source: "iana",
      extensions: ["xltm"],
    },
    "application/vnd.ms-fontobject": {
      source: "iana",
      compressible: !0,
      extensions: ["eot"],
    },
    "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] },
    "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
    "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
    "application/vnd.ms-office.activex+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] },
    "application/vnd.ms-opentype": { source: "apache", compressible: !0 },
    "application/vnd.ms-outlook": { compressible: !1, extensions: ["msg"] },
    "application/vnd.ms-package.obfuscated-opentype": { source: "apache" },
    "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] },
    "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] },
    "application/vnd.ms-playready.initiator+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ms-powerpoint": {
      source: "iana",
      compressible: !1,
      extensions: ["ppt", "pps", "pot"],
    },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {
      source: "iana",
      extensions: ["ppam"],
    },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
      source: "iana",
      extensions: ["pptm"],
    },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {
      source: "iana",
      extensions: ["sldm"],
    },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
      source: "iana",
      extensions: ["ppsm"],
    },
    "application/vnd.ms-powerpoint.template.macroenabled.12": {
      source: "iana",
      extensions: ["potm"],
    },
    "application/vnd.ms-printdevicecapabilities+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ms-printing.printticket+xml": {
      source: "apache",
      compressible: !0,
    },
    "application/vnd.ms-printschematicket+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.ms-project": {
      source: "iana",
      extensions: ["mpp", "mpt"],
    },
    "application/vnd.ms-tnef": { source: "iana" },
    "application/vnd.ms-windows.devicepairing": { source: "iana" },
    "application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
    "application/vnd.ms-windows.printerpairing": { source: "iana" },
    "application/vnd.ms-windows.wsd.oob": { source: "iana" },
    "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
    "application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
    "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
    "application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
    "application/vnd.ms-word.document.macroenabled.12": {
      source: "iana",
      extensions: ["docm"],
    },
    "application/vnd.ms-word.template.macroenabled.12": {
      source: "iana",
      extensions: ["dotm"],
    },
    "application/vnd.ms-works": {
      source: "iana",
      extensions: ["wps", "wks", "wcm", "wdb"],
    },
    "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
    "application/vnd.ms-xpsdocument": {
      source: "iana",
      compressible: !1,
      extensions: ["xps"],
    },
    "application/vnd.msa-disk-image": { source: "iana" },
    "application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
    "application/vnd.msign": { source: "iana" },
    "application/vnd.multiad.creator": { source: "iana" },
    "application/vnd.multiad.creator.cif": { source: "iana" },
    "application/vnd.music-niff": { source: "iana" },
    "application/vnd.musician": { source: "iana", extensions: ["mus"] },
    "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] },
    "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
    "application/vnd.nacamar.ybrid+json": { source: "iana", compressible: !0 },
    "application/vnd.ncd.control": { source: "iana" },
    "application/vnd.ncd.reference": { source: "iana" },
    "application/vnd.nearst.inv+json": { source: "iana", compressible: !0 },
    "application/vnd.nebumind.line": { source: "iana" },
    "application/vnd.nervana": { source: "iana" },
    "application/vnd.netfpx": { source: "iana" },
    "application/vnd.neurolanguage.nlu": {
      source: "iana",
      extensions: ["nlu"],
    },
    "application/vnd.nimn": { source: "iana" },
    "application/vnd.nintendo.nitro.rom": { source: "iana" },
    "application/vnd.nintendo.snes.rom": { source: "iana" },
    "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] },
    "application/vnd.noblenet-directory": {
      source: "iana",
      extensions: ["nnd"],
    },
    "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] },
    "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] },
    "application/vnd.nokia.catalogs": { source: "iana" },
    "application/vnd.nokia.conml+wbxml": { source: "iana" },
    "application/vnd.nokia.conml+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.iptv.config+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.nokia.isds-radio-presets": { source: "iana" },
    "application/vnd.nokia.landmark+wbxml": { source: "iana" },
    "application/vnd.nokia.landmark+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.landmarkcollection+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.nokia.n-gage.ac+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["ac"],
    },
    "application/vnd.nokia.n-gage.data": {
      source: "iana",
      extensions: ["ngdat"],
    },
    "application/vnd.nokia.n-gage.symbian.install": {
      source: "iana",
      extensions: ["n-gage"],
    },
    "application/vnd.nokia.ncd": { source: "iana" },
    "application/vnd.nokia.pcd+wbxml": { source: "iana" },
    "application/vnd.nokia.pcd+xml": { source: "iana", compressible: !0 },
    "application/vnd.nokia.radio-preset": {
      source: "iana",
      extensions: ["rpst"],
    },
    "application/vnd.nokia.radio-presets": {
      source: "iana",
      extensions: ["rpss"],
    },
    "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] },
    "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] },
    "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] },
    "application/vnd.ntt-local.content-share": { source: "iana" },
    "application/vnd.ntt-local.file-transfer": { source: "iana" },
    "application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
    "application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
    "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
    "application/vnd.oasis.opendocument.chart": {
      source: "iana",
      extensions: ["odc"],
    },
    "application/vnd.oasis.opendocument.chart-template": {
      source: "iana",
      extensions: ["otc"],
    },
    "application/vnd.oasis.opendocument.database": {
      source: "iana",
      extensions: ["odb"],
    },
    "application/vnd.oasis.opendocument.formula": {
      source: "iana",
      extensions: ["odf"],
    },
    "application/vnd.oasis.opendocument.formula-template": {
      source: "iana",
      extensions: ["odft"],
    },
    "application/vnd.oasis.opendocument.graphics": {
      source: "iana",
      compressible: !1,
      extensions: ["odg"],
    },
    "application/vnd.oasis.opendocument.graphics-template": {
      source: "iana",
      extensions: ["otg"],
    },
    "application/vnd.oasis.opendocument.image": {
      source: "iana",
      extensions: ["odi"],
    },
    "application/vnd.oasis.opendocument.image-template": {
      source: "iana",
      extensions: ["oti"],
    },
    "application/vnd.oasis.opendocument.presentation": {
      source: "iana",
      compressible: !1,
      extensions: ["odp"],
    },
    "application/vnd.oasis.opendocument.presentation-template": {
      source: "iana",
      extensions: ["otp"],
    },
    "application/vnd.oasis.opendocument.spreadsheet": {
      source: "iana",
      compressible: !1,
      extensions: ["ods"],
    },
    "application/vnd.oasis.opendocument.spreadsheet-template": {
      source: "iana",
      extensions: ["ots"],
    },
    "application/vnd.oasis.opendocument.text": {
      source: "iana",
      compressible: !1,
      extensions: ["odt"],
    },
    "application/vnd.oasis.opendocument.text-master": {
      source: "iana",
      extensions: ["odm"],
    },
    "application/vnd.oasis.opendocument.text-template": {
      source: "iana",
      extensions: ["ott"],
    },
    "application/vnd.oasis.opendocument.text-web": {
      source: "iana",
      extensions: ["oth"],
    },
    "application/vnd.obn": { source: "iana" },
    "application/vnd.ocf+cbor": { source: "iana" },
    "application/vnd.oci.image.manifest.v1+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oftn.l10n+json": { source: "iana", compressible: !0 },
    "application/vnd.oipf.contentaccessdownload+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oipf.contentaccessstreaming+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oipf.cspg-hexbinary": { source: "iana" },
    "application/vnd.oipf.dae.svg+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.dae.xhtml+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.mippvcontrolmessage+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oipf.pae.gem": { source: "iana" },
    "application/vnd.oipf.spdiscovery+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oipf.spdlist+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.ueprofile+xml": { source: "iana", compressible: !0 },
    "application/vnd.oipf.userprofile+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] },
    "application/vnd.oma-scws-config": { source: "iana" },
    "application/vnd.oma-scws-http-request": { source: "iana" },
    "application/vnd.oma-scws-http-response": { source: "iana" },
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.bcast.drm-trigger+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.bcast.imd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.ltkm": { source: "iana" },
    "application/vnd.oma.bcast.notification+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
    "application/vnd.oma.bcast.sgboot": { source: "iana" },
    "application/vnd.oma.bcast.sgdd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.sgdu": { source: "iana" },
    "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" },
    "application/vnd.oma.bcast.smartcard-trigger+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.bcast.sprov+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.bcast.stkm": { source: "iana" },
    "application/vnd.oma.cab-address-book+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.cab-feature-handler+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.cab-pcc+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.cab-subs-invite+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.cab-user-prefs+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.dcd": { source: "iana" },
    "application/vnd.oma.dcdc": { source: "iana" },
    "application/vnd.oma.dd2+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["dd2"],
    },
    "application/vnd.oma.drm.risd+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.group-usage-list+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.lwm2m+cbor": { source: "iana" },
    "application/vnd.oma.lwm2m+json": { source: "iana", compressible: !0 },
    "application/vnd.oma.lwm2m+tlv": { source: "iana" },
    "application/vnd.oma.pal+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.detailed-progress-report+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.poc.final-report+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.poc.groups+xml": { source: "iana", compressible: !0 },
    "application/vnd.oma.poc.invocation-descriptor+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.poc.optimized-progress-report+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.push": { source: "iana" },
    "application/vnd.oma.scidm.messages+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oma.xcap-directory+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.omads-email+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.omads-file+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.omads-folder+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.omaloc-supl-init": { source: "iana" },
    "application/vnd.onepager": { source: "iana" },
    "application/vnd.onepagertamp": { source: "iana" },
    "application/vnd.onepagertamx": { source: "iana" },
    "application/vnd.onepagertat": { source: "iana" },
    "application/vnd.onepagertatp": { source: "iana" },
    "application/vnd.onepagertatx": { source: "iana" },
    "application/vnd.openblox.game+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["obgx"],
    },
    "application/vnd.openblox.game-binary": { source: "iana" },
    "application/vnd.openeye.oeb": { source: "iana" },
    "application/vnd.openofficeorg.extension": {
      source: "apache",
      extensions: ["oxt"],
    },
    "application/vnd.openstreetmap.data+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["osm"],
    },
    "application/vnd.opentimestamps.ots": { source: "iana" },
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.drawing+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      { source: "iana", compressible: !1, extensions: ["pptx"] },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {
      source: "iana",
      extensions: ["sldx"],
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
      source: "iana",
      extensions: ["ppsx"],
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template": {
      source: "iana",
      extensions: ["potx"],
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      source: "iana",
      compressible: !1,
      extensions: ["xlsx"],
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
      source: "iana",
      extensions: ["xltx"],
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.theme+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-officedocument.vmldrawing": {
      source: "iana",
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      source: "iana",
      compressible: !1,
      extensions: ["docx"],
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
      source: "iana",
      extensions: ["dotx"],
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-package.core-properties+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":
      { source: "iana", compressible: !0 },
    "application/vnd.openxmlformats-package.relationships+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.oracle.resource+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.orange.indata": { source: "iana" },
    "application/vnd.osa.netdeploy": { source: "iana" },
    "application/vnd.osgeo.mapguide.package": {
      source: "iana",
      extensions: ["mgp"],
    },
    "application/vnd.osgi.bundle": { source: "iana" },
    "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
    "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] },
    "application/vnd.otps.ct-kip+xml": { source: "iana", compressible: !0 },
    "application/vnd.oxli.countgraph": { source: "iana" },
    "application/vnd.pagerduty+json": { source: "iana", compressible: !0 },
    "application/vnd.palm": {
      source: "iana",
      extensions: ["pdb", "pqa", "oprc"],
    },
    "application/vnd.panoply": { source: "iana" },
    "application/vnd.paos.xml": { source: "iana" },
    "application/vnd.patentdive": { source: "iana" },
    "application/vnd.patientecommsdoc": { source: "iana" },
    "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] },
    "application/vnd.pcos": { source: "iana" },
    "application/vnd.pg.format": { source: "iana", extensions: ["str"] },
    "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] },
    "application/vnd.piaccess.application-licence": { source: "iana" },
    "application/vnd.picsel": { source: "iana", extensions: ["efif"] },
    "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] },
    "application/vnd.poc.group-advertisement+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] },
    "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] },
    "application/vnd.powerbuilder6-s": { source: "iana" },
    "application/vnd.powerbuilder7": { source: "iana" },
    "application/vnd.powerbuilder7-s": { source: "iana" },
    "application/vnd.powerbuilder75": { source: "iana" },
    "application/vnd.powerbuilder75-s": { source: "iana" },
    "application/vnd.preminet": { source: "iana" },
    "application/vnd.previewsystems.box": {
      source: "iana",
      extensions: ["box"],
    },
    "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] },
    "application/vnd.psfs": { source: "iana" },
    "application/vnd.publishare-delta-tree": {
      source: "iana",
      extensions: ["qps"],
    },
    "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] },
    "application/vnd.pwg-multiplexed": { source: "iana" },
    "application/vnd.pwg-xhtml-print+xml": { source: "iana", compressible: !0 },
    "application/vnd.qualcomm.brew-app-res": { source: "iana" },
    "application/vnd.quarantainenet": { source: "iana" },
    "application/vnd.quark.quarkxpress": {
      source: "iana",
      extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
    },
    "application/vnd.quobject-quoxdocument": { source: "iana" },
    "application/vnd.radisys.moml+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml+xml": { source: "iana", compressible: !0 },
    "application/vnd.radisys.msml-audit+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-audit-conf+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-audit-conn+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-audit-dialog+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-audit-stream+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-conf+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-base+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-fax-detect+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-group+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-speech+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.radisys.msml-dialog-transform+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.rainstor.data": { source: "iana" },
    "application/vnd.rapid": { source: "iana" },
    "application/vnd.rar": { source: "iana", extensions: ["rar"] },
    "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] },
    "application/vnd.recordare.musicxml": {
      source: "iana",
      extensions: ["mxl"],
    },
    "application/vnd.recordare.musicxml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["musicxml"],
    },
    "application/vnd.renlearn.rlprint": { source: "iana" },
    "application/vnd.resilient.logic": { source: "iana" },
    "application/vnd.restful+json": { source: "iana", compressible: !0 },
    "application/vnd.rig.cryptonote": {
      source: "iana",
      extensions: ["cryptonote"],
    },
    "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] },
    "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] },
    "application/vnd.rn-realmedia-vbr": {
      source: "apache",
      extensions: ["rmvb"],
    },
    "application/vnd.route66.link66+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["link66"],
    },
    "application/vnd.rs-274x": { source: "iana" },
    "application/vnd.ruckus.download": { source: "iana" },
    "application/vnd.s3sms": { source: "iana" },
    "application/vnd.sailingtracker.track": {
      source: "iana",
      extensions: ["st"],
    },
    "application/vnd.sar": { source: "iana" },
    "application/vnd.sbm.cid": { source: "iana" },
    "application/vnd.sbm.mid2": { source: "iana" },
    "application/vnd.scribus": { source: "iana" },
    "application/vnd.sealed.3df": { source: "iana" },
    "application/vnd.sealed.csf": { source: "iana" },
    "application/vnd.sealed.doc": { source: "iana" },
    "application/vnd.sealed.eml": { source: "iana" },
    "application/vnd.sealed.mht": { source: "iana" },
    "application/vnd.sealed.net": { source: "iana" },
    "application/vnd.sealed.ppt": { source: "iana" },
    "application/vnd.sealed.tiff": { source: "iana" },
    "application/vnd.sealed.xls": { source: "iana" },
    "application/vnd.sealedmedia.softseal.html": { source: "iana" },
    "application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
    "application/vnd.seemail": { source: "iana", extensions: ["see"] },
    "application/vnd.seis+json": { source: "iana", compressible: !0 },
    "application/vnd.sema": { source: "iana", extensions: ["sema"] },
    "application/vnd.semd": { source: "iana", extensions: ["semd"] },
    "application/vnd.semf": { source: "iana", extensions: ["semf"] },
    "application/vnd.shade-save-file": { source: "iana" },
    "application/vnd.shana.informed.formdata": {
      source: "iana",
      extensions: ["ifm"],
    },
    "application/vnd.shana.informed.formtemplate": {
      source: "iana",
      extensions: ["itp"],
    },
    "application/vnd.shana.informed.interchange": {
      source: "iana",
      extensions: ["iif"],
    },
    "application/vnd.shana.informed.package": {
      source: "iana",
      extensions: ["ipk"],
    },
    "application/vnd.shootproof+json": { source: "iana", compressible: !0 },
    "application/vnd.shopkick+json": { source: "iana", compressible: !0 },
    "application/vnd.shp": { source: "iana" },
    "application/vnd.shx": { source: "iana" },
    "application/vnd.sigrok.session": { source: "iana" },
    "application/vnd.simtech-mindmapper": {
      source: "iana",
      extensions: ["twd", "twds"],
    },
    "application/vnd.siren+json": { source: "iana", compressible: !0 },
    "application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
    "application/vnd.smart.notebook": { source: "iana" },
    "application/vnd.smart.teacher": {
      source: "iana",
      extensions: ["teacher"],
    },
    "application/vnd.snesdev-page-table": { source: "iana" },
    "application/vnd.software602.filler.form+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["fo"],
    },
    "application/vnd.software602.filler.form-xml-zip": { source: "iana" },
    "application/vnd.solent.sdkm+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["sdkm", "sdkd"],
    },
    "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] },
    "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] },
    "application/vnd.sqlite3": { source: "iana" },
    "application/vnd.sss-cod": { source: "iana" },
    "application/vnd.sss-dtf": { source: "iana" },
    "application/vnd.sss-ntf": { source: "iana" },
    "application/vnd.stardivision.calc": {
      source: "apache",
      extensions: ["sdc"],
    },
    "application/vnd.stardivision.draw": {
      source: "apache",
      extensions: ["sda"],
    },
    "application/vnd.stardivision.impress": {
      source: "apache",
      extensions: ["sdd"],
    },
    "application/vnd.stardivision.math": {
      source: "apache",
      extensions: ["smf"],
    },
    "application/vnd.stardivision.writer": {
      source: "apache",
      extensions: ["sdw", "vor"],
    },
    "application/vnd.stardivision.writer-global": {
      source: "apache",
      extensions: ["sgl"],
    },
    "application/vnd.stepmania.package": {
      source: "iana",
      extensions: ["smzip"],
    },
    "application/vnd.stepmania.stepchart": {
      source: "iana",
      extensions: ["sm"],
    },
    "application/vnd.street-stream": { source: "iana" },
    "application/vnd.sun.wadl+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["wadl"],
    },
    "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] },
    "application/vnd.sun.xml.calc.template": {
      source: "apache",
      extensions: ["stc"],
    },
    "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] },
    "application/vnd.sun.xml.draw.template": {
      source: "apache",
      extensions: ["std"],
    },
    "application/vnd.sun.xml.impress": {
      source: "apache",
      extensions: ["sxi"],
    },
    "application/vnd.sun.xml.impress.template": {
      source: "apache",
      extensions: ["sti"],
    },
    "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] },
    "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] },
    "application/vnd.sun.xml.writer.global": {
      source: "apache",
      extensions: ["sxg"],
    },
    "application/vnd.sun.xml.writer.template": {
      source: "apache",
      extensions: ["stw"],
    },
    "application/vnd.sus-calendar": {
      source: "iana",
      extensions: ["sus", "susp"],
    },
    "application/vnd.svd": { source: "iana", extensions: ["svd"] },
    "application/vnd.swiftview-ics": { source: "iana" },
    "application/vnd.sycle+xml": { source: "iana", compressible: !0 },
    "application/vnd.syft+json": { source: "iana", compressible: !0 },
    "application/vnd.symbian.install": {
      source: "apache",
      extensions: ["sis", "sisx"],
    },
    "application/vnd.syncml+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["xsm"],
    },
    "application/vnd.syncml.dm+wbxml": {
      source: "iana",
      charset: "UTF-8",
      extensions: ["bdm"],
    },
    "application/vnd.syncml.dm+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["xdm"],
    },
    "application/vnd.syncml.dm.notification": { source: "iana" },
    "application/vnd.syncml.dmddf+wbxml": { source: "iana" },
    "application/vnd.syncml.dmddf+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["ddf"],
    },
    "application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
    "application/vnd.syncml.dmtnds+xml": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
    },
    "application/vnd.syncml.ds.notification": { source: "iana" },
    "application/vnd.tableschema+json": { source: "iana", compressible: !0 },
    "application/vnd.tao.intent-module-archive": {
      source: "iana",
      extensions: ["tao"],
    },
    "application/vnd.tcpdump.pcap": {
      source: "iana",
      extensions: ["pcap", "cap", "dmp"],
    },
    "application/vnd.think-cell.ppttc+json": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.tmd.mediaflex.api+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/vnd.tml": { source: "iana" },
    "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] },
    "application/vnd.tri.onesource": { source: "iana" },
    "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
    "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] },
    "application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
    "application/vnd.truedoc": { source: "iana" },
    "application/vnd.ubisoft.webplayer": { source: "iana" },
    "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] },
    "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] },
    "application/vnd.umajin": { source: "iana", extensions: ["umj"] },
    "application/vnd.unity": { source: "iana", extensions: ["unityweb"] },
    "application/vnd.uoml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["uoml"],
    },
    "application/vnd.uplanet.alert": { source: "iana" },
    "application/vnd.uplanet.alert-wbxml": { source: "iana" },
    "application/vnd.uplanet.bearer-choice": { source: "iana" },
    "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
    "application/vnd.uplanet.cacheop": { source: "iana" },
    "application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
    "application/vnd.uplanet.channel": { source: "iana" },
    "application/vnd.uplanet.channel-wbxml": { source: "iana" },
    "application/vnd.uplanet.list": { source: "iana" },
    "application/vnd.uplanet.list-wbxml": { source: "iana" },
    "application/vnd.uplanet.listcmd": { source: "iana" },
    "application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
    "application/vnd.uplanet.signal": { source: "iana" },
    "application/vnd.uri-map": { source: "iana" },
    "application/vnd.valve.source.material": { source: "iana" },
    "application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
    "application/vnd.vd-study": { source: "iana" },
    "application/vnd.vectorworks": { source: "iana" },
    "application/vnd.vel+json": { source: "iana", compressible: !0 },
    "application/vnd.verimatrix.vcas": { source: "iana" },
    "application/vnd.veritone.aion+json": { source: "iana", compressible: !0 },
    "application/vnd.veryant.thin": { source: "iana" },
    "application/vnd.ves.encrypted": { source: "iana" },
    "application/vnd.vidsoft.vidconference": { source: "iana" },
    "application/vnd.visio": {
      source: "iana",
      extensions: ["vsd", "vst", "vss", "vsw"],
    },
    "application/vnd.visionary": { source: "iana", extensions: ["vis"] },
    "application/vnd.vividence.scriptfile": { source: "iana" },
    "application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
    "application/vnd.wap.sic": { source: "iana" },
    "application/vnd.wap.slc": { source: "iana" },
    "application/vnd.wap.wbxml": {
      source: "iana",
      charset: "UTF-8",
      extensions: ["wbxml"],
    },
    "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] },
    "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] },
    "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
    "application/vnd.wfa.dpp": { source: "iana" },
    "application/vnd.wfa.p2p": { source: "iana" },
    "application/vnd.wfa.wsc": { source: "iana" },
    "application/vnd.windows.devicepairing": { source: "iana" },
    "application/vnd.wmc": { source: "iana" },
    "application/vnd.wmf.bootstrap": { source: "iana" },
    "application/vnd.wolfram.mathematica": { source: "iana" },
    "application/vnd.wolfram.mathematica.package": { source: "iana" },
    "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] },
    "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] },
    "application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
    "application/vnd.wrq-hp3000-labelled": { source: "iana" },
    "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
    "application/vnd.wv.csp+wbxml": { source: "iana" },
    "application/vnd.wv.csp+xml": { source: "iana", compressible: !0 },
    "application/vnd.wv.ssp+xml": { source: "iana", compressible: !0 },
    "application/vnd.xacml+json": { source: "iana", compressible: !0 },
    "application/vnd.xara": { source: "iana", extensions: ["xar"] },
    "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
    "application/vnd.xfdl.webform": { source: "iana" },
    "application/vnd.xmi+xml": { source: "iana", compressible: !0 },
    "application/vnd.xmpie.cpkg": { source: "iana" },
    "application/vnd.xmpie.dpkg": { source: "iana" },
    "application/vnd.xmpie.plan": { source: "iana" },
    "application/vnd.xmpie.ppkg": { source: "iana" },
    "application/vnd.xmpie.xlim": { source: "iana" },
    "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] },
    "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] },
    "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] },
    "application/vnd.yamaha.openscoreformat": {
      source: "iana",
      extensions: ["osf"],
    },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["osfpvg"],
    },
    "application/vnd.yamaha.remote-setup": { source: "iana" },
    "application/vnd.yamaha.smaf-audio": {
      source: "iana",
      extensions: ["saf"],
    },
    "application/vnd.yamaha.smaf-phrase": {
      source: "iana",
      extensions: ["spf"],
    },
    "application/vnd.yamaha.through-ngn": { source: "iana" },
    "application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
    "application/vnd.yaoweme": { source: "iana" },
    "application/vnd.yellowriver-custom-menu": {
      source: "iana",
      extensions: ["cmp"],
    },
    "application/vnd.youtube.yt": { source: "iana" },
    "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] },
    "application/vnd.zzazz.deck+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["zaz"],
    },
    "application/voicexml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["vxml"],
    },
    "application/voucher-cms+json": { source: "iana", compressible: !0 },
    "application/vq-rtcpxr": { source: "iana" },
    "application/wasm": {
      source: "iana",
      compressible: !0,
      extensions: ["wasm"],
    },
    "application/watcherinfo+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["wif"],
    },
    "application/webpush-options+json": { source: "iana", compressible: !0 },
    "application/whoispp-query": { source: "iana" },
    "application/whoispp-response": { source: "iana" },
    "application/widget": { source: "iana", extensions: ["wgt"] },
    "application/winhlp": { source: "apache", extensions: ["hlp"] },
    "application/wita": { source: "iana" },
    "application/wordperfect5.1": { source: "iana" },
    "application/wsdl+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["wsdl"],
    },
    "application/wspolicy+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["wspolicy"],
    },
    "application/x-7z-compressed": {
      source: "apache",
      compressible: !1,
      extensions: ["7z"],
    },
    "application/x-abiword": { source: "apache", extensions: ["abw"] },
    "application/x-ace-compressed": { source: "apache", extensions: ["ace"] },
    "application/x-amf": { source: "apache" },
    "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] },
    "application/x-arj": { compressible: !1, extensions: ["arj"] },
    "application/x-authorware-bin": {
      source: "apache",
      extensions: ["aab", "x32", "u32", "vox"],
    },
    "application/x-authorware-map": { source: "apache", extensions: ["aam"] },
    "application/x-authorware-seg": { source: "apache", extensions: ["aas"] },
    "application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
    "application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
    "application/x-bittorrent": { source: "apache", extensions: ["torrent"] },
    "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] },
    "application/x-bzip": {
      source: "apache",
      compressible: !1,
      extensions: ["bz"],
    },
    "application/x-bzip2": {
      source: "apache",
      compressible: !1,
      extensions: ["bz2", "boz"],
    },
    "application/x-cbr": {
      source: "apache",
      extensions: ["cbr", "cba", "cbt", "cbz", "cb7"],
    },
    "application/x-cdlink": { source: "apache", extensions: ["vcd"] },
    "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] },
    "application/x-chat": { source: "apache", extensions: ["chat"] },
    "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] },
    "application/x-chrome-extension": { extensions: ["crx"] },
    "application/x-cocoa": { source: "nginx", extensions: ["cco"] },
    "application/x-compress": { source: "apache" },
    "application/x-conference": { source: "apache", extensions: ["nsc"] },
    "application/x-cpio": { source: "apache", extensions: ["cpio"] },
    "application/x-csh": { source: "apache", extensions: ["csh"] },
    "application/x-deb": { compressible: !1 },
    "application/x-debian-package": {
      source: "apache",
      extensions: ["deb", "udeb"],
    },
    "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] },
    "application/x-director": {
      source: "apache",
      extensions: [
        "dir",
        "dcr",
        "dxr",
        "cst",
        "cct",
        "cxt",
        "w3d",
        "fgd",
        "swa",
      ],
    },
    "application/x-doom": { source: "apache", extensions: ["wad"] },
    "application/x-dtbncx+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["ncx"],
    },
    "application/x-dtbook+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["dtb"],
    },
    "application/x-dtbresource+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["res"],
    },
    "application/x-dvi": {
      source: "apache",
      compressible: !1,
      extensions: ["dvi"],
    },
    "application/x-envoy": { source: "apache", extensions: ["evy"] },
    "application/x-eva": { source: "apache", extensions: ["eva"] },
    "application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
    "application/x-font-dos": { source: "apache" },
    "application/x-font-framemaker": { source: "apache" },
    "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] },
    "application/x-font-libgrx": { source: "apache" },
    "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] },
    "application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
    "application/x-font-snf": { source: "apache", extensions: ["snf"] },
    "application/x-font-speedo": { source: "apache" },
    "application/x-font-sunos-news": { source: "apache" },
    "application/x-font-type1": {
      source: "apache",
      extensions: ["pfa", "pfb", "pfm", "afm"],
    },
    "application/x-font-vfont": { source: "apache" },
    "application/x-freearc": { source: "apache", extensions: ["arc"] },
    "application/x-futuresplash": { source: "apache", extensions: ["spl"] },
    "application/x-gca-compressed": { source: "apache", extensions: ["gca"] },
    "application/x-glulx": { source: "apache", extensions: ["ulx"] },
    "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] },
    "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] },
    "application/x-gtar": { source: "apache", extensions: ["gtar"] },
    "application/x-gzip": { source: "apache" },
    "application/x-hdf": { source: "apache", extensions: ["hdf"] },
    "application/x-httpd-php": { compressible: !0, extensions: ["php"] },
    "application/x-install-instructions": {
      source: "apache",
      extensions: ["install"],
    },
    "application/x-iso9660-image": { source: "apache", extensions: ["iso"] },
    "application/x-iwork-keynote-sffkey": { extensions: ["key"] },
    "application/x-iwork-numbers-sffnumbers": { extensions: ["numbers"] },
    "application/x-iwork-pages-sffpages": { extensions: ["pages"] },
    "application/x-java-archive-diff": {
      source: "nginx",
      extensions: ["jardiff"],
    },
    "application/x-java-jnlp-file": {
      source: "apache",
      compressible: !1,
      extensions: ["jnlp"],
    },
    "application/x-javascript": { compressible: !0 },
    "application/x-keepass2": { extensions: ["kdbx"] },
    "application/x-latex": {
      source: "apache",
      compressible: !1,
      extensions: ["latex"],
    },
    "application/x-lua-bytecode": { extensions: ["luac"] },
    "application/x-lzh-compressed": {
      source: "apache",
      extensions: ["lzh", "lha"],
    },
    "application/x-makeself": { source: "nginx", extensions: ["run"] },
    "application/x-mie": { source: "apache", extensions: ["mie"] },
    "application/x-mobipocket-ebook": {
      source: "apache",
      extensions: ["prc", "mobi"],
    },
    "application/x-mpegurl": { compressible: !1 },
    "application/x-ms-application": {
      source: "apache",
      extensions: ["application"],
    },
    "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] },
    "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
    "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
    "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
    "application/x-msaccess": { source: "apache", extensions: ["mdb"] },
    "application/x-msbinder": { source: "apache", extensions: ["obd"] },
    "application/x-mscardfile": { source: "apache", extensions: ["crd"] },
    "application/x-msclip": { source: "apache", extensions: ["clp"] },
    "application/x-msdos-program": { extensions: ["exe"] },
    "application/x-msdownload": {
      source: "apache",
      extensions: ["exe", "dll", "com", "bat", "msi"],
    },
    "application/x-msmediaview": {
      source: "apache",
      extensions: ["mvb", "m13", "m14"],
    },
    "application/x-msmetafile": {
      source: "apache",
      extensions: ["wmf", "wmz", "emf", "emz"],
    },
    "application/x-msmoney": { source: "apache", extensions: ["mny"] },
    "application/x-mspublisher": { source: "apache", extensions: ["pub"] },
    "application/x-msschedule": { source: "apache", extensions: ["scd"] },
    "application/x-msterminal": { source: "apache", extensions: ["trm"] },
    "application/x-mswrite": { source: "apache", extensions: ["wri"] },
    "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] },
    "application/x-ns-proxy-autoconfig": {
      compressible: !0,
      extensions: ["pac"],
    },
    "application/x-nzb": { source: "apache", extensions: ["nzb"] },
    "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
    "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] },
    "application/x-pkcs12": {
      source: "apache",
      compressible: !1,
      extensions: ["p12", "pfx"],
    },
    "application/x-pkcs7-certificates": {
      source: "apache",
      extensions: ["p7b", "spc"],
    },
    "application/x-pkcs7-certreqresp": {
      source: "apache",
      extensions: ["p7r"],
    },
    "application/x-pki-message": { source: "iana" },
    "application/x-rar-compressed": {
      source: "apache",
      compressible: !1,
      extensions: ["rar"],
    },
    "application/x-redhat-package-manager": {
      source: "nginx",
      extensions: ["rpm"],
    },
    "application/x-research-info-systems": {
      source: "apache",
      extensions: ["ris"],
    },
    "application/x-sea": { source: "nginx", extensions: ["sea"] },
    "application/x-sh": {
      source: "apache",
      compressible: !0,
      extensions: ["sh"],
    },
    "application/x-shar": { source: "apache", extensions: ["shar"] },
    "application/x-shockwave-flash": {
      source: "apache",
      compressible: !1,
      extensions: ["swf"],
    },
    "application/x-silverlight-app": { source: "apache", extensions: ["xap"] },
    "application/x-sql": { source: "apache", extensions: ["sql"] },
    "application/x-stuffit": {
      source: "apache",
      compressible: !1,
      extensions: ["sit"],
    },
    "application/x-stuffitx": { source: "apache", extensions: ["sitx"] },
    "application/x-subrip": { source: "apache", extensions: ["srt"] },
    "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] },
    "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] },
    "application/x-t3vm-image": { source: "apache", extensions: ["t3"] },
    "application/x-tads": { source: "apache", extensions: ["gam"] },
    "application/x-tar": {
      source: "apache",
      compressible: !0,
      extensions: ["tar"],
    },
    "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] },
    "application/x-tex": { source: "apache", extensions: ["tex"] },
    "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
    "application/x-texinfo": {
      source: "apache",
      extensions: ["texinfo", "texi"],
    },
    "application/x-tgif": { source: "apache", extensions: ["obj"] },
    "application/x-ustar": { source: "apache", extensions: ["ustar"] },
    "application/x-virtualbox-hdd": { compressible: !0, extensions: ["hdd"] },
    "application/x-virtualbox-ova": { compressible: !0, extensions: ["ova"] },
    "application/x-virtualbox-ovf": { compressible: !0, extensions: ["ovf"] },
    "application/x-virtualbox-vbox": { compressible: !0, extensions: ["vbox"] },
    "application/x-virtualbox-vbox-extpack": {
      compressible: !1,
      extensions: ["vbox-extpack"],
    },
    "application/x-virtualbox-vdi": { compressible: !0, extensions: ["vdi"] },
    "application/x-virtualbox-vhd": { compressible: !0, extensions: ["vhd"] },
    "application/x-virtualbox-vmdk": { compressible: !0, extensions: ["vmdk"] },
    "application/x-wais-source": { source: "apache", extensions: ["src"] },
    "application/x-web-app-manifest+json": {
      compressible: !0,
      extensions: ["webapp"],
    },
    "application/x-www-form-urlencoded": { source: "iana", compressible: !0 },
    "application/x-x509-ca-cert": {
      source: "iana",
      extensions: ["der", "crt", "pem"],
    },
    "application/x-x509-ca-ra-cert": { source: "iana" },
    "application/x-x509-next-ca-cert": { source: "iana" },
    "application/x-xfig": { source: "apache", extensions: ["fig"] },
    "application/x-xliff+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["xlf"],
    },
    "application/x-xpinstall": {
      source: "apache",
      compressible: !1,
      extensions: ["xpi"],
    },
    "application/x-xz": { source: "apache", extensions: ["xz"] },
    "application/x-zmachine": {
      source: "apache",
      extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    },
    "application/x400-bp": { source: "iana" },
    "application/xacml+xml": { source: "iana", compressible: !0 },
    "application/xaml+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["xaml"],
    },
    "application/xcap-att+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xav"],
    },
    "application/xcap-caps+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xca"],
    },
    "application/xcap-diff+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xdf"],
    },
    "application/xcap-el+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xel"],
    },
    "application/xcap-error+xml": { source: "iana", compressible: !0 },
    "application/xcap-ns+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xns"],
    },
    "application/xcon-conference-info+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/xcon-conference-info-diff+xml": {
      source: "iana",
      compressible: !0,
    },
    "application/xenc+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xenc"],
    },
    "application/xhtml+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xhtml", "xht"],
    },
    "application/xhtml-voice+xml": { source: "apache", compressible: !0 },
    "application/xliff+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xlf"],
    },
    "application/xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xml", "xsl", "xsd", "rng"],
    },
    "application/xml-dtd": {
      source: "iana",
      compressible: !0,
      extensions: ["dtd"],
    },
    "application/xml-external-parsed-entity": { source: "iana" },
    "application/xml-patch+xml": { source: "iana", compressible: !0 },
    "application/xmpp+xml": { source: "iana", compressible: !0 },
    "application/xop+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xop"],
    },
    "application/xproc+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["xpl"],
    },
    "application/xslt+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["xsl", "xslt"],
    },
    "application/xspf+xml": {
      source: "apache",
      compressible: !0,
      extensions: ["xspf"],
    },
    "application/xv+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["mxml", "xhvml", "xvml", "xvm"],
    },
    "application/yang": { source: "iana", extensions: ["yang"] },
    "application/yang-data+json": { source: "iana", compressible: !0 },
    "application/yang-data+xml": { source: "iana", compressible: !0 },
    "application/yang-patch+json": { source: "iana", compressible: !0 },
    "application/yang-patch+xml": { source: "iana", compressible: !0 },
    "application/yin+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["yin"],
    },
    "application/zip": {
      source: "iana",
      compressible: !1,
      extensions: ["zip"],
    },
    "application/zlib": { source: "iana" },
    "application/zstd": { source: "iana" },
    "audio/1d-interleaved-parityfec": { source: "iana" },
    "audio/32kadpcm": { source: "iana" },
    "audio/3gpp": { source: "iana", compressible: !1, extensions: ["3gpp"] },
    "audio/3gpp2": { source: "iana" },
    "audio/aac": { source: "iana" },
    "audio/ac3": { source: "iana" },
    "audio/adpcm": { source: "apache", extensions: ["adp"] },
    "audio/amr": { source: "iana", extensions: ["amr"] },
    "audio/amr-wb": { source: "iana" },
    "audio/amr-wb+": { source: "iana" },
    "audio/aptx": { source: "iana" },
    "audio/asc": { source: "iana" },
    "audio/atrac-advanced-lossless": { source: "iana" },
    "audio/atrac-x": { source: "iana" },
    "audio/atrac3": { source: "iana" },
    "audio/basic": {
      source: "iana",
      compressible: !1,
      extensions: ["au", "snd"],
    },
    "audio/bv16": { source: "iana" },
    "audio/bv32": { source: "iana" },
    "audio/clearmode": { source: "iana" },
    "audio/cn": { source: "iana" },
    "audio/dat12": { source: "iana" },
    "audio/dls": { source: "iana" },
    "audio/dsr-es201108": { source: "iana" },
    "audio/dsr-es202050": { source: "iana" },
    "audio/dsr-es202211": { source: "iana" },
    "audio/dsr-es202212": { source: "iana" },
    "audio/dv": { source: "iana" },
    "audio/dvi4": { source: "iana" },
    "audio/eac3": { source: "iana" },
    "audio/encaprtp": { source: "iana" },
    "audio/evrc": { source: "iana" },
    "audio/evrc-qcp": { source: "iana" },
    "audio/evrc0": { source: "iana" },
    "audio/evrc1": { source: "iana" },
    "audio/evrcb": { source: "iana" },
    "audio/evrcb0": { source: "iana" },
    "audio/evrcb1": { source: "iana" },
    "audio/evrcnw": { source: "iana" },
    "audio/evrcnw0": { source: "iana" },
    "audio/evrcnw1": { source: "iana" },
    "audio/evrcwb": { source: "iana" },
    "audio/evrcwb0": { source: "iana" },
    "audio/evrcwb1": { source: "iana" },
    "audio/evs": { source: "iana" },
    "audio/flexfec": { source: "iana" },
    "audio/fwdred": { source: "iana" },
    "audio/g711-0": { source: "iana" },
    "audio/g719": { source: "iana" },
    "audio/g722": { source: "iana" },
    "audio/g7221": { source: "iana" },
    "audio/g723": { source: "iana" },
    "audio/g726-16": { source: "iana" },
    "audio/g726-24": { source: "iana" },
    "audio/g726-32": { source: "iana" },
    "audio/g726-40": { source: "iana" },
    "audio/g728": { source: "iana" },
    "audio/g729": { source: "iana" },
    "audio/g7291": { source: "iana" },
    "audio/g729d": { source: "iana" },
    "audio/g729e": { source: "iana" },
    "audio/gsm": { source: "iana" },
    "audio/gsm-efr": { source: "iana" },
    "audio/gsm-hr-08": { source: "iana" },
    "audio/ilbc": { source: "iana" },
    "audio/ip-mr_v2.5": { source: "iana" },
    "audio/isac": { source: "apache" },
    "audio/l16": { source: "iana" },
    "audio/l20": { source: "iana" },
    "audio/l24": { source: "iana", compressible: !1 },
    "audio/l8": { source: "iana" },
    "audio/lpc": { source: "iana" },
    "audio/melp": { source: "iana" },
    "audio/melp1200": { source: "iana" },
    "audio/melp2400": { source: "iana" },
    "audio/melp600": { source: "iana" },
    "audio/mhas": { source: "iana" },
    "audio/midi": {
      source: "apache",
      extensions: ["mid", "midi", "kar", "rmi"],
    },
    "audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] },
    "audio/mp3": { compressible: !1, extensions: ["mp3"] },
    "audio/mp4": {
      source: "iana",
      compressible: !1,
      extensions: ["m4a", "mp4a"],
    },
    "audio/mp4a-latm": { source: "iana" },
    "audio/mpa": { source: "iana" },
    "audio/mpa-robust": { source: "iana" },
    "audio/mpeg": {
      source: "iana",
      compressible: !1,
      extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    },
    "audio/mpeg4-generic": { source: "iana" },
    "audio/musepack": { source: "apache" },
    "audio/ogg": {
      source: "iana",
      compressible: !1,
      extensions: ["oga", "ogg", "spx", "opus"],
    },
    "audio/opus": { source: "iana" },
    "audio/parityfec": { source: "iana" },
    "audio/pcma": { source: "iana" },
    "audio/pcma-wb": { source: "iana" },
    "audio/pcmu": { source: "iana" },
    "audio/pcmu-wb": { source: "iana" },
    "audio/prs.sid": { source: "iana" },
    "audio/qcelp": { source: "iana" },
    "audio/raptorfec": { source: "iana" },
    "audio/red": { source: "iana" },
    "audio/rtp-enc-aescm128": { source: "iana" },
    "audio/rtp-midi": { source: "iana" },
    "audio/rtploopback": { source: "iana" },
    "audio/rtx": { source: "iana" },
    "audio/s3m": { source: "apache", extensions: ["s3m"] },
    "audio/scip": { source: "iana" },
    "audio/silk": { source: "apache", extensions: ["sil"] },
    "audio/smv": { source: "iana" },
    "audio/smv-qcp": { source: "iana" },
    "audio/smv0": { source: "iana" },
    "audio/sofa": { source: "iana" },
    "audio/sp-midi": { source: "iana" },
    "audio/speex": { source: "iana" },
    "audio/t140c": { source: "iana" },
    "audio/t38": { source: "iana" },
    "audio/telephone-event": { source: "iana" },
    "audio/tetra_acelp": { source: "iana" },
    "audio/tetra_acelp_bb": { source: "iana" },
    "audio/tone": { source: "iana" },
    "audio/tsvcis": { source: "iana" },
    "audio/uemclip": { source: "iana" },
    "audio/ulpfec": { source: "iana" },
    "audio/usac": { source: "iana" },
    "audio/vdvi": { source: "iana" },
    "audio/vmr-wb": { source: "iana" },
    "audio/vnd.3gpp.iufp": { source: "iana" },
    "audio/vnd.4sb": { source: "iana" },
    "audio/vnd.audiokoz": { source: "iana" },
    "audio/vnd.celp": { source: "iana" },
    "audio/vnd.cisco.nse": { source: "iana" },
    "audio/vnd.cmles.radio-events": { source: "iana" },
    "audio/vnd.cns.anp1": { source: "iana" },
    "audio/vnd.cns.inf1": { source: "iana" },
    "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] },
    "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
    "audio/vnd.dlna.adts": { source: "iana" },
    "audio/vnd.dolby.heaac.1": { source: "iana" },
    "audio/vnd.dolby.heaac.2": { source: "iana" },
    "audio/vnd.dolby.mlp": { source: "iana" },
    "audio/vnd.dolby.mps": { source: "iana" },
    "audio/vnd.dolby.pl2": { source: "iana" },
    "audio/vnd.dolby.pl2x": { source: "iana" },
    "audio/vnd.dolby.pl2z": { source: "iana" },
    "audio/vnd.dolby.pulse.1": { source: "iana" },
    "audio/vnd.dra": { source: "iana", extensions: ["dra"] },
    "audio/vnd.dts": { source: "iana", extensions: ["dts"] },
    "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
    "audio/vnd.dts.uhd": { source: "iana" },
    "audio/vnd.dvb.file": { source: "iana" },
    "audio/vnd.everad.plj": { source: "iana" },
    "audio/vnd.hns.audio": { source: "iana" },
    "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
    "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] },
    "audio/vnd.nokia.mobile-xmf": { source: "iana" },
    "audio/vnd.nortel.vbk": { source: "iana" },
    "audio/vnd.nuera.ecelp4800": { source: "iana", extensions: ["ecelp4800"] },
    "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] },
    "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] },
    "audio/vnd.octel.sbc": { source: "iana" },
    "audio/vnd.presonus.multitrack": { source: "iana" },
    "audio/vnd.qcelp": { source: "iana" },
    "audio/vnd.rhetorex.32kadpcm": { source: "iana" },
    "audio/vnd.rip": { source: "iana", extensions: ["rip"] },
    "audio/vnd.rn-realaudio": { compressible: !1 },
    "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
    "audio/vnd.vmx.cvsd": { source: "iana" },
    "audio/vnd.wave": { compressible: !1 },
    "audio/vorbis": { source: "iana", compressible: !1 },
    "audio/vorbis-config": { source: "iana" },
    "audio/wav": { compressible: !1, extensions: ["wav"] },
    "audio/wave": { compressible: !1, extensions: ["wav"] },
    "audio/webm": { source: "apache", compressible: !1, extensions: ["weba"] },
    "audio/x-aac": { source: "apache", compressible: !1, extensions: ["aac"] },
    "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] },
    "audio/x-caf": { source: "apache", compressible: !1, extensions: ["caf"] },
    "audio/x-flac": { source: "apache", extensions: ["flac"] },
    "audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
    "audio/x-matroska": { source: "apache", extensions: ["mka"] },
    "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
    "audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
    "audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
    "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] },
    "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] },
    "audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
    "audio/x-tta": { source: "apache" },
    "audio/x-wav": { source: "apache", extensions: ["wav"] },
    "audio/xm": { source: "apache", extensions: ["xm"] },
    "chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
    "chemical/x-cif": { source: "apache", extensions: ["cif"] },
    "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
    "chemical/x-cml": { source: "apache", extensions: ["cml"] },
    "chemical/x-csml": { source: "apache", extensions: ["csml"] },
    "chemical/x-pdb": { source: "apache" },
    "chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
    "font/collection": { source: "iana", extensions: ["ttc"] },
    "font/otf": { source: "iana", compressible: !0, extensions: ["otf"] },
    "font/sfnt": { source: "iana" },
    "font/ttf": { source: "iana", compressible: !0, extensions: ["ttf"] },
    "font/woff": { source: "iana", extensions: ["woff"] },
    "font/woff2": { source: "iana", extensions: ["woff2"] },
    "image/aces": { source: "iana", extensions: ["exr"] },
    "image/apng": { compressible: !1, extensions: ["apng"] },
    "image/avci": { source: "iana", extensions: ["avci"] },
    "image/avcs": { source: "iana", extensions: ["avcs"] },
    "image/avif": { source: "iana", compressible: !1, extensions: ["avif"] },
    "image/bmp": { source: "iana", compressible: !0, extensions: ["bmp"] },
    "image/cgm": { source: "iana", extensions: ["cgm"] },
    "image/dicom-rle": { source: "iana", extensions: ["drle"] },
    "image/emf": { source: "iana", extensions: ["emf"] },
    "image/fits": { source: "iana", extensions: ["fits"] },
    "image/g3fax": { source: "iana", extensions: ["g3"] },
    "image/gif": { source: "iana", compressible: !1, extensions: ["gif"] },
    "image/heic": { source: "iana", extensions: ["heic"] },
    "image/heic-sequence": { source: "iana", extensions: ["heics"] },
    "image/heif": { source: "iana", extensions: ["heif"] },
    "image/heif-sequence": { source: "iana", extensions: ["heifs"] },
    "image/hej2k": { source: "iana", extensions: ["hej2"] },
    "image/hsj2": { source: "iana", extensions: ["hsj2"] },
    "image/ief": { source: "iana", extensions: ["ief"] },
    "image/jls": { source: "iana", extensions: ["jls"] },
    "image/jp2": {
      source: "iana",
      compressible: !1,
      extensions: ["jp2", "jpg2"],
    },
    "image/jpeg": {
      source: "iana",
      compressible: !1,
      extensions: ["jpeg", "jpg", "jpe"],
    },
    "image/jph": { source: "iana", extensions: ["jph"] },
    "image/jphc": { source: "iana", extensions: ["jhc"] },
    "image/jpm": { source: "iana", compressible: !1, extensions: ["jpm"] },
    "image/jpx": {
      source: "iana",
      compressible: !1,
      extensions: ["jpx", "jpf"],
    },
    "image/jxr": { source: "iana", extensions: ["jxr"] },
    "image/jxra": { source: "iana", extensions: ["jxra"] },
    "image/jxrs": { source: "iana", extensions: ["jxrs"] },
    "image/jxs": { source: "iana", extensions: ["jxs"] },
    "image/jxsc": { source: "iana", extensions: ["jxsc"] },
    "image/jxsi": { source: "iana", extensions: ["jxsi"] },
    "image/jxss": { source: "iana", extensions: ["jxss"] },
    "image/ktx": { source: "iana", extensions: ["ktx"] },
    "image/ktx2": { source: "iana", extensions: ["ktx2"] },
    "image/naplps": { source: "iana" },
    "image/pjpeg": { compressible: !1 },
    "image/png": { source: "iana", compressible: !1, extensions: ["png"] },
    "image/prs.btif": { source: "iana", extensions: ["btif"] },
    "image/prs.pti": { source: "iana", extensions: ["pti"] },
    "image/pwg-raster": { source: "iana" },
    "image/sgi": { source: "apache", extensions: ["sgi"] },
    "image/svg+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["svg", "svgz"],
    },
    "image/t38": { source: "iana", extensions: ["t38"] },
    "image/tiff": {
      source: "iana",
      compressible: !1,
      extensions: ["tif", "tiff"],
    },
    "image/tiff-fx": { source: "iana", extensions: ["tfx"] },
    "image/vnd.adobe.photoshop": {
      source: "iana",
      compressible: !0,
      extensions: ["psd"],
    },
    "image/vnd.airzip.accelerator.azv": { source: "iana", extensions: ["azv"] },
    "image/vnd.cns.inf2": { source: "iana" },
    "image/vnd.dece.graphic": {
      source: "iana",
      extensions: ["uvi", "uvvi", "uvg", "uvvg"],
    },
    "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
    "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
    "image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
    "image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
    "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
    "image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
    "image/vnd.fst": { source: "iana", extensions: ["fst"] },
    "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] },
    "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] },
    "image/vnd.globalgraphics.pgb": { source: "iana" },
    "image/vnd.microsoft.icon": {
      source: "iana",
      compressible: !0,
      extensions: ["ico"],
    },
    "image/vnd.mix": { source: "iana" },
    "image/vnd.mozilla.apng": { source: "iana" },
    "image/vnd.ms-dds": { compressible: !0, extensions: ["dds"] },
    "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
    "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
    "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
    "image/vnd.pco.b16": { source: "iana", extensions: ["b16"] },
    "image/vnd.radiance": { source: "iana" },
    "image/vnd.sealed.png": { source: "iana" },
    "image/vnd.sealedmedia.softseal.gif": { source: "iana" },
    "image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
    "image/vnd.svf": { source: "iana" },
    "image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] },
    "image/vnd.valve.source.texture": { source: "iana", extensions: ["vtf"] },
    "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
    "image/vnd.xiff": { source: "iana", extensions: ["xif"] },
    "image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] },
    "image/webp": { source: "apache", extensions: ["webp"] },
    "image/wmf": { source: "iana", extensions: ["wmf"] },
    "image/x-3ds": { source: "apache", extensions: ["3ds"] },
    "image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
    "image/x-cmx": { source: "apache", extensions: ["cmx"] },
    "image/x-freehand": {
      source: "apache",
      extensions: ["fh", "fhc", "fh4", "fh5", "fh7"],
    },
    "image/x-icon": { source: "apache", compressible: !0, extensions: ["ico"] },
    "image/x-jng": { source: "nginx", extensions: ["jng"] },
    "image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
    "image/x-ms-bmp": {
      source: "nginx",
      compressible: !0,
      extensions: ["bmp"],
    },
    "image/x-pcx": { source: "apache", extensions: ["pcx"] },
    "image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
    "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] },
    "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] },
    "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] },
    "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] },
    "image/x-rgb": { source: "apache", extensions: ["rgb"] },
    "image/x-tga": { source: "apache", extensions: ["tga"] },
    "image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
    "image/x-xcf": { compressible: !1 },
    "image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
    "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
    "message/cpim": { source: "iana" },
    "message/delivery-status": { source: "iana" },
    "message/disposition-notification": {
      source: "iana",
      extensions: ["disposition-notification"],
    },
    "message/external-body": { source: "iana" },
    "message/feedback-report": { source: "iana" },
    "message/global": { source: "iana", extensions: ["u8msg"] },
    "message/global-delivery-status": { source: "iana", extensions: ["u8dsn"] },
    "message/global-disposition-notification": {
      source: "iana",
      extensions: ["u8mdn"],
    },
    "message/global-headers": { source: "iana", extensions: ["u8hdr"] },
    "message/http": { source: "iana", compressible: !1 },
    "message/imdn+xml": { source: "iana", compressible: !0 },
    "message/news": { source: "iana" },
    "message/partial": { source: "iana", compressible: !1 },
    "message/rfc822": {
      source: "iana",
      compressible: !0,
      extensions: ["eml", "mime"],
    },
    "message/s-http": { source: "iana" },
    "message/sip": { source: "iana" },
    "message/sipfrag": { source: "iana" },
    "message/tracking-status": { source: "iana" },
    "message/vnd.si.simp": { source: "iana" },
    "message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] },
    "model/3mf": { source: "iana", extensions: ["3mf"] },
    "model/e57": { source: "iana" },
    "model/gltf+json": {
      source: "iana",
      compressible: !0,
      extensions: ["gltf"],
    },
    "model/gltf-binary": {
      source: "iana",
      compressible: !0,
      extensions: ["glb"],
    },
    "model/iges": {
      source: "iana",
      compressible: !1,
      extensions: ["igs", "iges"],
    },
    "model/mesh": {
      source: "iana",
      compressible: !1,
      extensions: ["msh", "mesh", "silo"],
    },
    "model/mtl": { source: "iana", extensions: ["mtl"] },
    "model/obj": { source: "iana", extensions: ["obj"] },
    "model/step": { source: "iana" },
    "model/step+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["stpx"],
    },
    "model/step+zip": {
      source: "iana",
      compressible: !1,
      extensions: ["stpz"],
    },
    "model/step-xml+zip": {
      source: "iana",
      compressible: !1,
      extensions: ["stpxz"],
    },
    "model/stl": { source: "iana", extensions: ["stl"] },
    "model/vnd.collada+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["dae"],
    },
    "model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
    "model/vnd.flatland.3dml": { source: "iana" },
    "model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
    "model/vnd.gs-gdl": { source: "apache" },
    "model/vnd.gs.gdl": { source: "iana" },
    "model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
    "model/vnd.moml+xml": { source: "iana", compressible: !0 },
    "model/vnd.mts": { source: "iana", extensions: ["mts"] },
    "model/vnd.opengex": { source: "iana", extensions: ["ogex"] },
    "model/vnd.parasolid.transmit.binary": {
      source: "iana",
      extensions: ["x_b"],
    },
    "model/vnd.parasolid.transmit.text": {
      source: "iana",
      extensions: ["x_t"],
    },
    "model/vnd.pytha.pyox": { source: "iana" },
    "model/vnd.rosette.annotated-data-model": { source: "iana" },
    "model/vnd.sap.vds": { source: "iana", extensions: ["vds"] },
    "model/vnd.usdz+zip": {
      source: "iana",
      compressible: !1,
      extensions: ["usdz"],
    },
    "model/vnd.valve.source.compiled-map": {
      source: "iana",
      extensions: ["bsp"],
    },
    "model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
    "model/vrml": {
      source: "iana",
      compressible: !1,
      extensions: ["wrl", "vrml"],
    },
    "model/x3d+binary": {
      source: "apache",
      compressible: !1,
      extensions: ["x3db", "x3dbz"],
    },
    "model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] },
    "model/x3d+vrml": {
      source: "apache",
      compressible: !1,
      extensions: ["x3dv", "x3dvz"],
    },
    "model/x3d+xml": {
      source: "iana",
      compressible: !0,
      extensions: ["x3d", "x3dz"],
    },
    "model/x3d-vrml": { source: "iana", extensions: ["x3dv"] },
    "multipart/alternative": { source: "iana", compressible: !1 },
    "multipart/appledouble": { source: "iana" },
    "multipart/byteranges": { source: "iana" },
    "multipart/digest": { source: "iana" },
    "multipart/encrypted": { source: "iana", compressible: !1 },
    "multipart/form-data": { source: "iana", compressible: !1 },
    "multipart/header-set": { source: "iana" },
    "multipart/mixed": { source: "iana" },
    "multipart/multilingual": { source: "iana" },
    "multipart/parallel": { source: "iana" },
    "multipart/related": { source: "iana", compressible: !1 },
    "multipart/report": { source: "iana" },
    "multipart/signed": { source: "iana", compressible: !1 },
    "multipart/vnd.bint.med-plus": { source: "iana" },
    "multipart/voice-message": { source: "iana" },
    "multipart/x-mixed-replace": { source: "iana" },
    "text/1d-interleaved-parityfec": { source: "iana" },
    "text/cache-manifest": {
      source: "iana",
      compressible: !0,
      extensions: ["appcache", "manifest"],
    },
    "text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
    "text/calender": { compressible: !0 },
    "text/cmd": { compressible: !0 },
    "text/coffeescript": { extensions: ["coffee", "litcoffee"] },
    "text/cql": { source: "iana" },
    "text/cql-expression": { source: "iana" },
    "text/cql-identifier": { source: "iana" },
    "text/css": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["css"],
    },
    "text/csv": { source: "iana", compressible: !0, extensions: ["csv"] },
    "text/csv-schema": { source: "iana" },
    "text/directory": { source: "iana" },
    "text/dns": { source: "iana" },
    "text/ecmascript": { source: "iana" },
    "text/encaprtp": { source: "iana" },
    "text/enriched": { source: "iana" },
    "text/fhirpath": { source: "iana" },
    "text/flexfec": { source: "iana" },
    "text/fwdred": { source: "iana" },
    "text/gff3": { source: "iana" },
    "text/grammar-ref-list": { source: "iana" },
    "text/html": {
      source: "iana",
      compressible: !0,
      extensions: ["html", "htm", "shtml"],
    },
    "text/jade": { extensions: ["jade"] },
    "text/javascript": { source: "iana", compressible: !0 },
    "text/jcr-cnd": { source: "iana" },
    "text/jsx": { compressible: !0, extensions: ["jsx"] },
    "text/less": { compressible: !0, extensions: ["less"] },
    "text/markdown": {
      source: "iana",
      compressible: !0,
      extensions: ["markdown", "md"],
    },
    "text/mathml": { source: "nginx", extensions: ["mml"] },
    "text/mdx": { compressible: !0, extensions: ["mdx"] },
    "text/mizar": { source: "iana" },
    "text/n3": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["n3"],
    },
    "text/parameters": { source: "iana", charset: "UTF-8" },
    "text/parityfec": { source: "iana" },
    "text/plain": {
      source: "iana",
      compressible: !0,
      extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    },
    "text/provenance-notation": { source: "iana", charset: "UTF-8" },
    "text/prs.fallenstein.rst": { source: "iana" },
    "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
    "text/prs.prop.logic": { source: "iana" },
    "text/raptorfec": { source: "iana" },
    "text/red": { source: "iana" },
    "text/rfc822-headers": { source: "iana" },
    "text/richtext": { source: "iana", compressible: !0, extensions: ["rtx"] },
    "text/rtf": { source: "iana", compressible: !0, extensions: ["rtf"] },
    "text/rtp-enc-aescm128": { source: "iana" },
    "text/rtploopback": { source: "iana" },
    "text/rtx": { source: "iana" },
    "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
    "text/shaclc": { source: "iana" },
    "text/shex": { source: "iana", extensions: ["shex"] },
    "text/slim": { extensions: ["slim", "slm"] },
    "text/spdx": { source: "iana", extensions: ["spdx"] },
    "text/strings": { source: "iana" },
    "text/stylus": { extensions: ["stylus", "styl"] },
    "text/t140": { source: "iana" },
    "text/tab-separated-values": {
      source: "iana",
      compressible: !0,
      extensions: ["tsv"],
    },
    "text/troff": {
      source: "iana",
      extensions: ["t", "tr", "roff", "man", "me", "ms"],
    },
    "text/turtle": { source: "iana", charset: "UTF-8", extensions: ["ttl"] },
    "text/ulpfec": { source: "iana" },
    "text/uri-list": {
      source: "iana",
      compressible: !0,
      extensions: ["uri", "uris", "urls"],
    },
    "text/vcard": { source: "iana", compressible: !0, extensions: ["vcard"] },
    "text/vnd.a": { source: "iana" },
    "text/vnd.abc": { source: "iana" },
    "text/vnd.ascii-art": { source: "iana" },
    "text/vnd.curl": { source: "iana", extensions: ["curl"] },
    "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
    "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
    "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
    "text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" },
    "text/vnd.dmclientscript": { source: "iana" },
    "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
    "text/vnd.esmertec.theme-descriptor": { source: "iana", charset: "UTF-8" },
    "text/vnd.familysearch.gedcom": { source: "iana", extensions: ["ged"] },
    "text/vnd.ficlab.flt": { source: "iana" },
    "text/vnd.fly": { source: "iana", extensions: ["fly"] },
    "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
    "text/vnd.gml": { source: "iana" },
    "text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
    "text/vnd.hans": { source: "iana" },
    "text/vnd.hgl": { source: "iana" },
    "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
    "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
    "text/vnd.iptc.newsml": { source: "iana" },
    "text/vnd.iptc.nitf": { source: "iana" },
    "text/vnd.latex-z": { source: "iana" },
    "text/vnd.motorola.reflex": { source: "iana" },
    "text/vnd.ms-mediapackage": { source: "iana" },
    "text/vnd.net2phone.commcenter.command": { source: "iana" },
    "text/vnd.radisys.msml-basic-layout": { source: "iana" },
    "text/vnd.senx.warpscript": { source: "iana" },
    "text/vnd.si.uricatalogue": { source: "iana" },
    "text/vnd.sosi": { source: "iana" },
    "text/vnd.sun.j2me.app-descriptor": {
      source: "iana",
      charset: "UTF-8",
      extensions: ["jad"],
    },
    "text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" },
    "text/vnd.wap.si": { source: "iana" },
    "text/vnd.wap.sl": { source: "iana" },
    "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
    "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
    "text/vtt": {
      source: "iana",
      charset: "UTF-8",
      compressible: !0,
      extensions: ["vtt"],
    },
    "text/x-asm": { source: "apache", extensions: ["s", "asm"] },
    "text/x-c": {
      source: "apache",
      extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    },
    "text/x-component": { source: "nginx", extensions: ["htc"] },
    "text/x-fortran": {
      source: "apache",
      extensions: ["f", "for", "f77", "f90"],
    },
    "text/x-gwt-rpc": { compressible: !0 },
    "text/x-handlebars-template": { extensions: ["hbs"] },
    "text/x-java-source": { source: "apache", extensions: ["java"] },
    "text/x-jquery-tmpl": { compressible: !0 },
    "text/x-lua": { extensions: ["lua"] },
    "text/x-markdown": { compressible: !0, extensions: ["mkd"] },
    "text/x-nfo": { source: "apache", extensions: ["nfo"] },
    "text/x-opml": { source: "apache", extensions: ["opml"] },
    "text/x-org": { compressible: !0, extensions: ["org"] },
    "text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
    "text/x-processing": { compressible: !0, extensions: ["pde"] },
    "text/x-sass": { extensions: ["sass"] },
    "text/x-scss": { extensions: ["scss"] },
    "text/x-setext": { source: "apache", extensions: ["etx"] },
    "text/x-sfv": { source: "apache", extensions: ["sfv"] },
    "text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
    "text/x-uuencode": { source: "apache", extensions: ["uu"] },
    "text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
    "text/x-vcard": { source: "apache", extensions: ["vcf"] },
    "text/xml": { source: "iana", compressible: !0, extensions: ["xml"] },
    "text/xml-external-parsed-entity": { source: "iana" },
    "text/yaml": { compressible: !0, extensions: ["yaml", "yml"] },
    "video/1d-interleaved-parityfec": { source: "iana" },
    "video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] },
    "video/3gpp-tt": { source: "iana" },
    "video/3gpp2": { source: "iana", extensions: ["3g2"] },
    "video/av1": { source: "iana" },
    "video/bmpeg": { source: "iana" },
    "video/bt656": { source: "iana" },
    "video/celb": { source: "iana" },
    "video/dv": { source: "iana" },
    "video/encaprtp": { source: "iana" },
    "video/ffv1": { source: "iana" },
    "video/flexfec": { source: "iana" },
    "video/h261": { source: "iana", extensions: ["h261"] },
    "video/h263": { source: "iana", extensions: ["h263"] },
    "video/h263-1998": { source: "iana" },
    "video/h263-2000": { source: "iana" },
    "video/h264": { source: "iana", extensions: ["h264"] },
    "video/h264-rcdo": { source: "iana" },
    "video/h264-svc": { source: "iana" },
    "video/h265": { source: "iana" },
    "video/iso.segment": { source: "iana", extensions: ["m4s"] },
    "video/jpeg": { source: "iana", extensions: ["jpgv"] },
    "video/jpeg2000": { source: "iana" },
    "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
    "video/jxsv": { source: "iana" },
    "video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] },
    "video/mp1s": { source: "iana" },
    "video/mp2p": { source: "iana" },
    "video/mp2t": { source: "iana", extensions: ["ts"] },
    "video/mp4": {
      source: "iana",
      compressible: !1,
      extensions: ["mp4", "mp4v", "mpg4"],
    },
    "video/mp4v-es": { source: "iana" },
    "video/mpeg": {
      source: "iana",
      compressible: !1,
      extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    },
    "video/mpeg4-generic": { source: "iana" },
    "video/mpv": { source: "iana" },
    "video/nv": { source: "iana" },
    "video/ogg": { source: "iana", compressible: !1, extensions: ["ogv"] },
    "video/parityfec": { source: "iana" },
    "video/pointer": { source: "iana" },
    "video/quicktime": {
      source: "iana",
      compressible: !1,
      extensions: ["qt", "mov"],
    },
    "video/raptorfec": { source: "iana" },
    "video/raw": { source: "iana" },
    "video/rtp-enc-aescm128": { source: "iana" },
    "video/rtploopback": { source: "iana" },
    "video/rtx": { source: "iana" },
    "video/scip": { source: "iana" },
    "video/smpte291": { source: "iana" },
    "video/smpte292m": { source: "iana" },
    "video/ulpfec": { source: "iana" },
    "video/vc1": { source: "iana" },
    "video/vc2": { source: "iana" },
    "video/vnd.cctv": { source: "iana" },
    "video/vnd.dece.hd": { source: "iana", extensions: ["uvh", "uvvh"] },
    "video/vnd.dece.mobile": { source: "iana", extensions: ["uvm", "uvvm"] },
    "video/vnd.dece.mp4": { source: "iana" },
    "video/vnd.dece.pd": { source: "iana", extensions: ["uvp", "uvvp"] },
    "video/vnd.dece.sd": { source: "iana", extensions: ["uvs", "uvvs"] },
    "video/vnd.dece.video": { source: "iana", extensions: ["uvv", "uvvv"] },
    "video/vnd.directv.mpeg": { source: "iana" },
    "video/vnd.directv.mpeg-tts": { source: "iana" },
    "video/vnd.dlna.mpeg-tts": { source: "iana" },
    "video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] },
    "video/vnd.fvt": { source: "iana", extensions: ["fvt"] },
    "video/vnd.hns.video": { source: "iana" },
    "video/vnd.iptvforum.1dparityfec-1010": { source: "iana" },
    "video/vnd.iptvforum.1dparityfec-2005": { source: "iana" },
    "video/vnd.iptvforum.2dparityfec-1010": { source: "iana" },
    "video/vnd.iptvforum.2dparityfec-2005": { source: "iana" },
    "video/vnd.iptvforum.ttsavc": { source: "iana" },
    "video/vnd.iptvforum.ttsmpeg2": { source: "iana" },
    "video/vnd.motorola.video": { source: "iana" },
    "video/vnd.motorola.videop": { source: "iana" },
    "video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] },
    "video/vnd.ms-playready.media.pyv": { source: "iana", extensions: ["pyv"] },
    "video/vnd.nokia.interleaved-multimedia": { source: "iana" },
    "video/vnd.nokia.mp4vr": { source: "iana" },
    "video/vnd.nokia.videovoip": { source: "iana" },
    "video/vnd.objectvideo": { source: "iana" },
    "video/vnd.radgamettools.bink": { source: "iana" },
    "video/vnd.radgamettools.smacker": { source: "iana" },
    "video/vnd.sealed.mpeg1": { source: "iana" },
    "video/vnd.sealed.mpeg4": { source: "iana" },
    "video/vnd.sealed.swf": { source: "iana" },
    "video/vnd.sealedmedia.softseal.mov": { source: "iana" },
    "video/vnd.uvvu.mp4": { source: "iana", extensions: ["uvu", "uvvu"] },
    "video/vnd.vivo": { source: "iana", extensions: ["viv"] },
    "video/vnd.youtube.yt": { source: "iana" },
    "video/vp8": { source: "iana" },
    "video/vp9": { source: "iana" },
    "video/webm": { source: "apache", compressible: !1, extensions: ["webm"] },
    "video/x-f4v": { source: "apache", extensions: ["f4v"] },
    "video/x-fli": { source: "apache", extensions: ["fli"] },
    "video/x-flv": { source: "apache", compressible: !1, extensions: ["flv"] },
    "video/x-m4v": { source: "apache", extensions: ["m4v"] },
    "video/x-matroska": {
      source: "apache",
      compressible: !1,
      extensions: ["mkv", "mk3d", "mks"],
    },
    "video/x-mng": { source: "apache", extensions: ["mng"] },
    "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
    "video/x-ms-vob": { source: "apache", extensions: ["vob"] },
    "video/x-ms-wm": { source: "apache", extensions: ["wm"] },
    "video/x-ms-wmv": {
      source: "apache",
      compressible: !1,
      extensions: ["wmv"],
    },
    "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
    "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
    "video/x-msvideo": { source: "apache", extensions: ["avi"] },
    "video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
    "video/x-smv": { source: "apache", extensions: ["smv"] },
    "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] },
    "x-shader/x-fragment": { compressible: !0 },
    "x-shader/x-vertex": { compressible: !0 },
  };
});
var It = y((sg, Tt) => {
  Tt.exports = St();
});
var Ot = y((ug, sa) => {
  "use strict";
  sa.exports = Ht;
  sa.exports.preferredCharsets = Ht;
  var Eu = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function Au(a) {
    for (var e = a.split(","), i = 0, n = 0; i < e.length; i++) {
      var t = Du(e[i].trim(), i);
      t && (e[n++] = t);
    }
    return (e.length = n), e;
  }
  function Du(a, e) {
    var i = Eu.exec(a);
    if (!i) return null;
    var n = i[1],
      t = 1;
    if (i[2])
      for (var r = i[2].split(";"), o = 0; o < r.length; o++) {
        var s = r[o].trim().split("=");
        if (s[0] === "q") {
          t = parseFloat(s[1]);
          break;
        }
      }
    return { charset: n, q: t, i: e };
  }
  function Pu(a, e, i) {
    for (var n = { o: -1, q: 0, s: 0 }, t = 0; t < e.length; t++) {
      var r = Su(a, e[t], i);
      r && (n.s - r.s || n.q - r.q || n.o - r.o) < 0 && (n = r);
    }
    return n;
  }
  function Su(a, e, i) {
    var n = 0;
    if (e.charset.toLowerCase() === a.toLowerCase()) n |= 1;
    else if (e.charset !== "*") return null;
    return { i, o: e.i, q: e.q, s: n };
  }
  function Ht(a, e) {
    var i = Au(a === void 0 ? "*" : a || "");
    if (!e) return i.filter(Lt).sort(zt).map(Tu);
    var n = e.map(function (r, o) {
      return Pu(r, i, o);
    });
    return n
      .filter(Lt)
      .sort(zt)
      .map(function (r) {
        return e[n.indexOf(r)];
      });
  }
  function zt(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Tu(a) {
    return a.charset;
  }
  function Lt(a) {
    return a.q > 0;
  }
});
var Xt = y((dg, ca) => {
  "use strict";
  ca.exports = Ut;
  ca.exports.preferredEncodings = Ut;
  var Iu = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function $u(a) {
    for (var e = a.split(","), i = !1, n = 1, t = 0, r = 0; t < e.length; t++) {
      var o = ju(e[t].trim(), t);
      o &&
        ((e[r++] = o),
        (i = i || Gt("identity", o)),
        (n = Math.min(n, o.q || 1)));
    }
    return (
      i || (e[r++] = { encoding: "identity", q: n, i: t }), (e.length = r), e
    );
  }
  function ju(a, e) {
    var i = Iu.exec(a);
    if (!i) return null;
    var n = i[1],
      t = 1;
    if (i[2])
      for (var r = i[2].split(";"), o = 0; o < r.length; o++) {
        var s = r[o].trim().split("=");
        if (s[0] === "q") {
          t = parseFloat(s[1]);
          break;
        }
      }
    return { encoding: n, q: t, i: e };
  }
  function Ru(a, e, i) {
    for (var n = { o: -1, q: 0, s: 0 }, t = 0; t < e.length; t++) {
      var r = Gt(a, e[t], i);
      r && (n.s - r.s || n.q - r.q || n.o - r.o) < 0 && (n = r);
    }
    return n;
  }
  function Gt(a, e, i) {
    var n = 0;
    if (e.encoding.toLowerCase() === a.toLowerCase()) n |= 1;
    else if (e.encoding !== "*") return null;
    return { i, o: e.i, q: e.q, s: n };
  }
  function Ut(a, e) {
    var i = $u(a || "");
    if (!e) return i.filter(Nt).sort(Mt).map(Fu);
    var n = e.map(function (r, o) {
      return Ru(r, i, o);
    });
    return n
      .filter(Nt)
      .sort(Mt)
      .map(function (r) {
        return e[n.indexOf(r)];
      });
  }
  function Mt(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Fu(a) {
    return a.encoding;
  }
  function Nt(a) {
    return a.q > 0;
  }
});
var Kt = y((mg, pa) => {
  "use strict";
  pa.exports = Qt;
  pa.exports.preferredLanguages = Qt;
  var Bu = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
  function qu(a) {
    for (var e = a.split(","), i = 0, n = 0; i < e.length; i++) {
      var t = Zt(e[i].trim(), i);
      t && (e[n++] = t);
    }
    return (e.length = n), e;
  }
  function Zt(a, e) {
    var i = Bu.exec(a);
    if (!i) return null;
    var n = i[1],
      t = i[2],
      r = n;
    t && (r += "-" + t);
    var o = 1;
    if (i[3])
      for (var s = i[3].split(";"), c = 0; c < s.length; c++) {
        var p = s[c].split("=");
        p[0] === "q" && (o = parseFloat(p[1]));
      }
    return { prefix: n, suffix: t, q: o, i: e, full: r };
  }
  function zu(a, e, i) {
    for (var n = { o: -1, q: 0, s: 0 }, t = 0; t < e.length; t++) {
      var r = Lu(a, e[t], i);
      r && (n.s - r.s || n.q - r.q || n.o - r.o) < 0 && (n = r);
    }
    return n;
  }
  function Lu(a, e, i) {
    var n = Zt(a);
    if (!n) return null;
    var t = 0;
    if (e.full.toLowerCase() === n.full.toLowerCase()) t |= 4;
    else if (e.prefix.toLowerCase() === n.full.toLowerCase()) t |= 2;
    else if (e.full.toLowerCase() === n.prefix.toLowerCase()) t |= 1;
    else if (e.full !== "*") return null;
    return { i, o: e.i, q: e.q, s: t };
  }
  function Qt(a, e) {
    var i = qu(a === void 0 ? "*" : a || "");
    if (!e) return i.filter(Jt).sort(Vt).map(Hu);
    var n = e.map(function (r, o) {
      return zu(r, i, o);
    });
    return n
      .filter(Jt)
      .sort(Vt)
      .map(function (r) {
        return e[n.indexOf(r)];
      });
  }
  function Vt(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Hu(a) {
    return a.full;
  }
  function Jt(a) {
    return a.q > 0;
  }
});
var nr = y((fg, la) => {
  "use strict";
  la.exports = ir;
  la.exports.preferredMediaTypes = ir;
  var Ou = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
  function Mu(a) {
    for (var e = Vu(a), i = 0, n = 0; i < e.length; i++) {
      var t = er(e[i].trim(), i);
      t && (e[n++] = t);
    }
    return (e.length = n), e;
  }
  function er(a, e) {
    var i = Ou.exec(a);
    if (!i) return null;
    var n = Object.create(null),
      t = 1,
      r = i[2],
      o = i[1];
    if (i[3])
      for (var s = Ju(i[3]).map(Xu), c = 0; c < s.length; c++) {
        var p = s[c],
          u = p[0].toLowerCase(),
          m = p[1],
          f =
            m && m[0] === '"' && m[m.length - 1] === '"'
              ? m.substr(1, m.length - 2)
              : m;
        if (u === "q") {
          t = parseFloat(f);
          break;
        }
        n[u] = f;
      }
    return { type: o, subtype: r, params: n, q: t, i: e };
  }
  function Nu(a, e, i) {
    for (var n = { o: -1, q: 0, s: 0 }, t = 0; t < e.length; t++) {
      var r = Gu(a, e[t], i);
      r && (n.s - r.s || n.q - r.q || n.o - r.o) < 0 && (n = r);
    }
    return n;
  }
  function Gu(a, e, i) {
    var n = er(a),
      t = 0;
    if (!n) return null;
    if (e.type.toLowerCase() == n.type.toLowerCase()) t |= 4;
    else if (e.type != "*") return null;
    if (e.subtype.toLowerCase() == n.subtype.toLowerCase()) t |= 2;
    else if (e.subtype != "*") return null;
    var r = Object.keys(e.params);
    if (r.length > 0)
      if (
        r.every(function (o) {
          return (
            e.params[o] == "*" ||
            (e.params[o] || "").toLowerCase() ==
              (n.params[o] || "").toLowerCase()
          );
        })
      )
        t |= 1;
      else return null;
    return { i, o: e.i, q: e.q, s: t };
  }
  function ir(a, e) {
    var i = Mu(a === void 0 ? "*/*" : a || "");
    if (!e) return i.filter(Yt).sort(Wt).map(Uu);
    var n = e.map(function (r, o) {
      return Nu(r, i, o);
    });
    return n
      .filter(Yt)
      .sort(Wt)
      .map(function (r) {
        return e[n.indexOf(r)];
      });
  }
  function Wt(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Uu(a) {
    return a.type + "/" + a.subtype;
  }
  function Yt(a) {
    return a.q > 0;
  }
  function ar(a) {
    for (var e = 0, i = 0; (i = a.indexOf('"', i)) !== -1; ) e++, i++;
    return e;
  }
  function Xu(a) {
    var e = a.indexOf("="),
      i,
      n;
    return (
      e === -1 ? (i = a) : ((i = a.substr(0, e)), (n = a.substr(e + 1))), [i, n]
    );
  }
  function Vu(a) {
    for (var e = a.split(","), i = 1, n = 0; i < e.length; i++)
      ar(e[n]) % 2 == 0 ? (e[++n] = e[i]) : (e[n] += "," + e[i]);
    return (e.length = n + 1), e;
  }
  function Ju(a) {
    for (var e = a.split(";"), i = 1, n = 0; i < e.length; i++)
      ar(e[n]) % 2 == 0 ? (e[++n] = e[i]) : (e[n] += ";" + e[i]);
    e.length = n + 1;
    for (var i = 0; i < e.length; i++) e[i] = e[i].trim();
    return e;
  }
});
var tr = y((hg, ua) => {
  "use strict";
  var Zu = Ot(),
    Qu = Xt(),
    Ku = Kt(),
    Wu = nr();
  ua.exports = L;
  ua.exports.Negotiator = L;
  function L(a) {
    if (!(this instanceof L)) return new L(a);
    this.request = a;
  }
  L.prototype.charset = function (e) {
    var i = this.charsets(e);
    return i && i[0];
  };
  L.prototype.charsets = function (e) {
    return Zu(this.request.headers["accept-charset"], e);
  };
  L.prototype.encoding = function (e) {
    var i = this.encodings(e);
    return i && i[0];
  };
  L.prototype.encodings = function (e) {
    return Qu(this.request.headers["accept-encoding"], e);
  };
  L.prototype.language = function (e) {
    var i = this.languages(e);
    return i && i[0];
  };
  L.prototype.languages = function (e) {
    return Ku(this.request.headers["accept-language"], e);
  };
  L.prototype.mediaType = function (e) {
    var i = this.mediaTypes(e);
    return i && i[0];
  };
  L.prototype.mediaTypes = function (e) {
    return Wu(this.request.headers.accept, e);
  };
  L.prototype.preferredCharset = L.prototype.charset;
  L.prototype.preferredCharsets = L.prototype.charsets;
  L.prototype.preferredEncoding = L.prototype.encoding;
  L.prototype.preferredEncodings = L.prototype.encodings;
  L.prototype.preferredLanguage = L.prototype.language;
  L.prototype.preferredLanguages = L.prototype.languages;
  L.prototype.preferredMediaType = L.prototype.mediaType;
  L.prototype.preferredMediaTypes = L.prototype.mediaTypes;
});
var Or = y((Lv, Hr) => {
  "use strict";
  Hr.exports = {
    100: "\u{1F3C1}",
    200: "\u2705",
    201: "\u{1F4DD}",
    202: "\u{1F504}",
    204: "\u{1F4AD}",
    300: "\u{1F500}",
    301: "\u{1F69A}",
    302: "\u{1F50E}",
    303: "\u{1F4E8}",
    304: "\u{1F4A0}",
    305: "\u{1F501}",
    306: "\u{1F503}",
    307: "\u2139\uFE0F",
    308: "\u{1F195}",
    400: "\u{1F6AB}",
    401: "\u{1F510}",
    402: "\u{1F4B0}",
    403: "\u26D4",
    404: "\u2753",
    405: "\u2757",
    406: "\u{1F6E1}",
    407: "\u{1F529}",
    408: "\u231B\uFE0F",
    409: "\u{1F4A5}",
    410: "\u{1F4A8}",
    411: "\u{1F4CF}",
    412: "\u{1F6D1}",
    413: "\u{1F5C3}",
    414: "\u{1F196}",
    415: "\u{1F4FC}",
    416: "\u{1F4D0}",
    417: "\u{1F914}",
    418: "\u{1F375}",
    421: "\u{1F502}",
    422: "\u{1F4A9}",
    423: "\u{1F512}",
    424: "\u{1F9F6}",
    425: "\u23F1",
    426: "\u{1F4E4}",
    428: "\u26D3",
    429: "\u{1F30B}",
    431: "\u{1F92E}",
    444: "\u{1F5D1}",
    451: "\u2696\uFE0F",
    494: "\u{1F9FE}",
    495: "\u{1F3C5}",
    496: "\u{1F3F7}",
    499: "\u{1F6B6}\u{1F3FD}",
    497: "\u274E",
    500: "\u{1F4A3}",
    501: "\u{1F4ED}",
    502: "\u{1F6A7}",
    503: "\u{1F6A8}",
    504: "\u23F2",
    505: "\u{1F56F}",
    506: "\u2622\uFE0F",
    507: "\u{1F4AF}",
    508: "\u27B0",
    509: "\u{1F9EE}",
    510: "\u{1F3D7}",
    511: "\u{1F511}",
  };
});
var Ne = y((Fa, Ba) => {
  (function (a, e) {
    typeof Fa == "object" && typeof Ba < "u"
      ? (Ba.exports = e())
      : typeof define == "function" && define.amd
      ? define(e)
      : ((a = typeof globalThis < "u" ? globalThis : a || self).dayjs = e());
  })(Fa, function () {
    "use strict";
    var a = 1e3,
      e = 6e4,
      i = 36e5,
      n = "millisecond",
      t = "second",
      r = "minute",
      o = "hour",
      s = "day",
      c = "week",
      p = "month",
      u = "quarter",
      m = "year",
      f = "date",
      l = "Invalid Date",
      d =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      h =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      x = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (A) {
          var E = ["th", "st", "nd", "rd"],
            w = A % 100;
          return "[" + A + (E[(w - 20) % 10] || E[w] || E[0]) + "]";
        },
      },
      v = function (A, E, w) {
        var I = String(A);
        return !I || I.length >= E
          ? A
          : "" + Array(E + 1 - I.length).join(w) + A;
      },
      g = {
        s: v,
        z: function (A) {
          var E = -A.utcOffset(),
            w = Math.abs(E),
            I = Math.floor(w / 60),
            C = w % 60;
          return (E <= 0 ? "+" : "-") + v(I, 2, "0") + ":" + v(C, 2, "0");
        },
        m: function A(E, w) {
          if (E.date() < w.date()) return -A(w, E);
          var I = 12 * (w.year() - E.year()) + (w.month() - E.month()),
            C = E.clone().add(I, p),
            D = w - C < 0,
            $ = E.clone().add(I + (D ? -1 : 1), p);
          return +(-(I + (w - C) / (D ? C - $ : $ - C)) || 0);
        },
        a: function (A) {
          return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
        },
        p: function (A) {
          return (
            { M: p, y: m, w: c, d: s, D: f, h: o, m: r, s: t, ms: n, Q: u }[
              A
            ] ||
            String(A || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (A) {
          return A === void 0;
        },
      },
      b = "en",
      k = {};
    k[b] = x;
    var T = function (A) {
        return A instanceof ee;
      },
      _ = function A(E, w, I) {
        var C;
        if (!E) return b;
        if (typeof E == "string") {
          var D = E.toLowerCase();
          k[D] && (C = D), w && ((k[D] = w), (C = D));
          var $ = E.split("-");
          if (!C && $.length > 1) return A($[0]);
        } else {
          var q = E.name;
          (k[q] = E), (C = q);
        }
        return !I && C && (b = C), C || (!I && b);
      },
      P = function (A, E) {
        if (T(A)) return A.clone();
        var w = typeof E == "object" ? E : {};
        return (w.date = A), (w.args = arguments), new ee(w);
      },
      S = g;
    (S.l = _),
      (S.i = T),
      (S.w = function (A, E) {
        return P(A, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      });
    var ee = (function () {
        function A(w) {
          (this.$L = _(w.locale, null, !0)), this.parse(w);
        }
        var E = A.prototype;
        return (
          (E.parse = function (w) {
            (this.$d = (function (I) {
              var C = I.date,
                D = I.utc;
              if (C === null) return new Date(NaN);
              if (S.u(C)) return new Date();
              if (C instanceof Date) return new Date(C);
              if (typeof C == "string" && !/Z$/i.test(C)) {
                var $ = C.match(d);
                if ($) {
                  var q = $[2] - 1 || 0,
                    O = ($[7] || "0").substring(0, 3);
                  return D
                    ? new Date(
                        Date.UTC(
                          $[1],
                          q,
                          $[3] || 1,
                          $[4] || 0,
                          $[5] || 0,
                          $[6] || 0,
                          O
                        )
                      )
                    : new Date(
                        $[1],
                        q,
                        $[3] || 1,
                        $[4] || 0,
                        $[5] || 0,
                        $[6] || 0,
                        O
                      );
                }
              }
              return new Date(C);
            })(w)),
              (this.$x = w.x || {}),
              this.init();
          }),
          (E.init = function () {
            var w = this.$d;
            (this.$y = w.getFullYear()),
              (this.$M = w.getMonth()),
              (this.$D = w.getDate()),
              (this.$W = w.getDay()),
              (this.$H = w.getHours()),
              (this.$m = w.getMinutes()),
              (this.$s = w.getSeconds()),
              (this.$ms = w.getMilliseconds());
          }),
          (E.$utils = function () {
            return S;
          }),
          (E.isValid = function () {
            return this.$d.toString() !== l;
          }),
          (E.isSame = function (w, I) {
            var C = P(w);
            return this.startOf(I) <= C && C <= this.endOf(I);
          }),
          (E.isAfter = function (w, I) {
            return P(w) < this.startOf(I);
          }),
          (E.isBefore = function (w, I) {
            return this.endOf(I) < P(w);
          }),
          (E.$g = function (w, I, C) {
            return S.u(w) ? this[I] : this.set(C, w);
          }),
          (E.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (E.valueOf = function () {
            return this.$d.getTime();
          }),
          (E.startOf = function (w, I) {
            var C = this,
              D = !!S.u(I) || I,
              $ = S.p(w),
              q = function (Ae, Z) {
                var me = S.w(
                  C.$u ? Date.UTC(C.$y, Z, Ae) : new Date(C.$y, Z, Ae),
                  C
                );
                return D ? me : me.endOf(s);
              },
              O = function (Ae, Z) {
                return S.w(
                  C.toDate()[Ae].apply(
                    C.toDate("s"),
                    (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)
                  ),
                  C
                );
              },
              H = this.$W,
              X = this.$M,
              de = this.$D,
              ce = "set" + (this.$u ? "UTC" : "");
            switch ($) {
              case m:
                return D ? q(1, 0) : q(31, 11);
              case p:
                return D ? q(1, X) : q(0, X + 1);
              case c:
                var Le = this.$locale().weekStart || 0,
                  He = (H < Le ? H + 7 : H) - Le;
                return q(D ? de - He : de + (6 - He), X);
              case s:
              case f:
                return O(ce + "Hours", 0);
              case o:
                return O(ce + "Minutes", 1);
              case r:
                return O(ce + "Seconds", 2);
              case t:
                return O(ce + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (E.endOf = function (w) {
            return this.startOf(w, !1);
          }),
          (E.$set = function (w, I) {
            var C,
              D = S.p(w),
              $ = "set" + (this.$u ? "UTC" : ""),
              q = ((C = {}),
              (C[s] = $ + "Date"),
              (C[f] = $ + "Date"),
              (C[p] = $ + "Month"),
              (C[m] = $ + "FullYear"),
              (C[o] = $ + "Hours"),
              (C[r] = $ + "Minutes"),
              (C[t] = $ + "Seconds"),
              (C[n] = $ + "Milliseconds"),
              C)[D],
              O = D === s ? this.$D + (I - this.$W) : I;
            if (D === p || D === m) {
              var H = this.clone().set(f, 1);
              H.$d[q](O),
                H.init(),
                (this.$d = H.set(f, Math.min(this.$D, H.daysInMonth())).$d);
            } else q && this.$d[q](O);
            return this.init(), this;
          }),
          (E.set = function (w, I) {
            return this.clone().$set(w, I);
          }),
          (E.get = function (w) {
            return this[S.p(w)]();
          }),
          (E.add = function (w, I) {
            var C,
              D = this;
            w = Number(w);
            var $ = S.p(I),
              q = function (X) {
                var de = P(D);
                return S.w(de.date(de.date() + Math.round(X * w)), D);
              };
            if ($ === p) return this.set(p, this.$M + w);
            if ($ === m) return this.set(m, this.$y + w);
            if ($ === s) return q(1);
            if ($ === c) return q(7);
            var O = ((C = {}), (C[r] = e), (C[o] = i), (C[t] = a), C)[$] || 1,
              H = this.$d.getTime() + w * O;
            return S.w(H, this);
          }),
          (E.subtract = function (w, I) {
            return this.add(-1 * w, I);
          }),
          (E.format = function (w) {
            var I = this,
              C = this.$locale();
            if (!this.isValid()) return C.invalidDate || l;
            var D = w || "YYYY-MM-DDTHH:mm:ssZ",
              $ = S.z(this),
              q = this.$H,
              O = this.$m,
              H = this.$M,
              X = C.weekdays,
              de = C.months,
              ce = function (Z, me, Ki, ri) {
                return (Z && (Z[me] || Z(I, D))) || Ki[me].slice(0, ri);
              },
              Le = function (Z) {
                return S.s(q % 12 || 12, Z, "0");
              },
              He =
                C.meridiem ||
                function (Z, me, Ki) {
                  var ri = Z < 12 ? "AM" : "PM";
                  return Ki ? ri.toLowerCase() : ri;
                },
              Ae = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: H + 1,
                MM: S.s(H + 1, 2, "0"),
                MMM: ce(C.monthsShort, H, de, 3),
                MMMM: ce(de, H),
                D: this.$D,
                DD: S.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: ce(C.weekdaysMin, this.$W, X, 2),
                ddd: ce(C.weekdaysShort, this.$W, X, 3),
                dddd: X[this.$W],
                H: String(q),
                HH: S.s(q, 2, "0"),
                h: Le(1),
                hh: Le(2),
                a: He(q, O, !0),
                A: He(q, O, !1),
                m: String(O),
                mm: S.s(O, 2, "0"),
                s: String(this.$s),
                ss: S.s(this.$s, 2, "0"),
                SSS: S.s(this.$ms, 3, "0"),
                Z: $,
              };
            return D.replace(h, function (Z, me) {
              return me || Ae[Z] || $.replace(":", "");
            });
          }),
          (E.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (E.diff = function (w, I, C) {
            var D,
              $ = S.p(I),
              q = P(w),
              O = (q.utcOffset() - this.utcOffset()) * e,
              H = this - q,
              X = S.m(this, q);
            return (
              (X =
                ((D = {}),
                (D[m] = X / 12),
                (D[p] = X),
                (D[u] = X / 3),
                (D[c] = (H - O) / 6048e5),
                (D[s] = (H - O) / 864e5),
                (D[o] = H / i),
                (D[r] = H / e),
                (D[t] = H / a),
                D)[$] || H),
              C ? X : S.a(X)
            );
          }),
          (E.daysInMonth = function () {
            return this.endOf(p).$D;
          }),
          (E.$locale = function () {
            return k[this.$L];
          }),
          (E.locale = function (w, I) {
            if (!w) return this.$L;
            var C = this.clone(),
              D = _(w, I, !0);
            return D && (C.$L = D), C;
          }),
          (E.clone = function () {
            return S.w(this.$d, this);
          }),
          (E.toDate = function () {
            return new Date(this.valueOf());
          }),
          (E.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (E.toISOString = function () {
            return this.$d.toISOString();
          }),
          (E.toString = function () {
            return this.$d.toUTCString();
          }),
          A
        );
      })(),
      B = ee.prototype;
    return (
      (P.prototype = B),
      [
        ["$ms", n],
        ["$s", t],
        ["$m", r],
        ["$H", o],
        ["$W", s],
        ["$M", p],
        ["$y", m],
        ["$D", f],
      ].forEach(function (A) {
        B[A[1]] = function (E) {
          return this.$g(E, A[0], A[1]);
        };
      }),
      (P.extend = function (A, E) {
        return A.$i || (A(E, ee, P), (A.$i = !0)), P;
      }),
      (P.locale = _),
      (P.isDayjs = T),
      (P.unix = function (A) {
        return P(1e3 * A);
      }),
      (P.en = k[b]),
      (P.Ls = k),
      (P.p = {}),
      P
    );
  });
});
var Vr = y((Mv, Xr) => {
  "use strict";
  var { Duplex: Od } = require("stream");
  function Gr(a) {
    a.emit("close");
  }
  function Md() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function Ur(a) {
    this.removeListener("error", Ur),
      this.destroy(),
      this.listenerCount("error") === 0 && this.emit("error", a);
  }
  function Nd(a, e) {
    let i = !0,
      n = new Od({
        ...e,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1,
      });
    return (
      a.on("message", function (r, o) {
        let s = !o && n._readableState.objectMode ? r.toString() : r;
        n.push(s) || a.pause();
      }),
      a.once("error", function (r) {
        n.destroyed || ((i = !1), n.destroy(r));
      }),
      a.once("close", function () {
        n.destroyed || n.push(null);
      }),
      (n._destroy = function (t, r) {
        if (a.readyState === a.CLOSED) {
          r(t), process.nextTick(Gr, n);
          return;
        }
        let o = !1;
        a.once("error", function (c) {
          (o = !0), r(c);
        }),
          a.once("close", function () {
            o || r(t), process.nextTick(Gr, n);
          }),
          i && a.terminate();
      }),
      (n._final = function (t) {
        if (a.readyState === a.CONNECTING) {
          a.once("open", function () {
            n._final(t);
          });
          return;
        }
        a._socket !== null &&
          (a._socket._writableState.finished
            ? (t(), n._readableState.endEmitted && n.destroy())
            : (a._socket.once("finish", function () {
                t();
              }),
              a.close()));
      }),
      (n._read = function () {
        a.isPaused && a.resume();
      }),
      (n._write = function (t, r, o) {
        if (a.readyState === a.CONNECTING) {
          a.once("open", function () {
            n._write(t, r, o);
          });
          return;
        }
        a.send(t, o);
      }),
      n.on("end", Md),
      n.on("error", Ur),
      n
    );
  }
  Xr.exports = Nd;
});
var he = y((Nv, Jr) => {
  "use strict";
  Jr.exports = {
    BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {},
  };
});
var Ge = y((Gv, _i) => {
  "use strict";
  var { EMPTY_BUFFER: Gd } = he(),
    za = Buffer[Symbol.species];
  function Ud(a, e) {
    if (a.length === 0) return Gd;
    if (a.length === 1) return a[0];
    let i = Buffer.allocUnsafe(e),
      n = 0;
    for (let t = 0; t < a.length; t++) {
      let r = a[t];
      i.set(r, n), (n += r.length);
    }
    return n < e ? new za(i.buffer, i.byteOffset, n) : i;
  }
  function Zr(a, e, i, n, t) {
    for (let r = 0; r < t; r++) i[n + r] = a[r] ^ e[r & 3];
  }
  function Qr(a, e) {
    for (let i = 0; i < a.length; i++) a[i] ^= e[i & 3];
  }
  function Xd(a) {
    return a.length === a.buffer.byteLength
      ? a.buffer
      : a.buffer.slice(a.byteOffset, a.byteOffset + a.length);
  }
  function La(a) {
    if (((La.readOnly = !0), Buffer.isBuffer(a))) return a;
    let e;
    return (
      a instanceof ArrayBuffer
        ? (e = new za(a))
        : ArrayBuffer.isView(a)
        ? (e = new za(a.buffer, a.byteOffset, a.byteLength))
        : ((e = Buffer.from(a)), (La.readOnly = !1)),
      e
    );
  }
  _i.exports = {
    concat: Ud,
    mask: Zr,
    toArrayBuffer: Xd,
    toBuffer: La,
    unmask: Qr,
  };
  if (!process.env.WS_NO_BUFFER_UTIL)
    try {
      let a = require("bufferutil");
      (_i.exports.mask = function (e, i, n, t, r) {
        r < 48 ? Zr(e, i, n, t, r) : a.mask(e, i, n, t, r);
      }),
        (_i.exports.unmask = function (e, i) {
          e.length < 32 ? Qr(e, i) : a.unmask(e, i);
        });
    } catch {}
});
var Yr = y((Uv, Wr) => {
  "use strict";
  var Kr = Symbol("kDone"),
    Ha = Symbol("kRun"),
    Oa = class {
      constructor(e) {
        (this[Kr] = () => {
          this.pending--, this[Ha]();
        }),
          (this.concurrency = e || 1 / 0),
          (this.jobs = []),
          (this.pending = 0);
      }
      add(e) {
        this.jobs.push(e), this[Ha]();
      }
      [Ha]() {
        if (this.pending !== this.concurrency && this.jobs.length) {
          let e = this.jobs.shift();
          this.pending++, e(this[Kr]);
        }
      }
    };
  Wr.exports = Oa;
});
var Ve = y((Xv, no) => {
  "use strict";
  var Ue = require("zlib"),
    eo = Ge(),
    Vd = Yr(),
    { kStatusCode: io } = he(),
    Jd = Buffer[Symbol.species],
    Zd = Buffer.from([0, 0, 255, 255]),
    Ci = Symbol("permessage-deflate"),
    pe = Symbol("total-length"),
    Xe = Symbol("callback"),
    xe = Symbol("buffers"),
    ki = Symbol("error"),
    wi,
    Ma = class {
      constructor(e, i, n) {
        if (
          ((this._maxPayload = n | 0),
          (this._options = e || {}),
          (this._threshold =
            this._options.threshold !== void 0
              ? this._options.threshold
              : 1024),
          (this._isServer = !!i),
          (this._deflate = null),
          (this._inflate = null),
          (this.params = null),
          !wi)
        ) {
          let t =
            this._options.concurrencyLimit !== void 0
              ? this._options.concurrencyLimit
              : 10;
          wi = new Vd(t);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        let e = {};
        return (
          this._options.serverNoContextTakeover &&
            (e.server_no_context_takeover = !0),
          this._options.clientNoContextTakeover &&
            (e.client_no_context_takeover = !0),
          this._options.serverMaxWindowBits &&
            (e.server_max_window_bits = this._options.serverMaxWindowBits),
          this._options.clientMaxWindowBits
            ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
            : this._options.clientMaxWindowBits == null &&
              (e.client_max_window_bits = !0),
          e
        );
      }
      accept(e) {
        return (
          (e = this.normalizeParams(e)),
          (this.params = this._isServer
            ? this.acceptAsServer(e)
            : this.acceptAsClient(e)),
          this.params
        );
      }
      cleanup() {
        if (
          (this._inflate && (this._inflate.close(), (this._inflate = null)),
          this._deflate)
        ) {
          let e = this._deflate[Xe];
          this._deflate.close(),
            (this._deflate = null),
            e &&
              e(
                new Error(
                  "The deflate stream was closed while data was being processed"
                )
              );
        }
      }
      acceptAsServer(e) {
        let i = this._options,
          n = e.find(
            (t) =>
              !(
                (i.serverNoContextTakeover === !1 &&
                  t.server_no_context_takeover) ||
                (t.server_max_window_bits &&
                  (i.serverMaxWindowBits === !1 ||
                    (typeof i.serverMaxWindowBits == "number" &&
                      i.serverMaxWindowBits > t.server_max_window_bits))) ||
                (typeof i.clientMaxWindowBits == "number" &&
                  !t.client_max_window_bits)
              )
          );
        if (!n) throw new Error("None of the extension offers can be accepted");
        return (
          i.serverNoContextTakeover && (n.server_no_context_takeover = !0),
          i.clientNoContextTakeover && (n.client_no_context_takeover = !0),
          typeof i.serverMaxWindowBits == "number" &&
            (n.server_max_window_bits = i.serverMaxWindowBits),
          typeof i.clientMaxWindowBits == "number"
            ? (n.client_max_window_bits = i.clientMaxWindowBits)
            : (n.client_max_window_bits === !0 ||
                i.clientMaxWindowBits === !1) &&
              delete n.client_max_window_bits,
          n
        );
      }
      acceptAsClient(e) {
        let i = e[0];
        if (
          this._options.clientNoContextTakeover === !1 &&
          i.client_no_context_takeover
        )
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (!i.client_max_window_bits)
          typeof this._options.clientMaxWindowBits == "number" &&
            (i.client_max_window_bits = this._options.clientMaxWindowBits);
        else if (
          this._options.clientMaxWindowBits === !1 ||
          (typeof this._options.clientMaxWindowBits == "number" &&
            i.client_max_window_bits > this._options.clientMaxWindowBits)
        )
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        return i;
      }
      normalizeParams(e) {
        return (
          e.forEach((i) => {
            Object.keys(i).forEach((n) => {
              let t = i[n];
              if (t.length > 1)
                throw new Error(
                  `Parameter "${n}" must have only a single value`
                );
              if (((t = t[0]), n === "client_max_window_bits")) {
                if (t !== !0) {
                  let r = +t;
                  if (!Number.isInteger(r) || r < 8 || r > 15)
                    throw new TypeError(
                      `Invalid value for parameter "${n}": ${t}`
                    );
                  t = r;
                } else if (!this._isServer)
                  throw new TypeError(
                    `Invalid value for parameter "${n}": ${t}`
                  );
              } else if (n === "server_max_window_bits") {
                let r = +t;
                if (!Number.isInteger(r) || r < 8 || r > 15)
                  throw new TypeError(
                    `Invalid value for parameter "${n}": ${t}`
                  );
                t = r;
              } else if (
                n === "client_no_context_takeover" ||
                n === "server_no_context_takeover"
              ) {
                if (t !== !0)
                  throw new TypeError(
                    `Invalid value for parameter "${n}": ${t}`
                  );
              } else throw new Error(`Unknown parameter "${n}"`);
              i[n] = t;
            });
          }),
          e
        );
      }
      decompress(e, i, n) {
        wi.add((t) => {
          this._decompress(e, i, (r, o) => {
            t(), n(r, o);
          });
        });
      }
      compress(e, i, n) {
        wi.add((t) => {
          this._compress(e, i, (r, o) => {
            t(), n(r, o);
          });
        });
      }
      _decompress(e, i, n) {
        let t = this._isServer ? "client" : "server";
        if (!this._inflate) {
          let r = `${t}_max_window_bits`,
            o =
              typeof this.params[r] != "number"
                ? Ue.Z_DEFAULT_WINDOWBITS
                : this.params[r];
          (this._inflate = Ue.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits: o,
          })),
            (this._inflate[Ci] = this),
            (this._inflate[pe] = 0),
            (this._inflate[xe] = []),
            this._inflate.on("error", Kd),
            this._inflate.on("data", ao);
        }
        (this._inflate[Xe] = n),
          this._inflate.write(e),
          i && this._inflate.write(Zd),
          this._inflate.flush(() => {
            let r = this._inflate[ki];
            if (r) {
              this._inflate.close(), (this._inflate = null), n(r);
              return;
            }
            let o = eo.concat(this._inflate[xe], this._inflate[pe]);
            this._inflate._readableState.endEmitted
              ? (this._inflate.close(), (this._inflate = null))
              : ((this._inflate[pe] = 0),
                (this._inflate[xe] = []),
                i &&
                  this.params[`${t}_no_context_takeover`] &&
                  this._inflate.reset()),
              n(null, o);
          });
      }
      _compress(e, i, n) {
        let t = this._isServer ? "server" : "client";
        if (!this._deflate) {
          let r = `${t}_max_window_bits`,
            o =
              typeof this.params[r] != "number"
                ? Ue.Z_DEFAULT_WINDOWBITS
                : this.params[r];
          (this._deflate = Ue.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits: o,
          })),
            (this._deflate[pe] = 0),
            (this._deflate[xe] = []),
            this._deflate.on("data", Qd);
        }
        (this._deflate[Xe] = n),
          this._deflate.write(e),
          this._deflate.flush(Ue.Z_SYNC_FLUSH, () => {
            if (!this._deflate) return;
            let r = eo.concat(this._deflate[xe], this._deflate[pe]);
            i && (r = new Jd(r.buffer, r.byteOffset, r.length - 4)),
              (this._deflate[Xe] = null),
              (this._deflate[pe] = 0),
              (this._deflate[xe] = []),
              i &&
                this.params[`${t}_no_context_takeover`] &&
                this._deflate.reset(),
              n(null, r);
          });
      }
    };
  no.exports = Ma;
  function Qd(a) {
    this[xe].push(a), (this[pe] += a.length);
  }
  function ao(a) {
    if (
      ((this[pe] += a.length),
      this[Ci]._maxPayload < 1 || this[pe] <= this[Ci]._maxPayload)
    ) {
      this[xe].push(a);
      return;
    }
    (this[ki] = new RangeError("Max payload size exceeded")),
      (this[ki].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"),
      (this[ki][io] = 1009),
      this.removeListener("data", ao),
      this.reset();
  }
  function Kd(a) {
    (this[Ci]._inflate = null), (a[io] = 1007), this[Xe](a);
  }
});
var Je = y((Vv, Ei) => {
  "use strict";
  var { isUtf8: to } = require("buffer"),
    Wd = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 0,
    ];
  function Yd(a) {
    return (
      (a >= 1e3 && a <= 1014 && a !== 1004 && a !== 1005 && a !== 1006) ||
      (a >= 3e3 && a <= 4999)
    );
  }
  function Na(a) {
    let e = a.length,
      i = 0;
    for (; i < e; )
      if ((a[i] & 128) === 0) i++;
      else if ((a[i] & 224) === 192) {
        if (i + 1 === e || (a[i + 1] & 192) !== 128 || (a[i] & 254) === 192)
          return !1;
        i += 2;
      } else if ((a[i] & 240) === 224) {
        if (
          i + 2 >= e ||
          (a[i + 1] & 192) !== 128 ||
          (a[i + 2] & 192) !== 128 ||
          (a[i] === 224 && (a[i + 1] & 224) === 128) ||
          (a[i] === 237 && (a[i + 1] & 224) === 160)
        )
          return !1;
        i += 3;
      } else if ((a[i] & 248) === 240) {
        if (
          i + 3 >= e ||
          (a[i + 1] & 192) !== 128 ||
          (a[i + 2] & 192) !== 128 ||
          (a[i + 3] & 192) !== 128 ||
          (a[i] === 240 && (a[i + 1] & 240) === 128) ||
          (a[i] === 244 && a[i + 1] > 143) ||
          a[i] > 244
        )
          return !1;
        i += 4;
      } else return !1;
    return !0;
  }
  Ei.exports = { isValidStatusCode: Yd, isValidUTF8: Na, tokenChars: Wd };
  if (to)
    Ei.exports.isValidUTF8 = function (a) {
      return a.length < 24 ? Na(a) : to(a);
    };
  else if (!process.env.WS_NO_UTF_8_VALIDATE)
    try {
      let a = require("utf-8-validate");
      Ei.exports.isValidUTF8 = function (e) {
        return e.length < 32 ? Na(e) : a(e);
      };
    } catch {}
});
var Va = y((Jv, uo) => {
  "use strict";
  var { Writable: em } = require("stream"),
    ro = Ve(),
    {
      BINARY_TYPES: im,
      EMPTY_BUFFER: oo,
      kStatusCode: am,
      kWebSocket: nm,
    } = he(),
    { concat: Ga, toArrayBuffer: tm, unmask: rm } = Ge(),
    { isValidStatusCode: om, isValidUTF8: so } = Je(),
    Ai = Buffer[Symbol.species],
    Ze = 0,
    co = 1,
    po = 2,
    lo = 3,
    Ua = 4,
    sm = 5,
    Xa = class extends em {
      constructor(e = {}) {
        super(),
          (this._binaryType = e.binaryType || im[0]),
          (this._extensions = e.extensions || {}),
          (this._isServer = !!e.isServer),
          (this._maxPayload = e.maxPayload | 0),
          (this._skipUTF8Validation = !!e.skipUTF8Validation),
          (this[nm] = void 0),
          (this._bufferedBytes = 0),
          (this._buffers = []),
          (this._compressed = !1),
          (this._payloadLength = 0),
          (this._mask = void 0),
          (this._fragmented = 0),
          (this._masked = !1),
          (this._fin = !1),
          (this._opcode = 0),
          (this._totalPayloadLength = 0),
          (this._messageLength = 0),
          (this._fragments = []),
          (this._state = Ze),
          (this._loop = !1);
      }
      _write(e, i, n) {
        if (this._opcode === 8 && this._state == Ze) return n();
        (this._bufferedBytes += e.length),
          this._buffers.push(e),
          this.startLoop(n);
      }
      consume(e) {
        if (((this._bufferedBytes -= e), e === this._buffers[0].length))
          return this._buffers.shift();
        if (e < this._buffers[0].length) {
          let n = this._buffers[0];
          return (
            (this._buffers[0] = new Ai(
              n.buffer,
              n.byteOffset + e,
              n.length - e
            )),
            new Ai(n.buffer, n.byteOffset, e)
          );
        }
        let i = Buffer.allocUnsafe(e);
        do {
          let n = this._buffers[0],
            t = i.length - e;
          e >= n.length
            ? i.set(this._buffers.shift(), t)
            : (i.set(new Uint8Array(n.buffer, n.byteOffset, e), t),
              (this._buffers[0] = new Ai(
                n.buffer,
                n.byteOffset + e,
                n.length - e
              ))),
            (e -= n.length);
        } while (e > 0);
        return i;
      }
      startLoop(e) {
        let i;
        this._loop = !0;
        do
          switch (this._state) {
            case Ze:
              i = this.getInfo();
              break;
            case co:
              i = this.getPayloadLength16();
              break;
            case po:
              i = this.getPayloadLength64();
              break;
            case lo:
              this.getMask();
              break;
            case Ua:
              i = this.getData(e);
              break;
            default:
              this._loop = !1;
              return;
          }
        while (this._loop);
        e(i);
      }
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        let e = this.consume(2);
        if ((e[0] & 48) !== 0)
          return (
            (this._loop = !1),
            N(
              RangeError,
              "RSV2 and RSV3 must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_RSV_2_3"
            )
          );
        let i = (e[0] & 64) === 64;
        if (i && !this._extensions[ro.extensionName])
          return (
            (this._loop = !1),
            N(
              RangeError,
              "RSV1 must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            )
          );
        if (
          ((this._fin = (e[0] & 128) === 128),
          (this._opcode = e[0] & 15),
          (this._payloadLength = e[1] & 127),
          this._opcode === 0)
        ) {
          if (i)
            return (
              (this._loop = !1),
              N(
                RangeError,
                "RSV1 must be clear",
                !0,
                1002,
                "WS_ERR_UNEXPECTED_RSV_1"
              )
            );
          if (!this._fragmented)
            return (
              (this._loop = !1),
              N(
                RangeError,
                "invalid opcode 0",
                !0,
                1002,
                "WS_ERR_INVALID_OPCODE"
              )
            );
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented)
            return (
              (this._loop = !1),
              N(
                RangeError,
                `invalid opcode ${this._opcode}`,
                !0,
                1002,
                "WS_ERR_INVALID_OPCODE"
              )
            );
          this._compressed = i;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin)
            return (
              (this._loop = !1),
              N(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN")
            );
          if (i)
            return (
              (this._loop = !1),
              N(
                RangeError,
                "RSV1 must be clear",
                !0,
                1002,
                "WS_ERR_UNEXPECTED_RSV_1"
              )
            );
          if (
            this._payloadLength > 125 ||
            (this._opcode === 8 && this._payloadLength === 1)
          )
            return (
              (this._loop = !1),
              N(
                RangeError,
                `invalid payload length ${this._payloadLength}`,
                !0,
                1002,
                "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
              )
            );
        } else
          return (
            (this._loop = !1),
            N(
              RangeError,
              `invalid opcode ${this._opcode}`,
              !0,
              1002,
              "WS_ERR_INVALID_OPCODE"
            )
          );
        if (
          (!this._fin && !this._fragmented && (this._fragmented = this._opcode),
          (this._masked = (e[1] & 128) === 128),
          this._isServer)
        ) {
          if (!this._masked)
            return (
              (this._loop = !1),
              N(
                RangeError,
                "MASK must be set",
                !0,
                1002,
                "WS_ERR_EXPECTED_MASK"
              )
            );
        } else if (this._masked)
          return (
            (this._loop = !1),
            N(
              RangeError,
              "MASK must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_MASK"
            )
          );
        if (this._payloadLength === 126) this._state = co;
        else if (this._payloadLength === 127) this._state = po;
        else return this.haveLength();
      }
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = !1;
          return;
        }
        return (
          (this._payloadLength = this.consume(2).readUInt16BE(0)),
          this.haveLength()
        );
      }
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = !1;
          return;
        }
        let e = this.consume(8),
          i = e.readUInt32BE(0);
        return i > Math.pow(2, 53 - 32) - 1
          ? ((this._loop = !1),
            N(
              RangeError,
              "Unsupported WebSocket frame: payload length > 2^53 - 1",
              !1,
              1009,
              "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
            ))
          : ((this._payloadLength = i * Math.pow(2, 32) + e.readUInt32BE(4)),
            this.haveLength());
      }
      haveLength() {
        if (
          this._payloadLength &&
          this._opcode < 8 &&
          ((this._totalPayloadLength += this._payloadLength),
          this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
        )
          return (
            (this._loop = !1),
            N(
              RangeError,
              "Max payload size exceeded",
              !1,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            )
          );
        this._masked ? (this._state = lo) : (this._state = Ua);
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = !1;
          return;
        }
        (this._mask = this.consume(4)), (this._state = Ua);
      }
      getData(e) {
        let i = oo;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = !1;
            return;
          }
          (i = this.consume(this._payloadLength)),
            this._masked &&
              (this._mask[0] |
                this._mask[1] |
                this._mask[2] |
                this._mask[3]) !==
                0 &&
              rm(i, this._mask);
        }
        if (this._opcode > 7) return this.controlMessage(i);
        if (this._compressed) {
          (this._state = sm), this.decompress(i, e);
          return;
        }
        return (
          i.length &&
            ((this._messageLength = this._totalPayloadLength),
            this._fragments.push(i)),
          this.dataMessage()
        );
      }
      decompress(e, i) {
        this._extensions[ro.extensionName].decompress(e, this._fin, (t, r) => {
          if (t) return i(t);
          if (r.length) {
            if (
              ((this._messageLength += r.length),
              this._messageLength > this._maxPayload && this._maxPayload > 0)
            )
              return i(
                N(
                  RangeError,
                  "Max payload size exceeded",
                  !1,
                  1009,
                  "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
                )
              );
            this._fragments.push(r);
          }
          let o = this.dataMessage();
          if (o) return i(o);
          this.startLoop(i);
        });
      }
      dataMessage() {
        if (this._fin) {
          let e = this._messageLength,
            i = this._fragments;
          if (
            ((this._totalPayloadLength = 0),
            (this._messageLength = 0),
            (this._fragmented = 0),
            (this._fragments = []),
            this._opcode === 2)
          ) {
            let n;
            this._binaryType === "nodebuffer"
              ? (n = Ga(i, e))
              : this._binaryType === "arraybuffer"
              ? (n = tm(Ga(i, e)))
              : (n = i),
              this.emit("message", n, !0);
          } else {
            let n = Ga(i, e);
            if (!this._skipUTF8Validation && !so(n))
              return (
                (this._loop = !1),
                N(
                  Error,
                  "invalid UTF-8 sequence",
                  !0,
                  1007,
                  "WS_ERR_INVALID_UTF8"
                )
              );
            this.emit("message", n, !1);
          }
        }
        this._state = Ze;
      }
      controlMessage(e) {
        if (this._opcode === 8)
          if (((this._loop = !1), e.length === 0))
            this.emit("conclude", 1005, oo), this.end();
          else {
            let i = e.readUInt16BE(0);
            if (!om(i))
              return N(
                RangeError,
                `invalid status code ${i}`,
                !0,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
            let n = new Ai(e.buffer, e.byteOffset + 2, e.length - 2);
            if (!this._skipUTF8Validation && !so(n))
              return N(
                Error,
                "invalid UTF-8 sequence",
                !0,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            this.emit("conclude", i, n), this.end();
          }
        else this._opcode === 9 ? this.emit("ping", e) : this.emit("pong", e);
        this._state = Ze;
      }
    };
  uo.exports = Xa;
  function N(a, e, i, n, t) {
    let r = new a(i ? `Invalid WebSocket frame: ${e}` : e);
    return Error.captureStackTrace(r, N), (r.code = t), (r[am] = n), r;
  }
});
var Ja = y((Kv, ho) => {
  "use strict";
  var Zv = require("net"),
    Qv = require("tls"),
    { randomFillSync: cm } = require("crypto"),
    mo = Ve(),
    { EMPTY_BUFFER: pm } = he(),
    { isValidStatusCode: lm } = Je(),
    { mask: fo, toBuffer: Ie } = Ge(),
    ie = Symbol("kByteLength"),
    um = Buffer.alloc(4),
    te = class {
      constructor(e, i, n) {
        (this._extensions = i || {}),
          n && ((this._generateMask = n), (this._maskBuffer = Buffer.alloc(4))),
          (this._socket = e),
          (this._firstFragment = !0),
          (this._compress = !1),
          (this._bufferedBytes = 0),
          (this._deflating = !1),
          (this._queue = []);
      }
      static frame(e, i) {
        let n,
          t = !1,
          r = 2,
          o = !1;
        i.mask &&
          ((n = i.maskBuffer || um),
          i.generateMask ? i.generateMask(n) : cm(n, 0, 4),
          (o = (n[0] | n[1] | n[2] | n[3]) === 0),
          (r = 6));
        let s;
        typeof e == "string"
          ? (!i.mask || o) && i[ie] !== void 0
            ? (s = i[ie])
            : ((e = Buffer.from(e)), (s = e.length))
          : ((s = e.length), (t = i.mask && i.readOnly && !o));
        let c = s;
        s >= 65536 ? ((r += 8), (c = 127)) : s > 125 && ((r += 2), (c = 126));
        let p = Buffer.allocUnsafe(t ? s + r : r);
        return (
          (p[0] = i.fin ? i.opcode | 128 : i.opcode),
          i.rsv1 && (p[0] |= 64),
          (p[1] = c),
          c === 126
            ? p.writeUInt16BE(s, 2)
            : c === 127 && ((p[2] = p[3] = 0), p.writeUIntBE(s, 4, 6)),
          i.mask
            ? ((p[1] |= 128),
              (p[r - 4] = n[0]),
              (p[r - 3] = n[1]),
              (p[r - 2] = n[2]),
              (p[r - 1] = n[3]),
              o
                ? [p, e]
                : t
                ? (fo(e, n, p, r, s), [p])
                : (fo(e, n, e, 0, s), [p, e]))
            : [p, e]
        );
      }
      close(e, i, n, t) {
        let r;
        if (e === void 0) r = pm;
        else {
          if (typeof e != "number" || !lm(e))
            throw new TypeError(
              "First argument must be a valid error code number"
            );
          if (i === void 0 || !i.length)
            (r = Buffer.allocUnsafe(2)), r.writeUInt16BE(e, 0);
          else {
            let s = Buffer.byteLength(i);
            if (s > 123)
              throw new RangeError(
                "The message must not be greater than 123 bytes"
              );
            (r = Buffer.allocUnsafe(2 + s)),
              r.writeUInt16BE(e, 0),
              typeof i == "string" ? r.write(i, 2) : r.set(i, 2);
          }
        }
        let o = {
          [ie]: r.length,
          fin: !0,
          generateMask: this._generateMask,
          mask: n,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: !1,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, r, !1, o, t])
          : this.sendFrame(te.frame(r, o), t);
      }
      ping(e, i, n) {
        let t, r;
        if (
          (typeof e == "string"
            ? ((t = Buffer.byteLength(e)), (r = !1))
            : ((e = Ie(e)), (t = e.length), (r = Ie.readOnly)),
          t > 125)
        )
          throw new RangeError(
            "The data size must not be greater than 125 bytes"
          );
        let o = {
          [ie]: t,
          fin: !0,
          generateMask: this._generateMask,
          mask: i,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly: r,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, e, !1, o, n])
          : this.sendFrame(te.frame(e, o), n);
      }
      pong(e, i, n) {
        let t, r;
        if (
          (typeof e == "string"
            ? ((t = Buffer.byteLength(e)), (r = !1))
            : ((e = Ie(e)), (t = e.length), (r = Ie.readOnly)),
          t > 125)
        )
          throw new RangeError(
            "The data size must not be greater than 125 bytes"
          );
        let o = {
          [ie]: t,
          fin: !0,
          generateMask: this._generateMask,
          mask: i,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly: r,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, e, !1, o, n])
          : this.sendFrame(te.frame(e, o), n);
      }
      send(e, i, n) {
        let t = this._extensions[mo.extensionName],
          r = i.binary ? 2 : 1,
          o = i.compress,
          s,
          c;
        if (
          (typeof e == "string"
            ? ((s = Buffer.byteLength(e)), (c = !1))
            : ((e = Ie(e)), (s = e.length), (c = Ie.readOnly)),
          this._firstFragment
            ? ((this._firstFragment = !1),
              o &&
                t &&
                t.params[
                  t._isServer
                    ? "server_no_context_takeover"
                    : "client_no_context_takeover"
                ] &&
                (o = s >= t._threshold),
              (this._compress = o))
            : ((o = !1), (r = 0)),
          i.fin && (this._firstFragment = !0),
          t)
        ) {
          let p = {
            [ie]: s,
            fin: i.fin,
            generateMask: this._generateMask,
            mask: i.mask,
            maskBuffer: this._maskBuffer,
            opcode: r,
            readOnly: c,
            rsv1: o,
          };
          this._deflating
            ? this.enqueue([this.dispatch, e, this._compress, p, n])
            : this.dispatch(e, this._compress, p, n);
        } else
          this.sendFrame(
            te.frame(e, {
              [ie]: s,
              fin: i.fin,
              generateMask: this._generateMask,
              mask: i.mask,
              maskBuffer: this._maskBuffer,
              opcode: r,
              readOnly: c,
              rsv1: !1,
            }),
            n
          );
      }
      dispatch(e, i, n, t) {
        if (!i) {
          this.sendFrame(te.frame(e, n), t);
          return;
        }
        let r = this._extensions[mo.extensionName];
        (this._bufferedBytes += n[ie]),
          (this._deflating = !0),
          r.compress(e, n.fin, (o, s) => {
            if (this._socket.destroyed) {
              let c = new Error(
                "The socket was closed while data was being compressed"
              );
              typeof t == "function" && t(c);
              for (let p = 0; p < this._queue.length; p++) {
                let u = this._queue[p],
                  m = u[u.length - 1];
                typeof m == "function" && m(c);
              }
              return;
            }
            (this._bufferedBytes -= n[ie]),
              (this._deflating = !1),
              (n.readOnly = !1),
              this.sendFrame(te.frame(s, n), t),
              this.dequeue();
          });
      }
      dequeue() {
        for (; !this._deflating && this._queue.length; ) {
          let e = this._queue.shift();
          (this._bufferedBytes -= e[3][ie]),
            Reflect.apply(e[0], this, e.slice(1));
        }
      }
      enqueue(e) {
        (this._bufferedBytes += e[3][ie]), this._queue.push(e);
      }
      sendFrame(e, i) {
        e.length === 2
          ? (this._socket.cork(),
            this._socket.write(e[0]),
            this._socket.write(e[1], i),
            this._socket.uncork())
          : this._socket.write(e[0], i);
      }
    };
  ho.exports = te;
});
var Co = y((Wv, ko) => {
  "use strict";
  var { kForOnEventAttribute: Qe, kListener: Za } = he(),
    xo = Symbol("kCode"),
    go = Symbol("kData"),
    vo = Symbol("kError"),
    bo = Symbol("kMessage"),
    yo = Symbol("kReason"),
    $e = Symbol("kTarget"),
    _o = Symbol("kType"),
    wo = Symbol("kWasClean"),
    le = class {
      constructor(e) {
        (this[$e] = null), (this[_o] = e);
      }
      get target() {
        return this[$e];
      }
      get type() {
        return this[_o];
      }
    };
  Object.defineProperty(le.prototype, "target", { enumerable: !0 });
  Object.defineProperty(le.prototype, "type", { enumerable: !0 });
  var _e = class extends le {
    constructor(e, i = {}) {
      super(e),
        (this[xo] = i.code === void 0 ? 0 : i.code),
        (this[yo] = i.reason === void 0 ? "" : i.reason),
        (this[wo] = i.wasClean === void 0 ? !1 : i.wasClean);
    }
    get code() {
      return this[xo];
    }
    get reason() {
      return this[yo];
    }
    get wasClean() {
      return this[wo];
    }
  };
  Object.defineProperty(_e.prototype, "code", { enumerable: !0 });
  Object.defineProperty(_e.prototype, "reason", { enumerable: !0 });
  Object.defineProperty(_e.prototype, "wasClean", { enumerable: !0 });
  var je = class extends le {
    constructor(e, i = {}) {
      super(e),
        (this[vo] = i.error === void 0 ? null : i.error),
        (this[bo] = i.message === void 0 ? "" : i.message);
    }
    get error() {
      return this[vo];
    }
    get message() {
      return this[bo];
    }
  };
  Object.defineProperty(je.prototype, "error", { enumerable: !0 });
  Object.defineProperty(je.prototype, "message", { enumerable: !0 });
  var Ke = class extends le {
    constructor(e, i = {}) {
      super(e), (this[go] = i.data === void 0 ? null : i.data);
    }
    get data() {
      return this[go];
    }
  };
  Object.defineProperty(Ke.prototype, "data", { enumerable: !0 });
  var dm = {
    addEventListener(a, e, i = {}) {
      for (let t of this.listeners(a))
        if (!i[Qe] && t[Za] === e && !t[Qe]) return;
      let n;
      if (a === "message")
        n = function (r, o) {
          let s = new Ke("message", { data: o ? r : r.toString() });
          (s[$e] = this), Di(e, this, s);
        };
      else if (a === "close")
        n = function (r, o) {
          let s = new _e("close", {
            code: r,
            reason: o.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent,
          });
          (s[$e] = this), Di(e, this, s);
        };
      else if (a === "error")
        n = function (r) {
          let o = new je("error", { error: r, message: r.message });
          (o[$e] = this), Di(e, this, o);
        };
      else if (a === "open")
        n = function () {
          let r = new le("open");
          (r[$e] = this), Di(e, this, r);
        };
      else return;
      (n[Qe] = !!i[Qe]), (n[Za] = e), i.once ? this.once(a, n) : this.on(a, n);
    },
    removeEventListener(a, e) {
      for (let i of this.listeners(a))
        if (i[Za] === e && !i[Qe]) {
          this.removeListener(a, i);
          break;
        }
    },
  };
  ko.exports = {
    CloseEvent: _e,
    ErrorEvent: je,
    Event: le,
    EventTarget: dm,
    MessageEvent: Ke,
  };
  function Di(a, e, i) {
    typeof a == "object" && a.handleEvent
      ? a.handleEvent.call(a, i)
      : a.call(e, i);
  }
});
var Qa = y((Yv, Eo) => {
  "use strict";
  var { tokenChars: We } = Je();
  function re(a, e, i) {
    a[e] === void 0 ? (a[e] = [i]) : a[e].push(i);
  }
  function mm(a) {
    let e = Object.create(null),
      i = Object.create(null),
      n = !1,
      t = !1,
      r = !1,
      o,
      s,
      c = -1,
      p = -1,
      u = -1,
      m = 0;
    for (; m < a.length; m++)
      if (((p = a.charCodeAt(m)), o === void 0))
        if (u === -1 && We[p] === 1) c === -1 && (c = m);
        else if (m !== 0 && (p === 32 || p === 9))
          u === -1 && c !== -1 && (u = m);
        else if (p === 59 || p === 44) {
          if (c === -1)
            throw new SyntaxError(`Unexpected character at index ${m}`);
          u === -1 && (u = m);
          let l = a.slice(c, u);
          p === 44 ? (re(e, l, i), (i = Object.create(null))) : (o = l),
            (c = u = -1);
        } else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (s === void 0)
        if (u === -1 && We[p] === 1) c === -1 && (c = m);
        else if (p === 32 || p === 9) u === -1 && c !== -1 && (u = m);
        else if (p === 59 || p === 44) {
          if (c === -1)
            throw new SyntaxError(`Unexpected character at index ${m}`);
          u === -1 && (u = m),
            re(i, a.slice(c, u), !0),
            p === 44 && (re(e, o, i), (i = Object.create(null)), (o = void 0)),
            (c = u = -1);
        } else if (p === 61 && c !== -1 && u === -1)
          (s = a.slice(c, m)), (c = u = -1);
        else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (t) {
        if (We[p] !== 1)
          throw new SyntaxError(`Unexpected character at index ${m}`);
        c === -1 ? (c = m) : n || (n = !0), (t = !1);
      } else if (r)
        if (We[p] === 1) c === -1 && (c = m);
        else if (p === 34 && c !== -1) (r = !1), (u = m);
        else if (p === 92) t = !0;
        else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (p === 34 && a.charCodeAt(m - 1) === 61) r = !0;
      else if (u === -1 && We[p] === 1) c === -1 && (c = m);
      else if (c !== -1 && (p === 32 || p === 9)) u === -1 && (u = m);
      else if (p === 59 || p === 44) {
        if (c === -1)
          throw new SyntaxError(`Unexpected character at index ${m}`);
        u === -1 && (u = m);
        let l = a.slice(c, u);
        n && ((l = l.replace(/\\/g, "")), (n = !1)),
          re(i, s, l),
          p === 44 && (re(e, o, i), (i = Object.create(null)), (o = void 0)),
          (s = void 0),
          (c = u = -1);
      } else throw new SyntaxError(`Unexpected character at index ${m}`);
    if (c === -1 || r || p === 32 || p === 9)
      throw new SyntaxError("Unexpected end of input");
    u === -1 && (u = m);
    let f = a.slice(c, u);
    return (
      o === void 0
        ? re(e, f, i)
        : (s === void 0
            ? re(i, f, !0)
            : n
            ? re(i, s, f.replace(/\\/g, ""))
            : re(i, s, f),
          re(e, o, i)),
      e
    );
  }
  function fm(a) {
    return Object.keys(a)
      .map((e) => {
        let i = a[e];
        return (
          Array.isArray(i) || (i = [i]),
          i
            .map((n) =>
              [e]
                .concat(
                  Object.keys(n).map((t) => {
                    let r = n[t];
                    return (
                      Array.isArray(r) || (r = [r]),
                      r.map((o) => (o === !0 ? t : `${t}=${o}`)).join("; ")
                    );
                  })
                )
                .join("; ")
            )
            .join(", ")
        );
      })
      .join(", ");
  }
  Eo.exports = { format: fm, parse: mm };
});
var an = y((ib, Bo) => {
  "use strict";
  var hm = require("events"),
    xm = require("https"),
    gm = require("http"),
    Po = require("net"),
    vm = require("tls"),
    { randomBytes: bm, createHash: ym } = require("crypto"),
    { Readable: eb } = require("stream"),
    { URL: Ka } = require("url"),
    ge = Ve(),
    _m = Va(),
    wm = Ja(),
    {
      BINARY_TYPES: Ao,
      EMPTY_BUFFER: Pi,
      GUID: km,
      kForOnEventAttribute: Wa,
      kListener: Cm,
      kStatusCode: Em,
      kWebSocket: V,
      NOOP: So,
    } = he(),
    {
      EventTarget: { addEventListener: Am, removeEventListener: Dm },
    } = Co(),
    { format: Pm, parse: Sm } = Qa(),
    { toBuffer: Tm } = Ge(),
    Im = 30 * 1e3,
    To = Symbol("kAborted"),
    Ya = [8, 13],
    ue = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    $m = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/,
    j = class extends hm {
      constructor(e, i, n) {
        super(),
          (this._binaryType = Ao[0]),
          (this._closeCode = 1006),
          (this._closeFrameReceived = !1),
          (this._closeFrameSent = !1),
          (this._closeMessage = Pi),
          (this._closeTimer = null),
          (this._extensions = {}),
          (this._paused = !1),
          (this._protocol = ""),
          (this._readyState = j.CONNECTING),
          (this._receiver = null),
          (this._sender = null),
          (this._socket = null),
          e !== null
            ? ((this._bufferedAmount = 0),
              (this._isServer = !1),
              (this._redirects = 0),
              i === void 0
                ? (i = [])
                : Array.isArray(i) ||
                  (typeof i == "object" && i !== null
                    ? ((n = i), (i = []))
                    : (i = [i])),
              Io(this, e, i, n))
            : (this._isServer = !0);
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e) {
        !Ao.includes(e) ||
          ((this._binaryType = e),
          this._receiver && (this._receiver._binaryType = e));
      }
      get bufferedAmount() {
        return this._socket
          ? this._socket._writableState.length + this._sender._bufferedBytes
          : this._bufferedAmount;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(e, i, n) {
        let t = new _m({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: n.maxPayload,
          skipUTF8Validation: n.skipUTF8Validation,
        });
        (this._sender = new wm(e, this._extensions, n.generateMask)),
          (this._receiver = t),
          (this._socket = e),
          (t[V] = this),
          (e[V] = this),
          t.on("conclude", Fm),
          t.on("drain", Bm),
          t.on("error", qm),
          t.on("message", zm),
          t.on("ping", Lm),
          t.on("pong", Hm),
          e.setTimeout(0),
          e.setNoDelay(),
          i.length > 0 && e.unshift(i),
          e.on("close", jo),
          e.on("data", Ti),
          e.on("end", Ro),
          e.on("error", Fo),
          (this._readyState = j.OPEN),
          this.emit("open");
      }
      emitClose() {
        if (!this._socket) {
          (this._readyState = j.CLOSED),
            this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        this._extensions[ge.extensionName] &&
          this._extensions[ge.extensionName].cleanup(),
          this._receiver.removeAllListeners(),
          (this._readyState = j.CLOSED),
          this.emit("close", this._closeCode, this._closeMessage);
      }
      close(e, i) {
        if (this.readyState !== j.CLOSED) {
          if (this.readyState === j.CONNECTING) {
            let n =
              "WebSocket was closed before the connection was established";
            Q(this, this._req, n);
            return;
          }
          if (this.readyState === j.CLOSING) {
            this._closeFrameSent &&
              (this._closeFrameReceived ||
                this._receiver._writableState.errorEmitted) &&
              this._socket.end();
            return;
          }
          (this._readyState = j.CLOSING),
            this._sender.close(e, i, !this._isServer, (n) => {
              n ||
                ((this._closeFrameSent = !0),
                (this._closeFrameReceived ||
                  this._receiver._writableState.errorEmitted) &&
                  this._socket.end());
            }),
            (this._closeTimer = setTimeout(
              this._socket.destroy.bind(this._socket),
              Im
            ));
        }
      }
      pause() {
        this.readyState === j.CONNECTING ||
          this.readyState === j.CLOSED ||
          ((this._paused = !0), this._socket.pause());
      }
      ping(e, i, n) {
        if (this.readyState === j.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function"
            ? ((n = e), (e = i = void 0))
            : typeof i == "function" && ((n = i), (i = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== j.OPEN)
        ) {
          en(this, e, n);
          return;
        }
        i === void 0 && (i = !this._isServer), this._sender.ping(e || Pi, i, n);
      }
      pong(e, i, n) {
        if (this.readyState === j.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function"
            ? ((n = e), (e = i = void 0))
            : typeof i == "function" && ((n = i), (i = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== j.OPEN)
        ) {
          en(this, e, n);
          return;
        }
        i === void 0 && (i = !this._isServer), this._sender.pong(e || Pi, i, n);
      }
      resume() {
        this.readyState === j.CONNECTING ||
          this.readyState === j.CLOSED ||
          ((this._paused = !1),
          this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(e, i, n) {
        if (this.readyState === j.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof i == "function" && ((n = i), (i = {})),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== j.OPEN)
        ) {
          en(this, e, n);
          return;
        }
        let t = {
          binary: typeof e != "string",
          mask: !this._isServer,
          compress: !0,
          fin: !0,
          ...i,
        };
        this._extensions[ge.extensionName] || (t.compress = !1),
          this._sender.send(e || Pi, t, n);
      }
      terminate() {
        if (this.readyState !== j.CLOSED) {
          if (this.readyState === j.CONNECTING) {
            let e =
              "WebSocket was closed before the connection was established";
            Q(this, this._req, e);
            return;
          }
          this._socket &&
            ((this._readyState = j.CLOSING), this._socket.destroy());
        }
      }
    };
  Object.defineProperty(j, "CONNECTING", {
    enumerable: !0,
    value: ue.indexOf("CONNECTING"),
  });
  Object.defineProperty(j.prototype, "CONNECTING", {
    enumerable: !0,
    value: ue.indexOf("CONNECTING"),
  });
  Object.defineProperty(j, "OPEN", {
    enumerable: !0,
    value: ue.indexOf("OPEN"),
  });
  Object.defineProperty(j.prototype, "OPEN", {
    enumerable: !0,
    value: ue.indexOf("OPEN"),
  });
  Object.defineProperty(j, "CLOSING", {
    enumerable: !0,
    value: ue.indexOf("CLOSING"),
  });
  Object.defineProperty(j.prototype, "CLOSING", {
    enumerable: !0,
    value: ue.indexOf("CLOSING"),
  });
  Object.defineProperty(j, "CLOSED", {
    enumerable: !0,
    value: ue.indexOf("CLOSED"),
  });
  Object.defineProperty(j.prototype, "CLOSED", {
    enumerable: !0,
    value: ue.indexOf("CLOSED"),
  });
  [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url",
  ].forEach((a) => {
    Object.defineProperty(j.prototype, a, { enumerable: !0 });
  });
  ["open", "error", "close", "message"].forEach((a) => {
    Object.defineProperty(j.prototype, `on${a}`, {
      enumerable: !0,
      get() {
        for (let e of this.listeners(a)) if (e[Wa]) return e[Cm];
        return null;
      },
      set(e) {
        for (let i of this.listeners(a))
          if (i[Wa]) {
            this.removeListener(a, i);
            break;
          }
        typeof e == "function" && this.addEventListener(a, e, { [Wa]: !0 });
      },
    });
  });
  j.prototype.addEventListener = Am;
  j.prototype.removeEventListener = Dm;
  Bo.exports = j;
  function Io(a, e, i, n) {
    let t = {
      protocolVersion: Ya[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...n,
      createConnection: void 0,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0,
    };
    if (!Ya.includes(t.protocolVersion))
      throw new RangeError(
        `Unsupported protocol version: ${
          t.protocolVersion
        } (supported versions: ${Ya.join(", ")})`
      );
    let r;
    if (e instanceof Ka) (r = e), (a._url = e.href);
    else {
      try {
        r = new Ka(e);
      } catch {
        throw new SyntaxError(`Invalid URL: ${e}`);
      }
      a._url = e;
    }
    let o = r.protocol === "wss:",
      s = r.protocol === "ws+unix:",
      c;
    if (
      (r.protocol !== "ws:" && !o && !s
        ? (c = `The URL's protocol must be one of "ws:", "wss:", or "ws+unix:"`)
        : s && !r.pathname
        ? (c = "The URL's pathname is empty")
        : r.hash && (c = "The URL contains a fragment identifier"),
      c)
    ) {
      let h = new SyntaxError(c);
      if (a._redirects === 0) throw h;
      Si(a, h);
      return;
    }
    let p = o ? 443 : 80,
      u = bm(16).toString("base64"),
      m = o ? xm.request : gm.request,
      f = new Set(),
      l;
    if (
      ((t.createConnection = o ? Rm : jm),
      (t.defaultPort = t.defaultPort || p),
      (t.port = r.port || p),
      (t.host = r.hostname.startsWith("[")
        ? r.hostname.slice(1, -1)
        : r.hostname),
      (t.headers = {
        ...t.headers,
        "Sec-WebSocket-Version": t.protocolVersion,
        "Sec-WebSocket-Key": u,
        Connection: "Upgrade",
        Upgrade: "websocket",
      }),
      (t.path = r.pathname + r.search),
      (t.timeout = t.handshakeTimeout),
      t.perMessageDeflate &&
        ((l = new ge(
          t.perMessageDeflate !== !0 ? t.perMessageDeflate : {},
          !1,
          t.maxPayload
        )),
        (t.headers["Sec-WebSocket-Extensions"] = Pm({
          [ge.extensionName]: l.offer(),
        }))),
      i.length)
    ) {
      for (let h of i) {
        if (typeof h != "string" || !$m.test(h) || f.has(h))
          throw new SyntaxError(
            "An invalid or duplicated subprotocol was specified"
          );
        f.add(h);
      }
      t.headers["Sec-WebSocket-Protocol"] = i.join(",");
    }
    if (
      (t.origin &&
        (t.protocolVersion < 13
          ? (t.headers["Sec-WebSocket-Origin"] = t.origin)
          : (t.headers.Origin = t.origin)),
      (r.username || r.password) && (t.auth = `${r.username}:${r.password}`),
      s)
    ) {
      let h = t.path.split(":");
      (t.socketPath = h[0]), (t.path = h[1]);
    }
    let d;
    if (t.followRedirects) {
      if (a._redirects === 0) {
        (a._originalIpc = s),
          (a._originalSecure = o),
          (a._originalHostOrSocketPath = s ? t.socketPath : r.host);
        let h = n && n.headers;
        if (((n = { ...n, headers: {} }), h))
          for (let [x, v] of Object.entries(h)) n.headers[x.toLowerCase()] = v;
      } else if (a.listenerCount("redirect") === 0) {
        let h = s
          ? a._originalIpc
            ? t.socketPath === a._originalHostOrSocketPath
            : !1
          : a._originalIpc
          ? !1
          : r.host === a._originalHostOrSocketPath;
        (!h || (a._originalSecure && !o)) &&
          (delete t.headers.authorization,
          delete t.headers.cookie,
          h || delete t.headers.host,
          (t.auth = void 0));
      }
      t.auth &&
        !n.headers.authorization &&
        (n.headers.authorization =
          "Basic " + Buffer.from(t.auth).toString("base64")),
        (d = a._req = m(t)),
        a._redirects && a.emit("redirect", a.url, d);
    } else d = a._req = m(t);
    t.timeout &&
      d.on("timeout", () => {
        Q(a, d, "Opening handshake has timed out");
      }),
      d.on("error", (h) => {
        d === null || d[To] || ((d = a._req = null), Si(a, h));
      }),
      d.on("response", (h) => {
        let x = h.headers.location,
          v = h.statusCode;
        if (x && t.followRedirects && v >= 300 && v < 400) {
          if (++a._redirects > t.maxRedirects) {
            Q(a, d, "Maximum redirects exceeded");
            return;
          }
          d.abort();
          let g;
          try {
            g = new Ka(x, e);
          } catch {
            let k = new SyntaxError(`Invalid URL: ${x}`);
            Si(a, k);
            return;
          }
          Io(a, g, i, n);
        } else
          a.emit("unexpected-response", d, h) ||
            Q(a, d, `Unexpected server response: ${h.statusCode}`);
      }),
      d.on("upgrade", (h, x, v) => {
        if ((a.emit("upgrade", h), a.readyState !== j.CONNECTING)) return;
        if (
          ((d = a._req = null), h.headers.upgrade.toLowerCase() !== "websocket")
        ) {
          Q(a, x, "Invalid Upgrade header");
          return;
        }
        let g = ym("sha1")
          .update(u + km)
          .digest("base64");
        if (h.headers["sec-websocket-accept"] !== g) {
          Q(a, x, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        let b = h.headers["sec-websocket-protocol"],
          k;
        if (
          (b !== void 0
            ? f.size
              ? f.has(b) || (k = "Server sent an invalid subprotocol")
              : (k = "Server sent a subprotocol but none was requested")
            : f.size && (k = "Server sent no subprotocol"),
          k)
        ) {
          Q(a, x, k);
          return;
        }
        b && (a._protocol = b);
        let T = h.headers["sec-websocket-extensions"];
        if (T !== void 0) {
          if (!l) {
            Q(
              a,
              x,
              "Server sent a Sec-WebSocket-Extensions header but no extension was requested"
            );
            return;
          }
          let _;
          try {
            _ = Sm(T);
          } catch {
            Q(a, x, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          let P = Object.keys(_);
          if (P.length !== 1 || P[0] !== ge.extensionName) {
            Q(a, x, "Server indicated an extension that was not requested");
            return;
          }
          try {
            l.accept(_[ge.extensionName]);
          } catch {
            Q(a, x, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          a._extensions[ge.extensionName] = l;
        }
        a.setSocket(x, v, {
          generateMask: t.generateMask,
          maxPayload: t.maxPayload,
          skipUTF8Validation: t.skipUTF8Validation,
        });
      }),
      d.end();
  }
  function Si(a, e) {
    (a._readyState = j.CLOSING), a.emit("error", e), a.emitClose();
  }
  function jm(a) {
    return (a.path = a.socketPath), Po.connect(a);
  }
  function Rm(a) {
    return (
      (a.path = void 0),
      !a.servername &&
        a.servername !== "" &&
        (a.servername = Po.isIP(a.host) ? "" : a.host),
      vm.connect(a)
    );
  }
  function Q(a, e, i) {
    a._readyState = j.CLOSING;
    let n = new Error(i);
    Error.captureStackTrace(n, Q),
      e.setHeader
        ? ((e[To] = !0),
          e.abort(),
          e.socket && !e.socket.destroyed && e.socket.destroy(),
          process.nextTick(Si, a, n))
        : (e.destroy(n),
          e.once("error", a.emit.bind(a, "error")),
          e.once("close", a.emitClose.bind(a)));
  }
  function en(a, e, i) {
    if (e) {
      let n = Tm(e).length;
      a._socket ? (a._sender._bufferedBytes += n) : (a._bufferedAmount += n);
    }
    if (i) {
      let n = new Error(
        `WebSocket is not open: readyState ${a.readyState} (${
          ue[a.readyState]
        })`
      );
      process.nextTick(i, n);
    }
  }
  function Fm(a, e) {
    let i = this[V];
    (i._closeFrameReceived = !0),
      (i._closeMessage = e),
      (i._closeCode = a),
      i._socket[V] !== void 0 &&
        (i._socket.removeListener("data", Ti),
        process.nextTick($o, i._socket),
        a === 1005 ? i.close() : i.close(a, e));
  }
  function Bm() {
    let a = this[V];
    a.isPaused || a._socket.resume();
  }
  function qm(a) {
    let e = this[V];
    e._socket[V] !== void 0 &&
      (e._socket.removeListener("data", Ti),
      process.nextTick($o, e._socket),
      e.close(a[Em])),
      e.emit("error", a);
  }
  function Do() {
    this[V].emitClose();
  }
  function zm(a, e) {
    this[V].emit("message", a, e);
  }
  function Lm(a) {
    let e = this[V];
    e.pong(a, !e._isServer, So), e.emit("ping", a);
  }
  function Hm(a) {
    this[V].emit("pong", a);
  }
  function $o(a) {
    a.resume();
  }
  function jo() {
    let a = this[V];
    this.removeListener("close", jo),
      this.removeListener("data", Ti),
      this.removeListener("end", Ro),
      (a._readyState = j.CLOSING);
    let e;
    !this._readableState.endEmitted &&
      !a._closeFrameReceived &&
      !a._receiver._writableState.errorEmitted &&
      (e = a._socket.read()) !== null &&
      a._receiver.write(e),
      a._receiver.end(),
      (this[V] = void 0),
      clearTimeout(a._closeTimer),
      a._receiver._writableState.finished ||
      a._receiver._writableState.errorEmitted
        ? a.emitClose()
        : (a._receiver.on("error", Do), a._receiver.on("finish", Do));
  }
  function Ti(a) {
    this[V]._receiver.write(a) || this.pause();
  }
  function Ro() {
    let a = this[V];
    (a._readyState = j.CLOSING), a._receiver.end(), this.end();
  }
  function Fo() {
    let a = this[V];
    this.removeListener("error", Fo),
      this.on("error", So),
      a && ((a._readyState = j.CLOSING), this.destroy());
  }
});
var zo = y((ab, qo) => {
  "use strict";
  var { tokenChars: Om } = Je();
  function Mm(a) {
    let e = new Set(),
      i = -1,
      n = -1,
      t = 0;
    for (t; t < a.length; t++) {
      let o = a.charCodeAt(t);
      if (n === -1 && Om[o] === 1) i === -1 && (i = t);
      else if (t !== 0 && (o === 32 || o === 9))
        n === -1 && i !== -1 && (n = t);
      else if (o === 44) {
        if (i === -1)
          throw new SyntaxError(`Unexpected character at index ${t}`);
        n === -1 && (n = t);
        let s = a.slice(i, n);
        if (e.has(s))
          throw new SyntaxError(`The "${s}" subprotocol is duplicated`);
        e.add(s), (i = n = -1);
      } else throw new SyntaxError(`Unexpected character at index ${t}`);
    }
    if (i === -1 || n !== -1) throw new SyntaxError("Unexpected end of input");
    let r = a.slice(i, t);
    if (e.has(r)) throw new SyntaxError(`The "${r}" subprotocol is duplicated`);
    return e.add(r), e;
  }
  qo.exports = { parse: Mm };
});
var Uo = y((ob, Go) => {
  "use strict";
  var Nm = require("events"),
    Ii = require("http"),
    nb = require("https"),
    tb = require("net"),
    rb = require("tls"),
    { createHash: Gm } = require("crypto"),
    Lo = Qa(),
    we = Ve(),
    Um = zo(),
    Xm = an(),
    { GUID: Vm, kWebSocket: Jm } = he(),
    Zm = /^[+/0-9A-Za-z]{22}==$/,
    Ho = 0,
    Oo = 1,
    No = 2,
    nn = class extends Nm {
      constructor(e, i) {
        if (
          (super(),
          (e = {
            maxPayload: 100 * 1024 * 1024,
            skipUTF8Validation: !1,
            perMessageDeflate: !1,
            handleProtocols: null,
            clientTracking: !0,
            verifyClient: null,
            noServer: !1,
            backlog: null,
            server: null,
            host: null,
            path: null,
            port: null,
            WebSocket: Xm,
            ...e,
          }),
          (e.port == null && !e.server && !e.noServer) ||
            (e.port != null && (e.server || e.noServer)) ||
            (e.server && e.noServer))
        )
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        if (
          (e.port != null
            ? ((this._server = Ii.createServer((n, t) => {
                let r = Ii.STATUS_CODES[426];
                t.writeHead(426, {
                  "Content-Length": r.length,
                  "Content-Type": "text/plain",
                }),
                  t.end(r);
              })),
              this._server.listen(e.port, e.host, e.backlog, i))
            : e.server && (this._server = e.server),
          this._server)
        ) {
          let n = this.emit.bind(this, "connection");
          this._removeListeners = Qm(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (t, r, o) => {
              this.handleUpgrade(t, r, o, n);
            },
          });
        }
        e.perMessageDeflate === !0 && (e.perMessageDeflate = {}),
          e.clientTracking &&
            ((this.clients = new Set()), (this._shouldEmitClose = !1)),
          (this.options = e),
          (this._state = Ho);
      }
      address() {
        if (this.options.noServer)
          throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if (this._state === No) {
          e &&
            this.once("close", () => {
              e(new Error("The server is not running"));
            }),
            process.nextTick(Ye, this);
          return;
        }
        if ((e && this.once("close", e), this._state !== Oo))
          if (
            ((this._state = Oo), this.options.noServer || this.options.server)
          )
            this._server &&
              (this._removeListeners(),
              (this._removeListeners = this._server = null)),
              this.clients
                ? this.clients.size
                  ? (this._shouldEmitClose = !0)
                  : process.nextTick(Ye, this)
                : process.nextTick(Ye, this);
          else {
            let i = this._server;
            this._removeListeners(),
              (this._removeListeners = this._server = null),
              i.close(() => {
                Ye(this);
              });
          }
      }
      shouldHandle(e) {
        if (this.options.path) {
          let i = e.url.indexOf("?");
          if ((i !== -1 ? e.url.slice(0, i) : e.url) !== this.options.path)
            return !1;
        }
        return !0;
      }
      handleUpgrade(e, i, n, t) {
        i.on("error", Mo);
        let r = e.headers["sec-websocket-key"],
          o = +e.headers["sec-websocket-version"];
        if (e.method !== "GET") {
          ke(this, e, i, 405, "Invalid HTTP method");
          return;
        }
        if (e.headers.upgrade.toLowerCase() !== "websocket") {
          ke(this, e, i, 400, "Invalid Upgrade header");
          return;
        }
        if (!r || !Zm.test(r)) {
          ke(this, e, i, 400, "Missing or invalid Sec-WebSocket-Key header");
          return;
        }
        if (o !== 8 && o !== 13) {
          ke(
            this,
            e,
            i,
            400,
            "Missing or invalid Sec-WebSocket-Version header"
          );
          return;
        }
        if (!this.shouldHandle(e)) {
          ei(i, 400);
          return;
        }
        let s = e.headers["sec-websocket-protocol"],
          c = new Set();
        if (s !== void 0)
          try {
            c = Um.parse(s);
          } catch {
            ke(this, e, i, 400, "Invalid Sec-WebSocket-Protocol header");
            return;
          }
        let p = e.headers["sec-websocket-extensions"],
          u = {};
        if (this.options.perMessageDeflate && p !== void 0) {
          let m = new we(
            this.options.perMessageDeflate,
            !0,
            this.options.maxPayload
          );
          try {
            let f = Lo.parse(p);
            f[we.extensionName] &&
              (m.accept(f[we.extensionName]), (u[we.extensionName] = m));
          } catch {
            ke(
              this,
              e,
              i,
              400,
              "Invalid or unacceptable Sec-WebSocket-Extensions header"
            );
            return;
          }
        }
        if (this.options.verifyClient) {
          let m = {
            origin: e.headers[`${o === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(e.socket.authorized || e.socket.encrypted),
            req: e,
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(m, (f, l, d, h) => {
              if (!f) return ei(i, l || 401, d, h);
              this.completeUpgrade(u, r, c, e, i, n, t);
            });
            return;
          }
          if (!this.options.verifyClient(m)) return ei(i, 401);
        }
        this.completeUpgrade(u, r, c, e, i, n, t);
      }
      completeUpgrade(e, i, n, t, r, o, s) {
        if (!r.readable || !r.writable) return r.destroy();
        if (r[Jm])
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        if (this._state > Ho) return ei(r, 503);
        let c = Gm("sha1")
            .update(i + Vm)
            .digest("base64"),
          p = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${c}`,
          ],
          u = new this.options.WebSocket(null);
        if (n.size) {
          let m = this.options.handleProtocols
            ? this.options.handleProtocols(n, t)
            : n.values().next().value;
          m && (p.push(`Sec-WebSocket-Protocol: ${m}`), (u._protocol = m));
        }
        if (e[we.extensionName]) {
          let m = e[we.extensionName].params,
            f = Lo.format({ [we.extensionName]: [m] });
          p.push(`Sec-WebSocket-Extensions: ${f}`), (u._extensions = e);
        }
        this.emit("headers", p, t),
          r.write(
            p.concat(`\r
`).join(`\r
`)
          ),
          r.removeListener("error", Mo),
          u.setSocket(r, o, {
            maxPayload: this.options.maxPayload,
            skipUTF8Validation: this.options.skipUTF8Validation,
          }),
          this.clients &&
            (this.clients.add(u),
            u.on("close", () => {
              this.clients.delete(u),
                this._shouldEmitClose &&
                  !this.clients.size &&
                  process.nextTick(Ye, this);
            })),
          s(u, t);
      }
    };
  Go.exports = nn;
  function Qm(a, e) {
    for (let i of Object.keys(e)) a.on(i, e[i]);
    return function () {
      for (let n of Object.keys(e)) a.removeListener(n, e[n]);
    };
  }
  function Ye(a) {
    (a._state = No), a.emit("close");
  }
  function Mo() {
    this.destroy();
  }
  function ei(a, e, i, n) {
    (i = i || Ii.STATUS_CODES[e]),
      (n = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(i),
        ...n,
      }),
      a.once("finish", a.destroy),
      a.end(
        `HTTP/1.1 ${e} ${Ii.STATUS_CODES[e]}\r
` +
          Object.keys(n).map((t) => `${t}: ${n[t]}`).join(`\r
`) +
          `\r
\r
` +
          i
      );
  }
  function ke(a, e, i, n, t) {
    if (a.listenerCount("wsClientError")) {
      let r = new Error(t);
      Error.captureStackTrace(r, ke), a.emit("wsClientError", r, i, e);
    } else ei(i, n, t);
  }
});
var Xo = y((cb, af) => {
  af.exports = {
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\u{1D504}",
    afr: "\u{1D51E}",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    amp: "&",
    AMP: "&",
    andand: "\u2A55",
    And: "\u2A53",
    and: "\u2227",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angmsd: "\u2221",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\u{1D538}",
    aopf: "\u{1D552}",
    apacir: "\u2A6F",
    ap: "\u2248",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\u{1D49C}",
    ascr: "\u{1D4B6}",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    barwed: "\u2305",
    Barwed: "\u2306",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    because: "\u2235",
    Because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\u{1D505}",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\u{1D539}",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxdl: "\u2510",
    boxdL: "\u2555",
    boxDl: "\u2556",
    boxDL: "\u2557",
    boxdr: "\u250C",
    boxdR: "\u2552",
    boxDr: "\u2553",
    boxDR: "\u2554",
    boxh: "\u2500",
    boxH: "\u2550",
    boxhd: "\u252C",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxHD: "\u2566",
    boxhu: "\u2534",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxHU: "\u2569",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxul: "\u2518",
    boxuL: "\u255B",
    boxUl: "\u255C",
    boxUL: "\u255D",
    boxur: "\u2514",
    boxuR: "\u2558",
    boxUr: "\u2559",
    boxUR: "\u255A",
    boxv: "\u2502",
    boxV: "\u2551",
    boxvh: "\u253C",
    boxvH: "\u256A",
    boxVh: "\u256B",
    boxVH: "\u256C",
    boxvl: "\u2524",
    boxvL: "\u2561",
    boxVl: "\u2562",
    boxVL: "\u2563",
    boxvr: "\u251C",
    boxvR: "\u255E",
    boxVr: "\u255F",
    boxVR: "\u2560",
    bprime: "\u2035",
    breve: "\u02D8",
    Breve: "\u02D8",
    brvbar: "\xA6",
    bscr: "\u{1D4B7}",
    Bscr: "\u212C",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsolb: "\u29C5",
    bsol: "\\",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    cap: "\u2229",
    Cap: "\u22D2",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    centerdot: "\xB7",
    CenterDot: "\xB7",
    cfr: "\u{1D520}",
    Cfr: "\u212D",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cir: "\u25CB",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    Colon: "\u2237",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    conint: "\u222E",
    Conint: "\u222F",
    ContourIntegral: "\u222E",
    copf: "\u{1D554}",
    Copf: "\u2102",
    coprod: "\u2210",
    Coproduct: "\u2210",
    copy: "\xA9",
    COPY: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    cross: "\u2717",
    Cross: "\u2A2F",
    Cscr: "\u{1D49E}",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    CupCap: "\u224D",
    cup: "\u222A",
    Cup: "\u22D3",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    dagger: "\u2020",
    Dagger: "\u2021",
    daleth: "\u2138",
    darr: "\u2193",
    Darr: "\u21A1",
    dArr: "\u21D3",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DD: "\u2145",
    dd: "\u2146",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\u{1D507}",
    dfr: "\u{1D521}",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    diamond: "\u22C4",
    Diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\u{1D53B}",
    dopf: "\u{1D555}",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrowBar: "\u2913",
    downarrow: "\u2193",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVectorBar: "\u2956",
    DownLeftVector: "\u21BD",
    DownRightTeeVector: "\u295F",
    DownRightVectorBar: "\u2957",
    DownRightVector: "\u21C1",
    DownTeeArrow: "\u21A7",
    DownTee: "\u22A4",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\u{1D49F}",
    dscr: "\u{1D4B9}",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecir: "\u2256",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    edot: "\u0117",
    eDot: "\u2251",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\u{1D508}",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\u{1D53C}",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    escr: "\u212F",
    Escr: "\u2130",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    exponentiale: "\u2147",
    ExponentialE: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\u{1D509}",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\u{1D53D}",
    fopf: "\u{1D557}",
    forall: "\u2200",
    ForAll: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    fscr: "\u{1D4BB}",
    Fscr: "\u2131",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    ge: "\u2265",
    gE: "\u2267",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    gescc: "\u2AA9",
    ges: "\u2A7E",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\u{1D50A}",
    gfr: "\u{1D524}",
    gg: "\u226B",
    Gg: "\u22D9",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gla: "\u2AA5",
    gl: "\u2277",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gnE: "\u2269",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\u{1D53E}",
    gopf: "\u{1D558}",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gt: ">",
    GT: ">",
    Gt: "\u226B",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    harrcir: "\u2948",
    harr: "\u2194",
    hArr: "\u21D4",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    hfr: "\u{1D525}",
    Hfr: "\u210C",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    hopf: "\u{1D559}",
    Hopf: "\u210D",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    hscr: "\u{1D4BD}",
    Hscr: "\u210B",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    ifr: "\u{1D526}",
    Ifr: "\u2111",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    Im: "\u2111",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    incare: "\u2105",
    in: "\u2208",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    intcal: "\u22BA",
    int: "\u222B",
    Int: "\u222C",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\u{1D540}",
    iopf: "\u{1D55A}",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    iscr: "\u{1D4BE}",
    Iscr: "\u2110",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\u{1D50D}",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    Jopf: "\u{1D541}",
    jopf: "\u{1D55B}",
    Jscr: "\u{1D4A5}",
    jscr: "\u{1D4BF}",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\u{1D50E}",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\u{1D542}",
    kopf: "\u{1D55C}",
    Kscr: "\u{1D4A6}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    lang: "\u27E8",
    Lang: "\u27EA",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larr: "\u2190",
    Larr: "\u219E",
    lArr: "\u21D0",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    latail: "\u2919",
    lAtail: "\u291B",
    lat: "\u2AAB",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lBarr: "\u290E",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    lE: "\u2266",
    LeftAngleBracket: "\u27E8",
    LeftArrowBar: "\u21E4",
    leftarrow: "\u2190",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVectorBar: "\u2959",
    LeftDownVector: "\u21C3",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    leftrightarrow: "\u2194",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTeeArrow: "\u21A4",
    LeftTee: "\u22A3",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangleBar: "\u29CF",
    LeftTriangle: "\u22B2",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVectorBar: "\u2958",
    LeftUpVector: "\u21BF",
    LeftVectorBar: "\u2952",
    LeftVector: "\u21BC",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    lescc: "\u2AA8",
    les: "\u2A7D",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\u{1D50F}",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    llarr: "\u21C7",
    ll: "\u226A",
    Ll: "\u22D8",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoustache: "\u23B0",
    lmoust: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lnE: "\u2268",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    longleftarrow: "\u27F5",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftrightarrow: "\u27F7",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longmapsto: "\u27FC",
    longrightarrow: "\u27F6",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\u{1D543}",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\u{1D4C1}",
    Lscr: "\u2112",
    lsh: "\u21B0",
    Lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    lt: "<",
    LT: "<",
    Lt: "\u226A",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    midast: "*",
    midcir: "\u2AF0",
    mid: "\u2223",
    middot: "\xB7",
    minusb: "\u229F",
    minus: "\u2212",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\u{1D544}",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    mscr: "\u{1D4C2}",
    Mscr: "\u2133",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natural: "\u266E",
    naturals: "\u2115",
    natur: "\u266E",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    nearhk: "\u2924",
    nearr: "\u2197",
    neArr: "\u21D7",
    nearrow: "\u2197",
    ne: "\u2260",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\u{1D511}",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nharr: "\u21AE",
    nhArr: "\u21CE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlarr: "\u219A",
    nlArr: "\u21CD",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nleftarrow: "\u219A",
    nLeftarrow: "\u21CD",
    nleftrightarrow: "\u21AE",
    nLeftrightarrow: "\u21CE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    nopf: "\u{1D55F}",
    Nopf: "\u2115",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangle: "\u22EB",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    nparallel: "\u2226",
    npar: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    npre: "\u2AAF\u0338",
    nrarrc: "\u2933\u0338",
    nrarr: "\u219B",
    nrArr: "\u21CF",
    nrarrw: "\u219D\u0338",
    nrightarrow: "\u219B",
    nRightarrow: "\u21CF",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\u{1D4A9}",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvDash: "\u22AD",
    nVdash: "\u22AE",
    nVDash: "\u22AF",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwarr: "\u2196",
    nwArr: "\u21D6",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    ocir: "\u229A",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\u{1D512}",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\u{1D546}",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    orarr: "\u21BB",
    Or: "\u2A54",
    or: "\u2228",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\u{1D4AA}",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    otimesas: "\u2A36",
    Otimes: "\u2A37",
    otimes: "\u2297",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    para: "\xB6",
    parallel: "\u2225",
    par: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\u{1D513}",
    pfr: "\u{1D52D}",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plus: "+",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    popf: "\u{1D561}",
    Popf: "\u2119",
    pound: "\xA3",
    prap: "\u2AB7",
    Pr: "\u2ABB",
    pr: "\u227A",
    prcue: "\u227C",
    precapprox: "\u2AB7",
    prec: "\u227A",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    pre: "\u2AAF",
    prE: "\u2AB3",
    precsim: "\u227E",
    prime: "\u2032",
    Prime: "\u2033",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportional: "\u221D",
    Proportion: "\u2237",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\u{1D4AB}",
    pscr: "\u{1D4C5}",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\u{1D514}",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    qopf: "\u{1D562}",
    Qopf: "\u211A",
    qprime: "\u2057",
    Qscr: "\u{1D4AC}",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    quot: '"',
    QUOT: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    rang: "\u27E9",
    Rang: "\u27EB",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarr: "\u2192",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    ratail: "\u291A",
    rAtail: "\u291C",
    ratio: "\u2236",
    rationals: "\u211A",
    rbarr: "\u290D",
    rBarr: "\u290F",
    RBarr: "\u2910",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    Re: "\u211C",
    rect: "\u25AD",
    reg: "\xAE",
    REG: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    rfr: "\u{1D52F}",
    Rfr: "\u211C",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrowBar: "\u21E5",
    rightarrow: "\u2192",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVectorBar: "\u2955",
    RightDownVector: "\u21C2",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTeeArrow: "\u21A6",
    RightTee: "\u22A2",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangleBar: "\u29D0",
    RightTriangle: "\u22B3",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVectorBar: "\u2954",
    RightUpVector: "\u21BE",
    RightVectorBar: "\u2953",
    RightVector: "\u21C0",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoustache: "\u23B1",
    rmoust: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    ropf: "\u{1D563}",
    Ropf: "\u211D",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    rscr: "\u{1D4C7}",
    Rscr: "\u211B",
    rsh: "\u21B1",
    Rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    Sc: "\u2ABC",
    sc: "\u227B",
    sccue: "\u227D",
    sce: "\u2AB0",
    scE: "\u2AB4",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdotb: "\u22A1",
    sdot: "\u22C5",
    sdote: "\u2A66",
    searhk: "\u2925",
    searr: "\u2198",
    seArr: "\u21D8",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\u{1D516}",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    solbar: "\u233F",
    solb: "\u29C4",
    sol: "/",
    Sopf: "\u{1D54A}",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    square: "\u25A1",
    Square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squ: "\u25A1",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\u{1D4AE}",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    sub: "\u2282",
    Sub: "\u22D0",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subset: "\u2282",
    Subset: "\u22D0",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succapprox: "\u2AB8",
    succ: "\u227B",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    sum: "\u2211",
    Sum: "\u2211",
    sung: "\u266A",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    sup: "\u2283",
    Sup: "\u22D1",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    supset: "\u2283",
    Supset: "\u22D1",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swarr: "\u2199",
    swArr: "\u21D9",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "	",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\u{1D517}",
    tfr: "\u{1D531}",
    there4: "\u2234",
    therefore: "\u2234",
    Therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    tilde: "\u02DC",
    Tilde: "\u223C",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    timesbar: "\u2A31",
    timesb: "\u22A0",
    times: "\xD7",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    topbot: "\u2336",
    topcir: "\u2AF1",
    top: "\u22A4",
    Topf: "\u{1D54B}",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    trade: "\u2122",
    TRADE: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\u{1D4AF}",
    tscr: "\u{1D4C9}",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    uarr: "\u2191",
    Uarr: "\u219F",
    uArr: "\u21D1",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\u{1D518}",
    ufr: "\u{1D532}",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\u{1D54C}",
    uopf: "\u{1D566}",
    UpArrowBar: "\u2912",
    uparrow: "\u2191",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    UpArrowDownArrow: "\u21C5",
    updownarrow: "\u2195",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    upsi: "\u03C5",
    Upsi: "\u03D2",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTeeArrow: "\u21A5",
    UpTee: "\u22A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\u{1D4B0}",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    varr: "\u2195",
    vArr: "\u21D5",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    vBar: "\u2AE8",
    Vbar: "\u2AEB",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    vdash: "\u22A2",
    vDash: "\u22A8",
    Vdash: "\u22A9",
    VDash: "\u22AB",
    Vdashl: "\u2AE6",
    veebar: "\u22BB",
    vee: "\u2228",
    Vee: "\u22C1",
    veeeq: "\u225A",
    vellip: "\u22EE",
    verbar: "|",
    Verbar: "\u2016",
    vert: "|",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\u{1D54D}",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\u{1D4B1}",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedge: "\u2227",
    Wedge: "\u22C0",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\u{1D51A}",
    wfr: "\u{1D534}",
    Wopf: "\u{1D54E}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\u{1D4B2}",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\u{1D51B}",
    xfr: "\u{1D535}",
    xharr: "\u27F7",
    xhArr: "\u27FA",
    Xi: "\u039E",
    xi: "\u03BE",
    xlarr: "\u27F5",
    xlArr: "\u27F8",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\u{1D54F}",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrarr: "\u27F6",
    xrArr: "\u27F9",
    Xscr: "\u{1D4B3}",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\u{1D51C}",
    yfr: "\u{1D536}",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\u{1D550}",
    yopf: "\u{1D56A}",
    Yscr: "\u{1D4B4}",
    yscr: "\u{1D4CE}",
    YUcy: "\u042E",
    yucy: "\u044E",
    yuml: "\xFF",
    Yuml: "\u0178",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    zfr: "\u{1D537}",
    Zfr: "\u2128",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\u{1D56B}",
    Zopf: "\u2124",
    Zscr: "\u{1D4B5}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C",
  };
});
var rn = y((pb, Vo) => {
  "use strict";
  Vo.exports = Xo();
});
var $i = y((lb, Jo) => {
  Jo.exports =
    /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
});
var Ko = y((ub, Qo) => {
  "use strict";
  var Zo = {};
  function nf(a) {
    var e,
      i,
      n = Zo[a];
    if (n) return n;
    for (n = Zo[a] = [], e = 0; e < 128; e++)
      (i = String.fromCharCode(e)),
        /^[0-9a-z]$/i.test(i)
          ? n.push(i)
          : n.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
    for (e = 0; e < a.length; e++) n[a.charCodeAt(e)] = a[e];
    return n;
  }
  function ji(a, e, i) {
    var n,
      t,
      r,
      o,
      s,
      c = "";
    for (
      typeof e != "string" && ((i = e), (e = ji.defaultChars)),
        typeof i > "u" && (i = !0),
        s = nf(e),
        n = 0,
        t = a.length;
      n < t;
      n++
    ) {
      if (
        ((r = a.charCodeAt(n)),
        i &&
          r === 37 &&
          n + 2 < t &&
          /^[0-9a-f]{2}$/i.test(a.slice(n + 1, n + 3)))
      ) {
        (c += a.slice(n, n + 3)), (n += 2);
        continue;
      }
      if (r < 128) {
        c += s[r];
        continue;
      }
      if (r >= 55296 && r <= 57343) {
        if (
          r >= 55296 &&
          r <= 56319 &&
          n + 1 < t &&
          ((o = a.charCodeAt(n + 1)), o >= 56320 && o <= 57343)
        ) {
          (c += encodeURIComponent(a[n] + a[n + 1])), n++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(a[n]);
    }
    return c;
  }
  ji.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  ji.componentChars = "-_.!~*'()";
  Qo.exports = ji;
});
var es = y((db, Yo) => {
  "use strict";
  var Wo = {};
  function tf(a) {
    var e,
      i,
      n = Wo[a];
    if (n) return n;
    for (n = Wo[a] = [], e = 0; e < 128; e++)
      (i = String.fromCharCode(e)), n.push(i);
    for (e = 0; e < a.length; e++)
      (i = a.charCodeAt(e)),
        (n[i] = "%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    return n;
  }
  function Ri(a, e) {
    var i;
    return (
      typeof e != "string" && (e = Ri.defaultChars),
      (i = tf(e)),
      a.replace(/(%[a-f0-9]{2})+/gi, function (n) {
        var t,
          r,
          o,
          s,
          c,
          p,
          u,
          m = "";
        for (t = 0, r = n.length; t < r; t += 3) {
          if (((o = parseInt(n.slice(t + 1, t + 3), 16)), o < 128)) {
            m += i[o];
            continue;
          }
          if (
            (o & 224) === 192 &&
            t + 3 < r &&
            ((s = parseInt(n.slice(t + 4, t + 6), 16)), (s & 192) === 128)
          ) {
            (u = ((o << 6) & 1984) | (s & 63)),
              u < 128 ? (m += "\uFFFD\uFFFD") : (m += String.fromCharCode(u)),
              (t += 3);
            continue;
          }
          if (
            (o & 240) === 224 &&
            t + 6 < r &&
            ((s = parseInt(n.slice(t + 4, t + 6), 16)),
            (c = parseInt(n.slice(t + 7, t + 9), 16)),
            (s & 192) === 128 && (c & 192) === 128)
          ) {
            (u = ((o << 12) & 61440) | ((s << 6) & 4032) | (c & 63)),
              u < 2048 || (u >= 55296 && u <= 57343)
                ? (m += "\uFFFD\uFFFD\uFFFD")
                : (m += String.fromCharCode(u)),
              (t += 6);
            continue;
          }
          if (
            (o & 248) === 240 &&
            t + 9 < r &&
            ((s = parseInt(n.slice(t + 4, t + 6), 16)),
            (c = parseInt(n.slice(t + 7, t + 9), 16)),
            (p = parseInt(n.slice(t + 10, t + 12), 16)),
            (s & 192) === 128 && (c & 192) === 128 && (p & 192) === 128)
          ) {
            (u =
              ((o << 18) & 1835008) |
              ((s << 12) & 258048) |
              ((c << 6) & 4032) |
              (p & 63)),
              u < 65536 || u > 1114111
                ? (m += "\uFFFD\uFFFD\uFFFD\uFFFD")
                : ((u -= 65536),
                  (m += String.fromCharCode(
                    55296 + (u >> 10),
                    56320 + (u & 1023)
                  ))),
              (t += 9);
            continue;
          }
          m += "\uFFFD";
        }
        return m;
      })
    );
  }
  Ri.defaultChars = ";/?:@&=+$,#";
  Ri.componentChars = "";
  Yo.exports = Ri;
});
var as = y((mb, is) => {
  "use strict";
  is.exports = function (e) {
    var i = "";
    return (
      (i += e.protocol || ""),
      (i += e.slashes ? "//" : ""),
      (i += e.auth ? e.auth + "@" : ""),
      e.hostname && e.hostname.indexOf(":") !== -1
        ? (i += "[" + e.hostname + "]")
        : (i += e.hostname || ""),
      (i += e.port ? ":" + e.port : ""),
      (i += e.pathname || ""),
      (i += e.search || ""),
      (i += e.hash || ""),
      i
    );
  };
});
var ps = y((fb, cs) => {
  "use strict";
  function Fi() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.pathname = null);
  }
  var rf = /^([a-z0-9.+-]+:)/i,
    of = /:[0-9]*$/,
    sf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    cf = [
      "<",
      ">",
      '"',
      "`",
      " ",
      "\r",
      `
`,
      "	",
    ],
    pf = ["{", "}", "|", "\\", "^", "`"].concat(cf),
    lf = ["'"].concat(pf),
    ns = ["%", "/", "?", ";", "#"].concat(lf),
    ts = ["/", "?", "#"],
    uf = 255,
    rs = /^[+a-z0-9A-Z_-]{0,63}$/,
    df = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    os = { javascript: !0, "javascript:": !0 },
    ss = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0,
    };
  function mf(a, e) {
    if (a && a instanceof Fi) return a;
    var i = new Fi();
    return i.parse(a, e), i;
  }
  Fi.prototype.parse = function (a, e) {
    var i,
      n,
      t,
      r,
      o,
      s = a;
    if (((s = s.trim()), !e && a.split("#").length === 1)) {
      var c = sf.exec(s);
      if (c) return (this.pathname = c[1]), c[2] && (this.search = c[2]), this;
    }
    var p = rf.exec(s);
    if (
      (p &&
        ((p = p[0]),
        (t = p.toLowerCase()),
        (this.protocol = p),
        (s = s.substr(p.length))),
      (e || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
        ((o = s.substr(0, 2) === "//"),
        o && !(p && os[p]) && ((s = s.substr(2)), (this.slashes = !0))),
      !os[p] && (o || (p && !ss[p])))
    ) {
      var u = -1;
      for (i = 0; i < ts.length; i++)
        (r = s.indexOf(ts[i])), r !== -1 && (u === -1 || r < u) && (u = r);
      var m, f;
      for (
        u === -1 ? (f = s.lastIndexOf("@")) : (f = s.lastIndexOf("@", u)),
          f !== -1 &&
            ((m = s.slice(0, f)), (s = s.slice(f + 1)), (this.auth = m)),
          u = -1,
          i = 0;
        i < ns.length;
        i++
      )
        (r = s.indexOf(ns[i])), r !== -1 && (u === -1 || r < u) && (u = r);
      u === -1 && (u = s.length), s[u - 1] === ":" && u--;
      var l = s.slice(0, u);
      (s = s.slice(u)),
        this.parseHost(l),
        (this.hostname = this.hostname || "");
      var d =
        this.hostname[0] === "[" &&
        this.hostname[this.hostname.length - 1] === "]";
      if (!d) {
        var h = this.hostname.split(/\./);
        for (i = 0, n = h.length; i < n; i++) {
          var x = h[i];
          if (!!x && !x.match(rs)) {
            for (var v = "", g = 0, b = x.length; g < b; g++)
              x.charCodeAt(g) > 127 ? (v += "x") : (v += x[g]);
            if (!v.match(rs)) {
              var k = h.slice(0, i),
                T = h.slice(i + 1),
                _ = x.match(df);
              _ && (k.push(_[1]), T.unshift(_[2])),
                T.length && (s = T.join(".") + s),
                (this.hostname = k.join("."));
              break;
            }
          }
        }
      }
      this.hostname.length > uf && (this.hostname = ""),
        d &&
          (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var P = s.indexOf("#");
    P !== -1 && ((this.hash = s.substr(P)), (s = s.slice(0, P)));
    var S = s.indexOf("?");
    return (
      S !== -1 && ((this.search = s.substr(S)), (s = s.slice(0, S))),
      s && (this.pathname = s),
      ss[t] && this.hostname && !this.pathname && (this.pathname = ""),
      this
    );
  };
  Fi.prototype.parseHost = function (a) {
    var e = of.exec(a);
    e &&
      ((e = e[0]),
      e !== ":" && (this.port = e.substr(1)),
      (a = a.substr(0, a.length - e.length))),
      a && (this.hostname = a);
  };
  cs.exports = mf;
});
var on = y((hb, ii) => {
  "use strict";
  ii.exports.encode = Ko();
  ii.exports.decode = es();
  ii.exports.format = as();
  ii.exports.parse = ps();
});
var sn = y((xb, ls) => {
  ls.exports =
    /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
});
var cn = y((gb, us) => {
  us.exports = /[\0-\x1F\x7F-\x9F]/;
});
var ms = y((vb, ds) => {
  ds.exports =
    /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
});
var pn = y((bb, fs) => {
  fs.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
});
var hs = y((Re) => {
  "use strict";
  Re.Any = sn();
  Re.Cc = cn();
  Re.Cf = ms();
  Re.P = $i();
  Re.Z = pn();
});
var z = y((M) => {
  "use strict";
  function ff(a) {
    return Object.prototype.toString.call(a);
  }
  function hf(a) {
    return ff(a) === "[object String]";
  }
  var xf = Object.prototype.hasOwnProperty;
  function gs(a, e) {
    return xf.call(a, e);
  }
  function gf(a) {
    var e = Array.prototype.slice.call(arguments, 1);
    return (
      e.forEach(function (i) {
        if (!!i) {
          if (typeof i != "object") throw new TypeError(i + "must be object");
          Object.keys(i).forEach(function (n) {
            a[n] = i[n];
          });
        }
      }),
      a
    );
  }
  function vf(a, e, i) {
    return [].concat(a.slice(0, e), i, a.slice(e + 1));
  }
  function vs(a) {
    return !(
      (a >= 55296 && a <= 57343) ||
      (a >= 64976 && a <= 65007) ||
      (a & 65535) === 65535 ||
      (a & 65535) === 65534 ||
      (a >= 0 && a <= 8) ||
      a === 11 ||
      (a >= 14 && a <= 31) ||
      (a >= 127 && a <= 159) ||
      a > 1114111
    );
  }
  function bs(a) {
    if (a > 65535) {
      a -= 65536;
      var e = 55296 + (a >> 10),
        i = 56320 + (a & 1023);
      return String.fromCharCode(e, i);
    }
    return String.fromCharCode(a);
  }
  var ys = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
    bf = /&([a-z#][a-z0-9]{1,31});/gi,
    yf = new RegExp(ys.source + "|" + bf.source, "gi"),
    _f = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
    xs = rn();
  function wf(a, e) {
    var i = 0;
    return gs(xs, e)
      ? xs[e]
      : e.charCodeAt(0) === 35 &&
        _f.test(e) &&
        ((i =
          e[1].toLowerCase() === "x"
            ? parseInt(e.slice(2), 16)
            : parseInt(e.slice(1), 10)),
        vs(i))
      ? bs(i)
      : a;
  }
  function kf(a) {
    return a.indexOf("\\") < 0 ? a : a.replace(ys, "$1");
  }
  function Cf(a) {
    return a.indexOf("\\") < 0 && a.indexOf("&") < 0
      ? a
      : a.replace(yf, function (e, i, n) {
          return i || wf(e, n);
        });
  }
  var Ef = /[&<>"]/,
    Af = /[&<>"]/g,
    Df = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function Pf(a) {
    return Df[a];
  }
  function Sf(a) {
    return Ef.test(a) ? a.replace(Af, Pf) : a;
  }
  var Tf = /[.?*+^$[\]\\(){}|-]/g;
  function If(a) {
    return a.replace(Tf, "\\$&");
  }
  function $f(a) {
    switch (a) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function jf(a) {
    if (a >= 8192 && a <= 8202) return !0;
    switch (a) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var Rf = $i();
  function Ff(a) {
    return Rf.test(a);
  }
  function Bf(a) {
    switch (a) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function qf(a) {
    return (
      (a = a.trim().replace(/\s+/g, " ")),
      "\u1E9E".toLowerCase() === "\u1E7E" && (a = a.replace(/ẞ/g, "\xDF")),
      a.toLowerCase().toUpperCase()
    );
  }
  M.lib = {};
  M.lib.mdurl = on();
  M.lib.ucmicro = hs();
  M.assign = gf;
  M.isString = hf;
  M.has = gs;
  M.unescapeMd = kf;
  M.unescapeAll = Cf;
  M.isValidEntityCode = vs;
  M.fromCodePoint = bs;
  M.escapeHtml = Sf;
  M.arrayReplaceAt = vf;
  M.isSpace = $f;
  M.isWhiteSpace = jf;
  M.isMdAsciiPunct = Bf;
  M.isPunctChar = Ff;
  M.escapeRE = If;
  M.normalizeReference = qf;
});
var ws = y((wb, _s) => {
  "use strict";
  _s.exports = function (e, i, n) {
    var t,
      r,
      o,
      s,
      c = -1,
      p = e.posMax,
      u = e.pos;
    for (e.pos = i + 1, t = 1; e.pos < p; ) {
      if (((o = e.src.charCodeAt(e.pos)), o === 93 && (t--, t === 0))) {
        r = !0;
        break;
      }
      if (((s = e.pos), e.md.inline.skipToken(e), o === 91)) {
        if (s === e.pos - 1) t++;
        else if (n) return (e.pos = u), -1;
      }
    }
    return r && (c = e.pos), (e.pos = u), c;
  };
});
var Es = y((kb, Cs) => {
  "use strict";
  var ks = z().unescapeAll;
  Cs.exports = function (e, i, n) {
    var t,
      r,
      o = 0,
      s = i,
      c = { ok: !1, pos: 0, lines: 0, str: "" };
    if (e.charCodeAt(i) === 60) {
      for (i++; i < n; ) {
        if (((t = e.charCodeAt(i)), t === 10 || t === 60)) return c;
        if (t === 62)
          return (
            (c.pos = i + 1), (c.str = ks(e.slice(s + 1, i))), (c.ok = !0), c
          );
        if (t === 92 && i + 1 < n) {
          i += 2;
          continue;
        }
        i++;
      }
      return c;
    }
    for (
      r = 0;
      i < n && ((t = e.charCodeAt(i)), !(t === 32 || t < 32 || t === 127));

    ) {
      if (t === 92 && i + 1 < n) {
        if (e.charCodeAt(i + 1) === 32) break;
        i += 2;
        continue;
      }
      if (t === 40 && (r++, r > 32)) return c;
      if (t === 41) {
        if (r === 0) break;
        r--;
      }
      i++;
    }
    return (
      s === i ||
        r !== 0 ||
        ((c.str = ks(e.slice(s, i))), (c.lines = o), (c.pos = i), (c.ok = !0)),
      c
    );
  };
});
var Ds = y((Cb, As) => {
  "use strict";
  var zf = z().unescapeAll;
  As.exports = function (e, i, n) {
    var t,
      r,
      o = 0,
      s = i,
      c = { ok: !1, pos: 0, lines: 0, str: "" };
    if (i >= n || ((r = e.charCodeAt(i)), r !== 34 && r !== 39 && r !== 40))
      return c;
    for (i++, r === 40 && (r = 41); i < n; ) {
      if (((t = e.charCodeAt(i)), t === r))
        return (
          (c.pos = i + 1),
          (c.lines = o),
          (c.str = zf(e.slice(s + 1, i))),
          (c.ok = !0),
          c
        );
      if (t === 40 && r === 41) return c;
      t === 10
        ? o++
        : t === 92 && i + 1 < n && (i++, e.charCodeAt(i) === 10 && o++),
        i++;
    }
    return c;
  };
});
var Ps = y((Bi) => {
  "use strict";
  Bi.parseLinkLabel = ws();
  Bi.parseLinkDestination = Es();
  Bi.parseLinkTitle = Ds();
});
var Ts = y((Ab, Ss) => {
  "use strict";
  var Lf = z().assign,
    Hf = z().unescapeAll,
    Ce = z().escapeHtml,
    oe = {};
  oe.code_inline = function (a, e, i, n, t) {
    var r = a[e];
    return "<code" + t.renderAttrs(r) + ">" + Ce(a[e].content) + "</code>";
  };
  oe.code_block = function (a, e, i, n, t) {
    var r = a[e];
    return (
      "<pre" +
      t.renderAttrs(r) +
      "><code>" +
      Ce(a[e].content) +
      `</code></pre>
`
    );
  };
  oe.fence = function (a, e, i, n, t) {
    var r = a[e],
      o = r.info ? Hf(r.info).trim() : "",
      s = "",
      c = "",
      p,
      u,
      m,
      f,
      l;
    return (
      o && ((m = o.split(/(\s+)/g)), (s = m[0]), (c = m.slice(2).join(""))),
      i.highlight
        ? (p = i.highlight(r.content, s, c) || Ce(r.content))
        : (p = Ce(r.content)),
      p.indexOf("<pre") === 0
        ? p +
          `
`
        : o
        ? ((u = r.attrIndex("class")),
          (f = r.attrs ? r.attrs.slice() : []),
          u < 0
            ? f.push(["class", i.langPrefix + s])
            : ((f[u] = f[u].slice()), (f[u][1] += " " + i.langPrefix + s)),
          (l = { attrs: f }),
          "<pre><code" +
            t.renderAttrs(l) +
            ">" +
            p +
            `</code></pre>
`)
        : "<pre><code" +
          t.renderAttrs(r) +
          ">" +
          p +
          `</code></pre>
`
    );
  };
  oe.image = function (a, e, i, n, t) {
    var r = a[e];
    return (
      (r.attrs[r.attrIndex("alt")][1] = t.renderInlineAsText(r.children, i, n)),
      t.renderToken(a, e, i)
    );
  };
  oe.hardbreak = function (a, e, i) {
    return i.xhtmlOut
      ? `<br />
`
      : `<br>
`;
  };
  oe.softbreak = function (a, e, i) {
    return i.breaks
      ? i.xhtmlOut
        ? `<br />
`
        : `<br>
`
      : `
`;
  };
  oe.text = function (a, e) {
    return Ce(a[e].content);
  };
  oe.html_block = function (a, e) {
    return a[e].content;
  };
  oe.html_inline = function (a, e) {
    return a[e].content;
  };
  function Fe() {
    this.rules = Lf({}, oe);
  }
  Fe.prototype.renderAttrs = function (e) {
    var i, n, t;
    if (!e.attrs) return "";
    for (t = "", i = 0, n = e.attrs.length; i < n; i++)
      t += " " + Ce(e.attrs[i][0]) + '="' + Ce(e.attrs[i][1]) + '"';
    return t;
  };
  Fe.prototype.renderToken = function (e, i, n) {
    var t,
      r = "",
      o = !1,
      s = e[i];
    return s.hidden
      ? ""
      : (s.block &&
          s.nesting !== -1 &&
          i &&
          e[i - 1].hidden &&
          (r += `
`),
        (r += (s.nesting === -1 ? "</" : "<") + s.tag),
        (r += this.renderAttrs(s)),
        s.nesting === 0 && n.xhtmlOut && (r += " /"),
        s.block &&
          ((o = !0),
          s.nesting === 1 &&
            i + 1 < e.length &&
            ((t = e[i + 1]),
            (t.type === "inline" ||
              t.hidden ||
              (t.nesting === -1 && t.tag === s.tag)) &&
              (o = !1))),
        (r += o
          ? `>
`
          : ">"),
        r);
  };
  Fe.prototype.renderInline = function (a, e, i) {
    for (var n, t = "", r = this.rules, o = 0, s = a.length; o < s; o++)
      (n = a[o].type),
        typeof r[n] < "u"
          ? (t += r[n](a, o, e, i, this))
          : (t += this.renderToken(a, o, e));
    return t;
  };
  Fe.prototype.renderInlineAsText = function (a, e, i) {
    for (var n = "", t = 0, r = a.length; t < r; t++)
      a[t].type === "text"
        ? (n += a[t].content)
        : a[t].type === "image"
        ? (n += this.renderInlineAsText(a[t].children, e, i))
        : a[t].type === "softbreak" &&
          (n += `
`);
    return n;
  };
  Fe.prototype.render = function (a, e, i) {
    var n,
      t,
      r,
      o = "",
      s = this.rules;
    for (n = 0, t = a.length; n < t; n++)
      (r = a[n].type),
        r === "inline"
          ? (o += this.renderInline(a[n].children, e, i))
          : typeof s[r] < "u"
          ? (o += s[a[n].type](a, n, e, i, this))
          : (o += this.renderToken(a, n, e, i));
    return o;
  };
  Ss.exports = Fe;
});
var qi = y((Db, Is) => {
  "use strict";
  function ae() {
    (this.__rules__ = []), (this.__cache__ = null);
  }
  ae.prototype.__find__ = function (a) {
    for (var e = 0; e < this.__rules__.length; e++)
      if (this.__rules__[e].name === a) return e;
    return -1;
  };
  ae.prototype.__compile__ = function () {
    var a = this,
      e = [""];
    a.__rules__.forEach(function (i) {
      !i.enabled ||
        i.alt.forEach(function (n) {
          e.indexOf(n) < 0 && e.push(n);
        });
    }),
      (a.__cache__ = {}),
      e.forEach(function (i) {
        (a.__cache__[i] = []),
          a.__rules__.forEach(function (n) {
            !n.enabled ||
              (i && n.alt.indexOf(i) < 0) ||
              a.__cache__[i].push(n.fn);
          });
      });
  };
  ae.prototype.at = function (a, e, i) {
    var n = this.__find__(a),
      t = i || {};
    if (n === -1) throw new Error("Parser rule not found: " + a);
    (this.__rules__[n].fn = e),
      (this.__rules__[n].alt = t.alt || []),
      (this.__cache__ = null);
  };
  ae.prototype.before = function (a, e, i, n) {
    var t = this.__find__(a),
      r = n || {};
    if (t === -1) throw new Error("Parser rule not found: " + a);
    this.__rules__.splice(t, 0, {
      name: e,
      enabled: !0,
      fn: i,
      alt: r.alt || [],
    }),
      (this.__cache__ = null);
  };
  ae.prototype.after = function (a, e, i, n) {
    var t = this.__find__(a),
      r = n || {};
    if (t === -1) throw new Error("Parser rule not found: " + a);
    this.__rules__.splice(t + 1, 0, {
      name: e,
      enabled: !0,
      fn: i,
      alt: r.alt || [],
    }),
      (this.__cache__ = null);
  };
  ae.prototype.push = function (a, e, i) {
    var n = i || {};
    this.__rules__.push({ name: a, enabled: !0, fn: e, alt: n.alt || [] }),
      (this.__cache__ = null);
  };
  ae.prototype.enable = function (a, e) {
    Array.isArray(a) || (a = [a]);
    var i = [];
    return (
      a.forEach(function (n) {
        var t = this.__find__(n);
        if (t < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + n);
        }
        (this.__rules__[t].enabled = !0), i.push(n);
      }, this),
      (this.__cache__ = null),
      i
    );
  };
  ae.prototype.enableOnly = function (a, e) {
    Array.isArray(a) || (a = [a]),
      this.__rules__.forEach(function (i) {
        i.enabled = !1;
      }),
      this.enable(a, e);
  };
  ae.prototype.disable = function (a, e) {
    Array.isArray(a) || (a = [a]);
    var i = [];
    return (
      a.forEach(function (n) {
        var t = this.__find__(n);
        if (t < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + n);
        }
        (this.__rules__[t].enabled = !1), i.push(n);
      }, this),
      (this.__cache__ = null),
      i
    );
  };
  ae.prototype.getRules = function (a) {
    return (
      this.__cache__ === null && this.__compile__(), this.__cache__[a] || []
    );
  };
  Is.exports = ae;
});
var js = y((Pb, $s) => {
  "use strict";
  var Of = /\r\n?|\n/g,
    Mf = /\0/g;
  $s.exports = function (e) {
    var i;
    (i = e.src.replace(
      Of,
      `
`
    )),
      (i = i.replace(Mf, "\uFFFD")),
      (e.src = i);
  };
});
var Fs = y((Sb, Rs) => {
  "use strict";
  Rs.exports = function (e) {
    var i;
    e.inlineMode
      ? ((i = new e.Token("inline", "", 0)),
        (i.content = e.src),
        (i.map = [0, 1]),
        (i.children = []),
        e.tokens.push(i))
      : e.md.block.parse(e.src, e.md, e.env, e.tokens);
  };
});
var qs = y((Tb, Bs) => {
  "use strict";
  Bs.exports = function (e) {
    var i = e.tokens,
      n,
      t,
      r;
    for (t = 0, r = i.length; t < r; t++)
      (n = i[t]),
        n.type === "inline" &&
          e.md.inline.parse(n.content, e.md, e.env, n.children);
  };
});
var Ls = y((Ib, zs) => {
  "use strict";
  var Nf = z().arrayReplaceAt;
  function Gf(a) {
    return /^<a[>\s]/i.test(a);
  }
  function Uf(a) {
    return /^<\/a\s*>/i.test(a);
  }
  zs.exports = function (e) {
    var i,
      n,
      t,
      r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l,
      d,
      h,
      x,
      v,
      g = e.tokens,
      b;
    if (!!e.md.options.linkify) {
      for (n = 0, t = g.length; n < t; n++)
        if (!(g[n].type !== "inline" || !e.md.linkify.pretest(g[n].content)))
          for (r = g[n].children, d = 0, i = r.length - 1; i >= 0; i--) {
            if (((s = r[i]), s.type === "link_close")) {
              for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
                i--;
              continue;
            }
            if (
              (s.type === "html_inline" &&
                (Gf(s.content) && d > 0 && d--, Uf(s.content) && d++),
              !(d > 0) && s.type === "text" && e.md.linkify.test(s.content))
            ) {
              for (
                u = s.content,
                  b = e.md.linkify.match(u),
                  c = [],
                  l = s.level,
                  f = 0,
                  b.length > 0 &&
                    b[0].index === 0 &&
                    i > 0 &&
                    r[i - 1].type === "text_special" &&
                    (b = b.slice(1)),
                  p = 0;
                p < b.length;
                p++
              )
                (h = b[p].url),
                  (x = e.md.normalizeLink(h)),
                  e.md.validateLink(x) &&
                    ((v = b[p].text),
                    b[p].schema
                      ? b[p].schema === "mailto:" && !/^mailto:/i.test(v)
                        ? (v = e.md
                            .normalizeLinkText("mailto:" + v)
                            .replace(/^mailto:/, ""))
                        : (v = e.md.normalizeLinkText(v))
                      : (v = e.md
                          .normalizeLinkText("http://" + v)
                          .replace(/^http:\/\//, "")),
                    (m = b[p].index),
                    m > f &&
                      ((o = new e.Token("text", "", 0)),
                      (o.content = u.slice(f, m)),
                      (o.level = l),
                      c.push(o)),
                    (o = new e.Token("link_open", "a", 1)),
                    (o.attrs = [["href", x]]),
                    (o.level = l++),
                    (o.markup = "linkify"),
                    (o.info = "auto"),
                    c.push(o),
                    (o = new e.Token("text", "", 0)),
                    (o.content = v),
                    (o.level = l),
                    c.push(o),
                    (o = new e.Token("link_close", "a", -1)),
                    (o.level = --l),
                    (o.markup = "linkify"),
                    (o.info = "auto"),
                    c.push(o),
                    (f = b[p].lastIndex));
              f < u.length &&
                ((o = new e.Token("text", "", 0)),
                (o.content = u.slice(f)),
                (o.level = l),
                c.push(o)),
                (g[n].children = r = Nf(r, i, c));
            }
          }
    }
  };
});
var Ms = y(($b, Os) => {
  "use strict";
  var Hs = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    Xf = /\((c|tm|r)\)/i,
    Vf = /\((c|tm|r)\)/gi,
    Jf = { c: "\xA9", r: "\xAE", tm: "\u2122" };
  function Zf(a, e) {
    return Jf[e.toLowerCase()];
  }
  function Qf(a) {
    var e,
      i,
      n = 0;
    for (e = a.length - 1; e >= 0; e--)
      (i = a[e]),
        i.type === "text" && !n && (i.content = i.content.replace(Vf, Zf)),
        i.type === "link_open" && i.info === "auto" && n--,
        i.type === "link_close" && i.info === "auto" && n++;
  }
  function Kf(a) {
    var e,
      i,
      n = 0;
    for (e = a.length - 1; e >= 0; e--)
      (i = a[e]),
        i.type === "text" &&
          !n &&
          Hs.test(i.content) &&
          (i.content = i.content
            .replace(/\+-/g, "\xB1")
            .replace(/\.{2,}/g, "\u2026")
            .replace(/([?!])…/g, "$1..")
            .replace(/([?!]){4,}/g, "$1$1$1")
            .replace(/,{2,}/g, ",")
            .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
            .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
            .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
        i.type === "link_open" && i.info === "auto" && n--,
        i.type === "link_close" && i.info === "auto" && n++;
  }
  Os.exports = function (e) {
    var i;
    if (!!e.md.options.typographer)
      for (i = e.tokens.length - 1; i >= 0; i--)
        e.tokens[i].type === "inline" &&
          (Xf.test(e.tokens[i].content) && Qf(e.tokens[i].children),
          Hs.test(e.tokens[i].content) && Kf(e.tokens[i].children));
  };
});
var Zs = y((jb, Js) => {
  "use strict";
  var Ns = z().isWhiteSpace,
    Gs = z().isPunctChar,
    Us = z().isMdAsciiPunct,
    Wf = /['"]/,
    Xs = /['"]/g,
    Vs = "\u2019";
  function zi(a, e, i) {
    return a.slice(0, e) + i + a.slice(e + 1);
  }
  function Yf(a, e) {
    var i, n, t, r, o, s, c, p, u, m, f, l, d, h, x, v, g, b, k, T, _;
    for (k = [], i = 0; i < a.length; i++) {
      for (
        n = a[i], c = a[i].level, g = k.length - 1;
        g >= 0 && !(k[g].level <= c);
        g--
      );
      if (((k.length = g + 1), n.type !== "text")) continue;
      (t = n.content), (o = 0), (s = t.length);
      e: for (; o < s && ((Xs.lastIndex = o), (r = Xs.exec(t)), !!r); ) {
        if (
          ((x = v = !0),
          (o = r.index + 1),
          (b = r[0] === "'"),
          (u = 32),
          r.index - 1 >= 0)
        )
          u = t.charCodeAt(r.index - 1);
        else
          for (
            g = i - 1;
            g >= 0 && !(a[g].type === "softbreak" || a[g].type === "hardbreak");
            g--
          )
            if (!!a[g].content) {
              u = a[g].content.charCodeAt(a[g].content.length - 1);
              break;
            }
        if (((m = 32), o < s)) m = t.charCodeAt(o);
        else
          for (
            g = i + 1;
            g < a.length &&
            !(a[g].type === "softbreak" || a[g].type === "hardbreak");
            g++
          )
            if (!!a[g].content) {
              m = a[g].content.charCodeAt(0);
              break;
            }
        if (
          ((f = Us(u) || Gs(String.fromCharCode(u))),
          (l = Us(m) || Gs(String.fromCharCode(m))),
          (d = Ns(u)),
          (h = Ns(m)),
          h ? (x = !1) : l && (d || f || (x = !1)),
          d ? (v = !1) : f && (h || l || (v = !1)),
          m === 34 && r[0] === '"' && u >= 48 && u <= 57 && (v = x = !1),
          x && v && ((x = f), (v = l)),
          !x && !v)
        ) {
          b && (n.content = zi(n.content, r.index, Vs));
          continue;
        }
        if (v) {
          for (g = k.length - 1; g >= 0 && ((p = k[g]), !(k[g].level < c)); g--)
            if (p.single === b && k[g].level === c) {
              (p = k[g]),
                b
                  ? ((T = e.md.options.quotes[2]), (_ = e.md.options.quotes[3]))
                  : ((T = e.md.options.quotes[0]),
                    (_ = e.md.options.quotes[1])),
                (n.content = zi(n.content, r.index, _)),
                (a[p.token].content = zi(a[p.token].content, p.pos, T)),
                (o += _.length - 1),
                p.token === i && (o += T.length - 1),
                (t = n.content),
                (s = t.length),
                (k.length = g);
              continue e;
            }
        }
        x
          ? k.push({ token: i, pos: r.index, single: b, level: c })
          : v && b && (n.content = zi(n.content, r.index, Vs));
      }
    }
  }
  Js.exports = function (e) {
    var i;
    if (!!e.md.options.typographer)
      for (i = e.tokens.length - 1; i >= 0; i--)
        e.tokens[i].type !== "inline" ||
          !Wf.test(e.tokens[i].content) ||
          Yf(e.tokens[i].children, e);
  };
});
var Ks = y((Rb, Qs) => {
  "use strict";
  Qs.exports = function (e) {
    var i,
      n,
      t,
      r,
      o,
      s,
      c = e.tokens;
    for (i = 0, n = c.length; i < n; i++)
      if (c[i].type === "inline") {
        for (t = c[i].children, o = t.length, r = 0; r < o; r++)
          t[r].type === "text_special" && (t[r].type = "text");
        for (r = s = 0; r < o; r++)
          t[r].type === "text" && r + 1 < o && t[r + 1].type === "text"
            ? (t[r + 1].content = t[r].content + t[r + 1].content)
            : (r !== s && (t[s] = t[r]), s++);
        r !== s && (t.length = s);
      }
  };
});
var Li = y((Fb, Ws) => {
  "use strict";
  function Be(a, e, i) {
    (this.type = a),
      (this.tag = e),
      (this.attrs = null),
      (this.map = null),
      (this.nesting = i),
      (this.level = 0),
      (this.children = null),
      (this.content = ""),
      (this.markup = ""),
      (this.info = ""),
      (this.meta = null),
      (this.block = !1),
      (this.hidden = !1);
  }
  Be.prototype.attrIndex = function (e) {
    var i, n, t;
    if (!this.attrs) return -1;
    for (i = this.attrs, n = 0, t = i.length; n < t; n++)
      if (i[n][0] === e) return n;
    return -1;
  };
  Be.prototype.attrPush = function (e) {
    this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
  };
  Be.prototype.attrSet = function (e, i) {
    var n = this.attrIndex(e),
      t = [e, i];
    n < 0 ? this.attrPush(t) : (this.attrs[n] = t);
  };
  Be.prototype.attrGet = function (e) {
    var i = this.attrIndex(e),
      n = null;
    return i >= 0 && (n = this.attrs[i][1]), n;
  };
  Be.prototype.attrJoin = function (e, i) {
    var n = this.attrIndex(e);
    n < 0
      ? this.attrPush([e, i])
      : (this.attrs[n][1] = this.attrs[n][1] + " " + i);
  };
  Ws.exports = Be;
});
var ic = y((Bb, ec) => {
  "use strict";
  var eh = Li();
  function Ys(a, e, i) {
    (this.src = a),
      (this.env = i),
      (this.tokens = []),
      (this.inlineMode = !1),
      (this.md = e);
  }
  Ys.prototype.Token = eh;
  ec.exports = Ys;
});
var nc = y((qb, ac) => {
  "use strict";
  var ih = qi(),
    ln = [
      ["normalize", js()],
      ["block", Fs()],
      ["inline", qs()],
      ["linkify", Ls()],
      ["replacements", Ms()],
      ["smartquotes", Zs()],
      ["text_join", Ks()],
    ];
  function un() {
    this.ruler = new ih();
    for (var a = 0; a < ln.length; a++) this.ruler.push(ln[a][0], ln[a][1]);
  }
  un.prototype.process = function (a) {
    var e, i, n;
    for (n = this.ruler.getRules(""), e = 0, i = n.length; e < i; e++) n[e](a);
  };
  un.prototype.State = ic();
  ac.exports = un;
});
var oc = y((zb, rc) => {
  "use strict";
  var dn = z().isSpace;
  function mn(a, e) {
    var i = a.bMarks[e] + a.tShift[e],
      n = a.eMarks[e];
    return a.src.slice(i, n);
  }
  function tc(a) {
    var e = [],
      i = 0,
      n = a.length,
      t,
      r = !1,
      o = 0,
      s = "";
    for (t = a.charCodeAt(i); i < n; )
      t === 124 &&
        (r
          ? ((s += a.substring(o, i - 1)), (o = i))
          : (e.push(s + a.substring(o, i)), (s = ""), (o = i + 1))),
        (r = t === 92),
        i++,
        (t = a.charCodeAt(i));
    return e.push(s + a.substring(o)), e;
  }
  rc.exports = function (e, i, n, t) {
    var r, o, s, c, p, u, m, f, l, d, h, x, v, g, b, k, T, _;
    if (
      i + 2 > n ||
      ((u = i + 1), e.sCount[u] < e.blkIndent) ||
      e.sCount[u] - e.blkIndent >= 4 ||
      ((s = e.bMarks[u] + e.tShift[u]), s >= e.eMarks[u]) ||
      ((T = e.src.charCodeAt(s++)), T !== 124 && T !== 45 && T !== 58) ||
      s >= e.eMarks[u] ||
      ((_ = e.src.charCodeAt(s++)),
      _ !== 124 && _ !== 45 && _ !== 58 && !dn(_)) ||
      (T === 45 && dn(_))
    )
      return !1;
    for (; s < e.eMarks[u]; ) {
      if (
        ((r = e.src.charCodeAt(s)), r !== 124 && r !== 45 && r !== 58 && !dn(r))
      )
        return !1;
      s++;
    }
    for (o = mn(e, i + 1), m = o.split("|"), d = [], c = 0; c < m.length; c++) {
      if (((h = m[c].trim()), !h)) {
        if (c === 0 || c === m.length - 1) continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(h)) return !1;
      h.charCodeAt(h.length - 1) === 58
        ? d.push(h.charCodeAt(0) === 58 ? "center" : "right")
        : h.charCodeAt(0) === 58
        ? d.push("left")
        : d.push("");
    }
    if (
      ((o = mn(e, i).trim()),
      o.indexOf("|") === -1 ||
        e.sCount[i] - e.blkIndent >= 4 ||
        ((m = tc(o)),
        m.length && m[0] === "" && m.shift(),
        m.length && m[m.length - 1] === "" && m.pop(),
        (f = m.length),
        f === 0 || f !== d.length))
    )
      return !1;
    if (t) return !0;
    for (
      g = e.parentType,
        e.parentType = "table",
        k = e.md.block.ruler.getRules("blockquote"),
        l = e.push("table_open", "table", 1),
        l.map = x = [i, 0],
        l = e.push("thead_open", "thead", 1),
        l.map = [i, i + 1],
        l = e.push("tr_open", "tr", 1),
        l.map = [i, i + 1],
        c = 0;
      c < m.length;
      c++
    )
      (l = e.push("th_open", "th", 1)),
        d[c] && (l.attrs = [["style", "text-align:" + d[c]]]),
        (l = e.push("inline", "", 0)),
        (l.content = m[c].trim()),
        (l.children = []),
        (l = e.push("th_close", "th", -1));
    for (
      l = e.push("tr_close", "tr", -1),
        l = e.push("thead_close", "thead", -1),
        u = i + 2;
      u < n && !(e.sCount[u] < e.blkIndent);
      u++
    ) {
      for (b = !1, c = 0, p = k.length; c < p; c++)
        if (k[c](e, u, n, !0)) {
          b = !0;
          break;
        }
      if (b || ((o = mn(e, u).trim()), !o) || e.sCount[u] - e.blkIndent >= 4)
        break;
      for (
        m = tc(o),
          m.length && m[0] === "" && m.shift(),
          m.length && m[m.length - 1] === "" && m.pop(),
          u === i + 2 &&
            ((l = e.push("tbody_open", "tbody", 1)), (l.map = v = [i + 2, 0])),
          l = e.push("tr_open", "tr", 1),
          l.map = [u, u + 1],
          c = 0;
        c < f;
        c++
      )
        (l = e.push("td_open", "td", 1)),
          d[c] && (l.attrs = [["style", "text-align:" + d[c]]]),
          (l = e.push("inline", "", 0)),
          (l.content = m[c] ? m[c].trim() : ""),
          (l.children = []),
          (l = e.push("td_close", "td", -1));
      l = e.push("tr_close", "tr", -1);
    }
    return (
      v && ((l = e.push("tbody_close", "tbody", -1)), (v[1] = u)),
      (l = e.push("table_close", "table", -1)),
      (x[1] = u),
      (e.parentType = g),
      (e.line = u),
      !0
    );
  };
});
var cc = y((Lb, sc) => {
  "use strict";
  sc.exports = function (e, i, n) {
    var t, r, o;
    if (e.sCount[i] - e.blkIndent < 4) return !1;
    for (r = t = i + 1; t < n; ) {
      if (e.isEmpty(t)) {
        t++;
        continue;
      }
      if (e.sCount[t] - e.blkIndent >= 4) {
        t++, (r = t);
        continue;
      }
      break;
    }
    return (
      (e.line = r),
      (o = e.push("code_block", "code", 0)),
      (o.content =
        e.getLines(i, r, 4 + e.blkIndent, !1) +
        `
`),
      (o.map = [i, e.line]),
      !0
    );
  };
});
var lc = y((Hb, pc) => {
  "use strict";
  pc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p,
      u,
      m,
      f = !1,
      l = e.bMarks[i] + e.tShift[i],
      d = e.eMarks[i];
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      l + 3 > d ||
      ((r = e.src.charCodeAt(l)), r !== 126 && r !== 96) ||
      ((p = l), (l = e.skipChars(l, r)), (o = l - p), o < 3) ||
      ((m = e.src.slice(p, l)),
      (s = e.src.slice(l, d)),
      r === 96 && s.indexOf(String.fromCharCode(r)) >= 0)
    )
      return !1;
    if (t) return !0;
    for (
      c = i;
      c++,
        !(
          c >= n ||
          ((l = p = e.bMarks[c] + e.tShift[c]),
          (d = e.eMarks[c]),
          l < d && e.sCount[c] < e.blkIndent)
        );

    )
      if (
        e.src.charCodeAt(l) === r &&
        !(e.sCount[c] - e.blkIndent >= 4) &&
        ((l = e.skipChars(l, r)),
        !(l - p < o) && ((l = e.skipSpaces(l)), !(l < d)))
      ) {
        f = !0;
        break;
      }
    return (
      (o = e.sCount[i]),
      (e.line = c + (f ? 1 : 0)),
      (u = e.push("fence", "code", 0)),
      (u.info = s),
      (u.content = e.getLines(i + 1, c, o, !0)),
      (u.markup = m),
      (u.map = [i, e.line]),
      !0
    );
  };
});
var mc = y((Ob, dc) => {
  "use strict";
  var uc = z().isSpace;
  dc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l,
      d,
      h,
      x,
      v,
      g,
      b,
      k,
      T,
      _,
      P,
      S,
      ee = e.lineMax,
      B = e.bMarks[i] + e.tShift[i],
      A = e.eMarks[i];
    if (e.sCount[i] - e.blkIndent >= 4 || e.src.charCodeAt(B++) !== 62)
      return !1;
    if (t) return !0;
    for (
      c = l = e.sCount[i] + 1,
        e.src.charCodeAt(B) === 32
          ? (B++, c++, l++, (r = !1), (k = !0))
          : e.src.charCodeAt(B) === 9
          ? ((k = !0),
            (e.bsCount[i] + l) % 4 === 3 ? (B++, c++, l++, (r = !1)) : (r = !0))
          : (k = !1),
        d = [e.bMarks[i]],
        e.bMarks[i] = B;
      B < A && ((o = e.src.charCodeAt(B)), uc(o));

    ) {
      o === 9 ? (l += 4 - ((l + e.bsCount[i] + (r ? 1 : 0)) % 4)) : l++;
      B++;
    }
    for (
      h = [e.bsCount[i]],
        e.bsCount[i] = e.sCount[i] + 1 + (k ? 1 : 0),
        u = B >= A,
        g = [e.sCount[i]],
        e.sCount[i] = l - c,
        b = [e.tShift[i]],
        e.tShift[i] = B - e.bMarks[i],
        _ = e.md.block.ruler.getRules("blockquote"),
        v = e.parentType,
        e.parentType = "blockquote",
        f = i + 1;
      f < n &&
      ((S = e.sCount[f] < e.blkIndent),
      (B = e.bMarks[f] + e.tShift[f]),
      (A = e.eMarks[f]),
      !(B >= A));
      f++
    ) {
      if (e.src.charCodeAt(B++) === 62 && !S) {
        for (
          c = l = e.sCount[f] + 1,
            e.src.charCodeAt(B) === 32
              ? (B++, c++, l++, (r = !1), (k = !0))
              : e.src.charCodeAt(B) === 9
              ? ((k = !0),
                (e.bsCount[f] + l) % 4 === 3
                  ? (B++, c++, l++, (r = !1))
                  : (r = !0))
              : (k = !1),
            d.push(e.bMarks[f]),
            e.bMarks[f] = B;
          B < A && ((o = e.src.charCodeAt(B)), uc(o));

        ) {
          o === 9 ? (l += 4 - ((l + e.bsCount[f] + (r ? 1 : 0)) % 4)) : l++;
          B++;
        }
        (u = B >= A),
          h.push(e.bsCount[f]),
          (e.bsCount[f] = e.sCount[f] + 1 + (k ? 1 : 0)),
          g.push(e.sCount[f]),
          (e.sCount[f] = l - c),
          b.push(e.tShift[f]),
          (e.tShift[f] = B - e.bMarks[f]);
        continue;
      }
      if (u) break;
      for (T = !1, s = 0, p = _.length; s < p; s++)
        if (_[s](e, f, n, !0)) {
          T = !0;
          break;
        }
      if (T) {
        (e.lineMax = f),
          e.blkIndent !== 0 &&
            (d.push(e.bMarks[f]),
            h.push(e.bsCount[f]),
            b.push(e.tShift[f]),
            g.push(e.sCount[f]),
            (e.sCount[f] -= e.blkIndent));
        break;
      }
      d.push(e.bMarks[f]),
        h.push(e.bsCount[f]),
        b.push(e.tShift[f]),
        g.push(e.sCount[f]),
        (e.sCount[f] = -1);
    }
    for (
      x = e.blkIndent,
        e.blkIndent = 0,
        P = e.push("blockquote_open", "blockquote", 1),
        P.markup = ">",
        P.map = m = [i, 0],
        e.md.block.tokenize(e, i, f),
        P = e.push("blockquote_close", "blockquote", -1),
        P.markup = ">",
        e.lineMax = ee,
        e.parentType = v,
        m[1] = e.line,
        s = 0;
      s < b.length;
      s++
    )
      (e.bMarks[s + i] = d[s]),
        (e.tShift[s + i] = b[s]),
        (e.sCount[s + i] = g[s]),
        (e.bsCount[s + i] = h[s]);
    return (e.blkIndent = x), !0;
  };
});
var hc = y((Mb, fc) => {
  "use strict";
  var ah = z().isSpace;
  fc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p = e.bMarks[i] + e.tShift[i],
      u = e.eMarks[i];
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      ((r = e.src.charCodeAt(p++)), r !== 42 && r !== 45 && r !== 95)
    )
      return !1;
    for (o = 1; p < u; ) {
      if (((s = e.src.charCodeAt(p++)), s !== r && !ah(s))) return !1;
      s === r && o++;
    }
    return o < 3
      ? !1
      : (t ||
          ((e.line = i + 1),
          (c = e.push("hr", "hr", 0)),
          (c.map = [i, e.line]),
          (c.markup = Array(o + 1).join(String.fromCharCode(r)))),
        !0);
  };
});
var yc = y((Nb, bc) => {
  "use strict";
  var vc = z().isSpace;
  function xc(a, e) {
    var i, n, t, r;
    return (
      (n = a.bMarks[e] + a.tShift[e]),
      (t = a.eMarks[e]),
      (i = a.src.charCodeAt(n++)),
      (i !== 42 && i !== 45 && i !== 43) ||
      (n < t && ((r = a.src.charCodeAt(n)), !vc(r)))
        ? -1
        : n
    );
  }
  function gc(a, e) {
    var i,
      n = a.bMarks[e] + a.tShift[e],
      t = n,
      r = a.eMarks[e];
    if (t + 1 >= r || ((i = a.src.charCodeAt(t++)), i < 48 || i > 57))
      return -1;
    for (;;) {
      if (t >= r) return -1;
      if (((i = a.src.charCodeAt(t++)), i >= 48 && i <= 57)) {
        if (t - n >= 10) return -1;
        continue;
      }
      if (i === 41 || i === 46) break;
      return -1;
    }
    return t < r && ((i = a.src.charCodeAt(t)), !vc(i)) ? -1 : t;
  }
  function nh(a, e) {
    var i,
      n,
      t = a.level + 2;
    for (i = e + 2, n = a.tokens.length - 2; i < n; i++)
      a.tokens[i].level === t &&
        a.tokens[i].type === "paragraph_open" &&
        ((a.tokens[i + 2].hidden = !0), (a.tokens[i].hidden = !0), (i += 2));
  }
  bc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l,
      d,
      h,
      x,
      v,
      g,
      b,
      k,
      T,
      _,
      P,
      S,
      ee,
      B,
      A,
      E,
      w,
      I,
      C,
      D,
      $ = !1,
      q = !0;
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      (e.listIndent >= 0 &&
        e.sCount[i] - e.listIndent >= 4 &&
        e.sCount[i] < e.blkIndent)
    )
      return !1;
    if (
      (t &&
        e.parentType === "paragraph" &&
        e.sCount[i] >= e.blkIndent &&
        ($ = !0),
      (A = gc(e, i)) >= 0)
    ) {
      if (
        ((m = !0),
        (w = e.bMarks[i] + e.tShift[i]),
        (v = Number(e.src.slice(w, A - 1))),
        $ && v !== 1)
      )
        return !1;
    } else if ((A = xc(e, i)) >= 0) m = !1;
    else return !1;
    if ($ && e.skipSpaces(A) >= e.eMarks[i]) return !1;
    if (((x = e.src.charCodeAt(A - 1)), t)) return !0;
    for (
      h = e.tokens.length,
        m
          ? ((D = e.push("ordered_list_open", "ol", 1)),
            v !== 1 && (D.attrs = [["start", v]]))
          : (D = e.push("bullet_list_open", "ul", 1)),
        D.map = d = [i, 0],
        D.markup = String.fromCharCode(x),
        b = i,
        E = !1,
        C = e.md.block.ruler.getRules("list"),
        _ = e.parentType,
        e.parentType = "list";
      b < n;

    ) {
      for (
        B = A,
          g = e.eMarks[b],
          u = k = e.sCount[b] + A - (e.bMarks[i] + e.tShift[i]);
        B < g;

      ) {
        if (((r = e.src.charCodeAt(B)), r === 9))
          k += 4 - ((k + e.bsCount[b]) % 4);
        else if (r === 32) k++;
        else break;
        B++;
      }
      if (
        ((o = B),
        o >= g ? (p = 1) : (p = k - u),
        p > 4 && (p = 1),
        (c = u + p),
        (D = e.push("list_item_open", "li", 1)),
        (D.markup = String.fromCharCode(x)),
        (D.map = f = [i, 0]),
        m && (D.info = e.src.slice(w, A - 1)),
        (ee = e.tight),
        (S = e.tShift[i]),
        (P = e.sCount[i]),
        (T = e.listIndent),
        (e.listIndent = e.blkIndent),
        (e.blkIndent = c),
        (e.tight = !0),
        (e.tShift[i] = o - e.bMarks[i]),
        (e.sCount[i] = k),
        o >= g && e.isEmpty(i + 1)
          ? (e.line = Math.min(e.line + 2, n))
          : e.md.block.tokenize(e, i, n, !0),
        (!e.tight || E) && (q = !1),
        (E = e.line - i > 1 && e.isEmpty(e.line - 1)),
        (e.blkIndent = e.listIndent),
        (e.listIndent = T),
        (e.tShift[i] = S),
        (e.sCount[i] = P),
        (e.tight = ee),
        (D = e.push("list_item_close", "li", -1)),
        (D.markup = String.fromCharCode(x)),
        (b = i = e.line),
        (f[1] = b),
        (o = e.bMarks[i]),
        b >= n || e.sCount[b] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4)
      )
        break;
      for (I = !1, s = 0, l = C.length; s < l; s++)
        if (C[s](e, b, n, !0)) {
          I = !0;
          break;
        }
      if (I) break;
      if (m) {
        if (((A = gc(e, b)), A < 0)) break;
        w = e.bMarks[b] + e.tShift[b];
      } else if (((A = xc(e, b)), A < 0)) break;
      if (x !== e.src.charCodeAt(A - 1)) break;
    }
    return (
      m
        ? (D = e.push("ordered_list_close", "ol", -1))
        : (D = e.push("bullet_list_close", "ul", -1)),
      (D.markup = String.fromCharCode(x)),
      (d[1] = b),
      (e.line = b),
      (e.parentType = _),
      q && nh(e, h),
      !0
    );
  };
});
var wc = y((Gb, _c) => {
  "use strict";
  var th = z().normalizeReference,
    Hi = z().isSpace;
  _c.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l,
      d,
      h,
      x,
      v,
      g,
      b,
      k,
      T = 0,
      _ = e.bMarks[i] + e.tShift[i],
      P = e.eMarks[i],
      S = i + 1;
    if (e.sCount[i] - e.blkIndent >= 4 || e.src.charCodeAt(_) !== 91) return !1;
    for (; ++_ < P; )
      if (e.src.charCodeAt(_) === 93 && e.src.charCodeAt(_ - 1) !== 92) {
        if (_ + 1 === P || e.src.charCodeAt(_ + 1) !== 58) return !1;
        break;
      }
    for (
      c = e.lineMax,
        b = e.md.block.ruler.getRules("reference"),
        d = e.parentType,
        e.parentType = "reference";
      S < c && !e.isEmpty(S);
      S++
    )
      if (!(e.sCount[S] - e.blkIndent > 3) && !(e.sCount[S] < 0)) {
        for (g = !1, u = 0, m = b.length; u < m; u++)
          if (b[u](e, S, c, !0)) {
            g = !0;
            break;
          }
        if (g) break;
      }
    for (
      v = e.getLines(i, S, e.blkIndent, !1).trim(), P = v.length, _ = 1;
      _ < P;
      _++
    ) {
      if (((r = v.charCodeAt(_)), r === 91)) return !1;
      if (r === 93) {
        l = _;
        break;
      } else
        r === 10
          ? T++
          : r === 92 && (_++, _ < P && v.charCodeAt(_) === 10 && T++);
    }
    if (l < 0 || v.charCodeAt(l + 1) !== 58) return !1;
    for (_ = l + 2; _ < P; _++)
      if (((r = v.charCodeAt(_)), r === 10)) T++;
      else if (!Hi(r)) break;
    if (
      ((h = e.md.helpers.parseLinkDestination(v, _, P)),
      !h.ok || ((p = e.md.normalizeLink(h.str)), !e.md.validateLink(p)))
    )
      return !1;
    for (_ = h.pos, T += h.lines, o = _, s = T, x = _; _ < P; _++)
      if (((r = v.charCodeAt(_)), r === 10)) T++;
      else if (!Hi(r)) break;
    for (
      h = e.md.helpers.parseLinkTitle(v, _, P),
        _ < P && x !== _ && h.ok
          ? ((k = h.str), (_ = h.pos), (T += h.lines))
          : ((k = ""), (_ = o), (T = s));
      _ < P && ((r = v.charCodeAt(_)), !!Hi(r));

    )
      _++;
    if (_ < P && v.charCodeAt(_) !== 10 && k)
      for (k = "", _ = o, T = s; _ < P && ((r = v.charCodeAt(_)), !!Hi(r)); )
        _++;
    return (_ < P && v.charCodeAt(_) !== 10) || ((f = th(v.slice(1, l))), !f)
      ? !1
      : (t ||
          (typeof e.env.references > "u" && (e.env.references = {}),
          typeof e.env.references[f] > "u" &&
            (e.env.references[f] = { title: k, href: p }),
          (e.parentType = d),
          (e.line = i + T + 1)),
        !0);
  };
});
var Cc = y((Ub, kc) => {
  "use strict";
  kc.exports = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ];
});
var hn = y((Xb, fn) => {
  "use strict";
  var rh = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
    oh = "[^\"'=<>`\\x00-\\x20]+",
    sh = "'[^']*'",
    ch = '"[^"]*"',
    ph = "(?:" + oh + "|" + sh + "|" + ch + ")",
    lh = "(?:\\s+" + rh + "(?:\\s*=\\s*" + ph + ")?)",
    Ec = "<[A-Za-z][A-Za-z0-9\\-]*" + lh + "*\\s*\\/?>",
    Ac = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    uh = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
    dh = "<[?][\\s\\S]*?[?]>",
    mh = "<![A-Z]+\\s+[^>]*>",
    fh = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    hh = new RegExp(
      "^(?:" + Ec + "|" + Ac + "|" + uh + "|" + dh + "|" + mh + "|" + fh + ")"
    ),
    xh = new RegExp("^(?:" + Ec + "|" + Ac + ")");
  fn.exports.HTML_TAG_RE = hh;
  fn.exports.HTML_OPEN_CLOSE_TAG_RE = xh;
});
var Pc = y((Vb, Dc) => {
  "use strict";
  var gh = Cc(),
    vh = hn().HTML_OPEN_CLOSE_TAG_RE,
    qe = [
      [
        /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
        /<\/(script|pre|style|textarea)>/i,
        !0,
      ],
      [/^<!--/, /-->/, !0],
      [/^<\?/, /\?>/, !0],
      [/^<![A-Z]/, />/, !0],
      [/^<!\[CDATA\[/, /\]\]>/, !0],
      [new RegExp("^</?(" + gh.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
      [new RegExp(vh.source + "\\s*$"), /^$/, !1],
    ];
  Dc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p = e.bMarks[i] + e.tShift[i],
      u = e.eMarks[i];
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      !e.md.options.html ||
      e.src.charCodeAt(p) !== 60
    )
      return !1;
    for (c = e.src.slice(p, u), r = 0; r < qe.length && !qe[r][0].test(c); r++);
    if (r === qe.length) return !1;
    if (t) return qe[r][2];
    if (((o = i + 1), !qe[r][1].test(c))) {
      for (; o < n && !(e.sCount[o] < e.blkIndent); o++)
        if (
          ((p = e.bMarks[o] + e.tShift[o]),
          (u = e.eMarks[o]),
          (c = e.src.slice(p, u)),
          qe[r][1].test(c))
        ) {
          c.length !== 0 && o++;
          break;
        }
    }
    return (
      (e.line = o),
      (s = e.push("html_block", "", 0)),
      (s.map = [i, o]),
      (s.content = e.getLines(i, o, e.blkIndent, !0)),
      !0
    );
  };
});
var Ic = y((Jb, Tc) => {
  "use strict";
  var Sc = z().isSpace;
  Tc.exports = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p = e.bMarks[i] + e.tShift[i],
      u = e.eMarks[i];
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      ((r = e.src.charCodeAt(p)), r !== 35 || p >= u)
    )
      return !1;
    for (o = 1, r = e.src.charCodeAt(++p); r === 35 && p < u && o <= 6; )
      o++, (r = e.src.charCodeAt(++p));
    return o > 6 || (p < u && !Sc(r))
      ? !1
      : (t ||
          ((u = e.skipSpacesBack(u, p)),
          (s = e.skipCharsBack(u, 35, p)),
          s > p && Sc(e.src.charCodeAt(s - 1)) && (u = s),
          (e.line = i + 1),
          (c = e.push("heading_open", "h" + String(o), 1)),
          (c.markup = "########".slice(0, o)),
          (c.map = [i, e.line]),
          (c = e.push("inline", "", 0)),
          (c.content = e.src.slice(p, u).trim()),
          (c.map = [i, e.line]),
          (c.children = []),
          (c = e.push("heading_close", "h" + String(o), -1)),
          (c.markup = "########".slice(0, o))),
        !0);
  };
});
var jc = y((Zb, $c) => {
  "use strict";
  $c.exports = function (e, i, n) {
    var t,
      r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l = i + 1,
      d,
      h = e.md.block.ruler.getRules("paragraph");
    if (e.sCount[i] - e.blkIndent >= 4) return !1;
    for (
      d = e.parentType, e.parentType = "paragraph";
      l < n && !e.isEmpty(l);
      l++
    )
      if (!(e.sCount[l] - e.blkIndent > 3)) {
        if (
          e.sCount[l] >= e.blkIndent &&
          ((p = e.bMarks[l] + e.tShift[l]),
          (u = e.eMarks[l]),
          p < u &&
            ((f = e.src.charCodeAt(p)),
            (f === 45 || f === 61) &&
              ((p = e.skipChars(p, f)), (p = e.skipSpaces(p)), p >= u)))
        ) {
          m = f === 61 ? 1 : 2;
          break;
        }
        if (!(e.sCount[l] < 0)) {
          for (r = !1, o = 0, s = h.length; o < s; o++)
            if (h[o](e, l, n, !0)) {
              r = !0;
              break;
            }
          if (r) break;
        }
      }
    return m
      ? ((t = e.getLines(i, l, e.blkIndent, !1).trim()),
        (e.line = l + 1),
        (c = e.push("heading_open", "h" + String(m), 1)),
        (c.markup = String.fromCharCode(f)),
        (c.map = [i, e.line]),
        (c = e.push("inline", "", 0)),
        (c.content = t),
        (c.map = [i, e.line - 1]),
        (c.children = []),
        (c = e.push("heading_close", "h" + String(m), -1)),
        (c.markup = String.fromCharCode(f)),
        (e.parentType = d),
        !0)
      : !1;
  };
});
var Fc = y((Qb, Rc) => {
  "use strict";
  Rc.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c,
      p = i + 1,
      u = e.md.block.ruler.getRules("paragraph"),
      m = e.lineMax;
    for (
      c = e.parentType, e.parentType = "paragraph";
      p < m && !e.isEmpty(p);
      p++
    )
      if (!(e.sCount[p] - e.blkIndent > 3) && !(e.sCount[p] < 0)) {
        for (t = !1, r = 0, o = u.length; r < o; r++)
          if (u[r](e, p, m, !0)) {
            t = !0;
            break;
          }
        if (t) break;
      }
    return (
      (n = e.getLines(i, p, e.blkIndent, !1).trim()),
      (e.line = p),
      (s = e.push("paragraph_open", "p", 1)),
      (s.map = [i, e.line]),
      (s = e.push("inline", "", 0)),
      (s.content = n),
      (s.map = [i, e.line]),
      (s.children = []),
      (s = e.push("paragraph_close", "p", -1)),
      (e.parentType = c),
      !0
    );
  };
});
var zc = y((Kb, qc) => {
  "use strict";
  var Bc = Li(),
    Oi = z().isSpace;
  function se(a, e, i, n) {
    var t, r, o, s, c, p, u, m;
    for (
      this.src = a,
        this.md = e,
        this.env = i,
        this.tokens = n,
        this.bMarks = [],
        this.eMarks = [],
        this.tShift = [],
        this.sCount = [],
        this.bsCount = [],
        this.blkIndent = 0,
        this.line = 0,
        this.lineMax = 0,
        this.tight = !1,
        this.ddIndent = -1,
        this.listIndent = -1,
        this.parentType = "root",
        this.level = 0,
        this.result = "",
        r = this.src,
        m = !1,
        o = s = p = u = 0,
        c = r.length;
      s < c;
      s++
    ) {
      if (((t = r.charCodeAt(s)), !m))
        if (Oi(t)) {
          p++, t === 9 ? (u += 4 - (u % 4)) : u++;
          continue;
        } else m = !0;
      (t === 10 || s === c - 1) &&
        (t !== 10 && s++,
        this.bMarks.push(o),
        this.eMarks.push(s),
        this.tShift.push(p),
        this.sCount.push(u),
        this.bsCount.push(0),
        (m = !1),
        (p = 0),
        (u = 0),
        (o = s + 1));
    }
    this.bMarks.push(r.length),
      this.eMarks.push(r.length),
      this.tShift.push(0),
      this.sCount.push(0),
      this.bsCount.push(0),
      (this.lineMax = this.bMarks.length - 1);
  }
  se.prototype.push = function (a, e, i) {
    var n = new Bc(a, e, i);
    return (
      (n.block = !0),
      i < 0 && this.level--,
      (n.level = this.level),
      i > 0 && this.level++,
      this.tokens.push(n),
      n
    );
  };
  se.prototype.isEmpty = function (e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  };
  se.prototype.skipEmptyLines = function (e) {
    for (
      var i = this.lineMax;
      e < i && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
      e++
    );
    return e;
  };
  se.prototype.skipSpaces = function (e) {
    for (
      var i, n = this.src.length;
      e < n && ((i = this.src.charCodeAt(e)), !!Oi(i));
      e++
    );
    return e;
  };
  se.prototype.skipSpacesBack = function (e, i) {
    if (e <= i) return e;
    for (; e > i; ) if (!Oi(this.src.charCodeAt(--e))) return e + 1;
    return e;
  };
  se.prototype.skipChars = function (e, i) {
    for (var n = this.src.length; e < n && this.src.charCodeAt(e) === i; e++);
    return e;
  };
  se.prototype.skipCharsBack = function (e, i, n) {
    if (e <= n) return e;
    for (; e > n; ) if (i !== this.src.charCodeAt(--e)) return e + 1;
    return e;
  };
  se.prototype.getLines = function (e, i, n, t) {
    var r,
      o,
      s,
      c,
      p,
      u,
      m,
      f = e;
    if (e >= i) return "";
    for (u = new Array(i - e), r = 0; f < i; f++, r++) {
      for (
        o = 0,
          m = c = this.bMarks[f],
          f + 1 < i || t ? (p = this.eMarks[f] + 1) : (p = this.eMarks[f]);
        c < p && o < n;

      ) {
        if (((s = this.src.charCodeAt(c)), Oi(s)))
          s === 9 ? (o += 4 - ((o + this.bsCount[f]) % 4)) : o++;
        else if (c - m < this.tShift[f]) o++;
        else break;
        c++;
      }
      o > n
        ? (u[r] = new Array(o - n + 1).join(" ") + this.src.slice(c, p))
        : (u[r] = this.src.slice(c, p));
    }
    return u.join("");
  };
  se.prototype.Token = Bc;
  qc.exports = se;
});
var Hc = y((Wb, Lc) => {
  "use strict";
  var bh = qi(),
    Mi = [
      ["table", oc(), ["paragraph", "reference"]],
      ["code", cc()],
      ["fence", lc(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", mc(), ["paragraph", "reference", "blockquote", "list"]],
      ["hr", hc(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", yc(), ["paragraph", "reference", "blockquote"]],
      ["reference", wc()],
      ["html_block", Pc(), ["paragraph", "reference", "blockquote"]],
      ["heading", Ic(), ["paragraph", "reference", "blockquote"]],
      ["lheading", jc()],
      ["paragraph", Fc()],
    ];
  function Ni() {
    this.ruler = new bh();
    for (var a = 0; a < Mi.length; a++)
      this.ruler.push(Mi[a][0], Mi[a][1], { alt: (Mi[a][2] || []).slice() });
  }
  Ni.prototype.tokenize = function (a, e, i) {
    for (
      var n,
        t,
        r = this.ruler.getRules(""),
        o = r.length,
        s = e,
        c = !1,
        p = a.md.options.maxNesting;
      s < i &&
      ((a.line = s = a.skipEmptyLines(s)),
      !(s >= i || a.sCount[s] < a.blkIndent));

    ) {
      if (a.level >= p) {
        a.line = i;
        break;
      }
      for (t = 0; t < o && ((n = r[t](a, s, i, !1)), !n); t++);
      (a.tight = !c),
        a.isEmpty(a.line - 1) && (c = !0),
        (s = a.line),
        s < i && a.isEmpty(s) && ((c = !0), s++, (a.line = s));
    }
  };
  Ni.prototype.parse = function (a, e, i, n) {
    var t;
    !a ||
      ((t = new this.State(a, e, i, n)), this.tokenize(t, t.line, t.lineMax));
  };
  Ni.prototype.State = zc();
  Lc.exports = Ni;
});
var Mc = y((Yb, Oc) => {
  "use strict";
  function yh(a) {
    switch (a) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  Oc.exports = function (e, i) {
    for (var n = e.pos; n < e.posMax && !yh(e.src.charCodeAt(n)); ) n++;
    return n === e.pos
      ? !1
      : (i || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0);
  };
});
var Gc = y((e0, Nc) => {
  "use strict";
  var _h = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  Nc.exports = function (e, i) {
    var n, t, r, o, s, c, p, u;
    return !e.md.options.linkify ||
      e.linkLevel > 0 ||
      ((n = e.pos), (t = e.posMax), n + 3 > t) ||
      e.src.charCodeAt(n) !== 58 ||
      e.src.charCodeAt(n + 1) !== 47 ||
      e.src.charCodeAt(n + 2) !== 47 ||
      ((r = e.pending.match(_h)), !r) ||
      ((o = r[1]),
      (s = e.md.linkify.matchAtStart(e.src.slice(n - o.length))),
      !s) ||
      ((c = s.url),
      (c = c.replace(/\*+$/, "")),
      (p = e.md.normalizeLink(c)),
      !e.md.validateLink(p))
      ? !1
      : (i ||
          ((e.pending = e.pending.slice(0, -o.length)),
          (u = e.push("link_open", "a", 1)),
          (u.attrs = [["href", p]]),
          (u.markup = "linkify"),
          (u.info = "auto"),
          (u = e.push("text", "", 0)),
          (u.content = e.md.normalizeLinkText(c)),
          (u = e.push("link_close", "a", -1)),
          (u.markup = "linkify"),
          (u.info = "auto")),
        (e.pos += c.length - o.length),
        !0);
  };
});
var Xc = y((i0, Uc) => {
  "use strict";
  var wh = z().isSpace;
  Uc.exports = function (e, i) {
    var n,
      t,
      r,
      o = e.pos;
    if (e.src.charCodeAt(o) !== 10) return !1;
    if (((n = e.pending.length - 1), (t = e.posMax), !i))
      if (n >= 0 && e.pending.charCodeAt(n) === 32)
        if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
          for (r = n - 1; r >= 1 && e.pending.charCodeAt(r - 1) === 32; ) r--;
          (e.pending = e.pending.slice(0, r)), e.push("hardbreak", "br", 0);
        } else
          (e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0);
      else e.push("softbreak", "br", 0);
    for (o++; o < t && wh(e.src.charCodeAt(o)); ) o++;
    return (e.pos = o), !0;
  };
});
var Jc = y((a0, Vc) => {
  "use strict";
  var kh = z().isSpace,
    gn = [];
  for (xn = 0; xn < 256; xn++) gn.push(0);
  var xn;
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (a) {
    gn[a.charCodeAt(0)] = 1;
  });
  Vc.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c = e.pos,
      p = e.posMax;
    if (e.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (((n = e.src.charCodeAt(c)), n === 10)) {
      for (
        i || e.push("hardbreak", "br", 0), c++;
        c < p && ((n = e.src.charCodeAt(c)), !!kh(n));

      )
        c++;
      return (e.pos = c), !0;
    }
    return (
      (o = e.src[c]),
      n >= 55296 &&
        n <= 56319 &&
        c + 1 < p &&
        ((t = e.src.charCodeAt(c + 1)),
        t >= 56320 && t <= 57343 && ((o += e.src[c + 1]), c++)),
      (r = "\\" + o),
      i ||
        ((s = e.push("text_special", "", 0)),
        n < 256 && gn[n] !== 0 ? (s.content = o) : (s.content = r),
        (s.markup = r),
        (s.info = "escape")),
      (e.pos = c + 1),
      !0
    );
  };
});
var Qc = y((n0, Zc) => {
  "use strict";
  Zc.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c,
      p,
      u,
      m = e.pos,
      f = e.src.charCodeAt(m);
    if (f !== 96) return !1;
    for (n = m, m++, t = e.posMax; m < t && e.src.charCodeAt(m) === 96; ) m++;
    if (
      ((r = e.src.slice(n, m)),
      (p = r.length),
      e.backticksScanned && (e.backticks[p] || 0) <= n)
    )
      return i || (e.pending += r), (e.pos += p), !0;
    for (s = c = m; (s = e.src.indexOf("`", c)) !== -1; ) {
      for (c = s + 1; c < t && e.src.charCodeAt(c) === 96; ) c++;
      if (((u = c - s), u === p))
        return (
          i ||
            ((o = e.push("code_inline", "code", 0)),
            (o.markup = r),
            (o.content = e.src
              .slice(m, s)
              .replace(/\n/g, " ")
              .replace(/^ (.+) $/, "$1"))),
          (e.pos = c),
          !0
        );
      e.backticks[u] = s;
    }
    return (e.backticksScanned = !0), i || (e.pending += r), (e.pos += p), !0;
  };
});
var bn = y((t0, vn) => {
  "use strict";
  vn.exports.tokenize = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c = e.pos,
      p = e.src.charCodeAt(c);
    if (
      i ||
      p !== 126 ||
      ((t = e.scanDelims(e.pos, !0)),
      (o = t.length),
      (s = String.fromCharCode(p)),
      o < 2)
    )
      return !1;
    for (
      o % 2 && ((r = e.push("text", "", 0)), (r.content = s), o--), n = 0;
      n < o;
      n += 2
    )
      (r = e.push("text", "", 0)),
        (r.content = s + s),
        e.delimiters.push({
          marker: p,
          length: 0,
          token: e.tokens.length - 1,
          end: -1,
          open: t.can_open,
          close: t.can_close,
        });
    return (e.pos += t.length), !0;
  };
  function Kc(a, e) {
    var i,
      n,
      t,
      r,
      o,
      s = [],
      c = e.length;
    for (i = 0; i < c; i++)
      (t = e[i]),
        t.marker === 126 &&
          t.end !== -1 &&
          ((r = e[t.end]),
          (o = a.tokens[t.token]),
          (o.type = "s_open"),
          (o.tag = "s"),
          (o.nesting = 1),
          (o.markup = "~~"),
          (o.content = ""),
          (o = a.tokens[r.token]),
          (o.type = "s_close"),
          (o.tag = "s"),
          (o.nesting = -1),
          (o.markup = "~~"),
          (o.content = ""),
          a.tokens[r.token - 1].type === "text" &&
            a.tokens[r.token - 1].content === "~" &&
            s.push(r.token - 1));
    for (; s.length; ) {
      for (
        i = s.pop(), n = i + 1;
        n < a.tokens.length && a.tokens[n].type === "s_close";

      )
        n++;
      n--,
        i !== n &&
          ((o = a.tokens[n]), (a.tokens[n] = a.tokens[i]), (a.tokens[i] = o));
    }
  }
  vn.exports.postProcess = function (e) {
    var i,
      n = e.tokens_meta,
      t = e.tokens_meta.length;
    for (Kc(e, e.delimiters), i = 0; i < t; i++)
      n[i] && n[i].delimiters && Kc(e, n[i].delimiters);
  };
});
var _n = y((r0, yn) => {
  "use strict";
  yn.exports.tokenize = function (e, i) {
    var n,
      t,
      r,
      o = e.pos,
      s = e.src.charCodeAt(o);
    if (i || (s !== 95 && s !== 42)) return !1;
    for (t = e.scanDelims(e.pos, s === 42), n = 0; n < t.length; n++)
      (r = e.push("text", "", 0)),
        (r.content = String.fromCharCode(s)),
        e.delimiters.push({
          marker: s,
          length: t.length,
          token: e.tokens.length - 1,
          end: -1,
          open: t.can_open,
          close: t.can_close,
        });
    return (e.pos += t.length), !0;
  };
  function Wc(a, e) {
    var i,
      n,
      t,
      r,
      o,
      s,
      c = e.length;
    for (i = c - 1; i >= 0; i--)
      (n = e[i]),
        !(n.marker !== 95 && n.marker !== 42) &&
          n.end !== -1 &&
          ((t = e[n.end]),
          (s =
            i > 0 &&
            e[i - 1].end === n.end + 1 &&
            e[i - 1].marker === n.marker &&
            e[i - 1].token === n.token - 1 &&
            e[n.end + 1].token === t.token + 1),
          (o = String.fromCharCode(n.marker)),
          (r = a.tokens[n.token]),
          (r.type = s ? "strong_open" : "em_open"),
          (r.tag = s ? "strong" : "em"),
          (r.nesting = 1),
          (r.markup = s ? o + o : o),
          (r.content = ""),
          (r = a.tokens[t.token]),
          (r.type = s ? "strong_close" : "em_close"),
          (r.tag = s ? "strong" : "em"),
          (r.nesting = -1),
          (r.markup = s ? o + o : o),
          (r.content = ""),
          s &&
            ((a.tokens[e[i - 1].token].content = ""),
            (a.tokens[e[n.end + 1].token].content = ""),
            i--));
  }
  yn.exports.postProcess = function (e) {
    var i,
      n = e.tokens_meta,
      t = e.tokens_meta.length;
    for (Wc(e, e.delimiters), i = 0; i < t; i++)
      n[i] && n[i].delimiters && Wc(e, n[i].delimiters);
  };
});
var ep = y((o0, Yc) => {
  "use strict";
  var Ch = z().normalizeReference,
    wn = z().isSpace;
  Yc.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c,
      p,
      u,
      m,
      f = "",
      l = "",
      d = e.pos,
      h = e.posMax,
      x = e.pos,
      v = !0;
    if (
      e.src.charCodeAt(e.pos) !== 91 ||
      ((s = e.pos + 1), (o = e.md.helpers.parseLinkLabel(e, e.pos, !0)), o < 0)
    )
      return !1;
    if (((c = o + 1), c < h && e.src.charCodeAt(c) === 40)) {
      for (
        v = !1, c++;
        c < h && ((t = e.src.charCodeAt(c)), !(!wn(t) && t !== 10));
        c++
      );
      if (c >= h) return !1;
      if (
        ((x = c),
        (p = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)),
        p.ok)
      ) {
        for (
          f = e.md.normalizeLink(p.str),
            e.md.validateLink(f) ? (c = p.pos) : (f = ""),
            x = c;
          c < h && ((t = e.src.charCodeAt(c)), !(!wn(t) && t !== 10));
          c++
        );
        if (
          ((p = e.md.helpers.parseLinkTitle(e.src, c, e.posMax)),
          c < h && x !== c && p.ok)
        )
          for (
            l = p.str, c = p.pos;
            c < h && ((t = e.src.charCodeAt(c)), !(!wn(t) && t !== 10));
            c++
          );
      }
      (c >= h || e.src.charCodeAt(c) !== 41) && (v = !0), c++;
    }
    if (v) {
      if (typeof e.env.references > "u") return !1;
      if (
        (c < h && e.src.charCodeAt(c) === 91
          ? ((x = c + 1),
            (c = e.md.helpers.parseLinkLabel(e, c)),
            c >= 0 ? (r = e.src.slice(x, c++)) : (c = o + 1))
          : (c = o + 1),
        r || (r = e.src.slice(s, o)),
        (u = e.env.references[Ch(r)]),
        !u)
      )
        return (e.pos = d), !1;
      (f = u.href), (l = u.title);
    }
    return (
      i ||
        ((e.pos = s),
        (e.posMax = o),
        (m = e.push("link_open", "a", 1)),
        (m.attrs = n = [["href", f]]),
        l && n.push(["title", l]),
        e.linkLevel++,
        e.md.inline.tokenize(e),
        e.linkLevel--,
        (m = e.push("link_close", "a", -1))),
      (e.pos = c),
      (e.posMax = h),
      !0
    );
  };
});
var ap = y((s0, ip) => {
  "use strict";
  var Eh = z().normalizeReference,
    kn = z().isSpace;
  ip.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c,
      p,
      u,
      m,
      f,
      l,
      d,
      h,
      x = "",
      v = e.pos,
      g = e.posMax;
    if (
      e.src.charCodeAt(e.pos) !== 33 ||
      e.src.charCodeAt(e.pos + 1) !== 91 ||
      ((c = e.pos + 2),
      (s = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)),
      s < 0)
    )
      return !1;
    if (((p = s + 1), p < g && e.src.charCodeAt(p) === 40)) {
      for (
        p++;
        p < g && ((t = e.src.charCodeAt(p)), !(!kn(t) && t !== 10));
        p++
      );
      if (p >= g) return !1;
      for (
        h = p,
          m = e.md.helpers.parseLinkDestination(e.src, p, e.posMax),
          m.ok &&
            ((x = e.md.normalizeLink(m.str)),
            e.md.validateLink(x) ? (p = m.pos) : (x = "")),
          h = p;
        p < g && ((t = e.src.charCodeAt(p)), !(!kn(t) && t !== 10));
        p++
      );
      if (
        ((m = e.md.helpers.parseLinkTitle(e.src, p, e.posMax)),
        p < g && h !== p && m.ok)
      )
        for (
          f = m.str, p = m.pos;
          p < g && ((t = e.src.charCodeAt(p)), !(!kn(t) && t !== 10));
          p++
        );
      else f = "";
      if (p >= g || e.src.charCodeAt(p) !== 41) return (e.pos = v), !1;
      p++;
    } else {
      if (typeof e.env.references > "u") return !1;
      if (
        (p < g && e.src.charCodeAt(p) === 91
          ? ((h = p + 1),
            (p = e.md.helpers.parseLinkLabel(e, p)),
            p >= 0 ? (o = e.src.slice(h, p++)) : (p = s + 1))
          : (p = s + 1),
        o || (o = e.src.slice(c, s)),
        (u = e.env.references[Eh(o)]),
        !u)
      )
        return (e.pos = v), !1;
      (x = u.href), (f = u.title);
    }
    return (
      i ||
        ((r = e.src.slice(c, s)),
        e.md.inline.parse(r, e.md, e.env, (d = [])),
        (l = e.push("image", "img", 0)),
        (l.attrs = n =
          [
            ["src", x],
            ["alt", ""],
          ]),
        (l.children = d),
        (l.content = r),
        f && n.push(["title", f])),
      (e.pos = p),
      (e.posMax = g),
      !0
    );
  };
});
var tp = y((c0, np) => {
  "use strict";
  var Ah =
      /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    Dh = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  np.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s,
      c,
      p = e.pos;
    if (e.src.charCodeAt(p) !== 60) return !1;
    for (s = e.pos, c = e.posMax; ; ) {
      if (++p >= c || ((o = e.src.charCodeAt(p)), o === 60)) return !1;
      if (o === 62) break;
    }
    return (
      (n = e.src.slice(s + 1, p)),
      Dh.test(n)
        ? ((t = e.md.normalizeLink(n)),
          e.md.validateLink(t)
            ? (i ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", t]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(n)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += n.length + 2),
              !0)
            : !1)
        : Ah.test(n)
        ? ((t = e.md.normalizeLink("mailto:" + n)),
          e.md.validateLink(t)
            ? (i ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", t]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(n)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += n.length + 2),
              !0)
            : !1)
        : !1
    );
  };
});
var op = y((p0, rp) => {
  "use strict";
  var Ph = hn().HTML_TAG_RE;
  function Sh(a) {
    return /^<a[>\s]/i.test(a);
  }
  function Th(a) {
    return /^<\/a\s*>/i.test(a);
  }
  function Ih(a) {
    var e = a | 32;
    return e >= 97 && e <= 122;
  }
  rp.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s = e.pos;
    return !e.md.options.html ||
      ((r = e.posMax), e.src.charCodeAt(s) !== 60 || s + 2 >= r) ||
      ((n = e.src.charCodeAt(s + 1)),
      n !== 33 && n !== 63 && n !== 47 && !Ih(n)) ||
      ((t = e.src.slice(s).match(Ph)), !t)
      ? !1
      : (i ||
          ((o = e.push("html_inline", "", 0)),
          (o.content = e.src.slice(s, s + t[0].length)),
          Sh(o.content) && e.linkLevel++,
          Th(o.content) && e.linkLevel--),
        (e.pos += t[0].length),
        !0);
  };
});
var lp = y((l0, pp) => {
  "use strict";
  var sp = rn(),
    $h = z().has,
    jh = z().isValidEntityCode,
    cp = z().fromCodePoint,
    Rh = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    Fh = /^&([a-z][a-z0-9]{1,31});/i;
  pp.exports = function (e, i) {
    var n,
      t,
      r,
      o,
      s = e.pos,
      c = e.posMax;
    if (e.src.charCodeAt(s) !== 38 || s + 1 >= c) return !1;
    if (((n = e.src.charCodeAt(s + 1)), n === 35)) {
      if (((r = e.src.slice(s).match(Rh)), r))
        return (
          i ||
            ((t =
              r[1][0].toLowerCase() === "x"
                ? parseInt(r[1].slice(1), 16)
                : parseInt(r[1], 10)),
            (o = e.push("text_special", "", 0)),
            (o.content = jh(t) ? cp(t) : cp(65533)),
            (o.markup = r[0]),
            (o.info = "entity")),
          (e.pos += r[0].length),
          !0
        );
    } else if (((r = e.src.slice(s).match(Fh)), r && $h(sp, r[1])))
      return (
        i ||
          ((o = e.push("text_special", "", 0)),
          (o.content = sp[r[1]]),
          (o.markup = r[0]),
          (o.info = "entity")),
        (e.pos += r[0].length),
        !0
      );
    return !1;
  };
});
var mp = y((u0, dp) => {
  "use strict";
  function up(a, e) {
    var i,
      n,
      t,
      r,
      o,
      s,
      c,
      p,
      u = {},
      m = e.length;
    if (!!m) {
      var f = 0,
        l = -2,
        d = [];
      for (i = 0; i < m; i++)
        if (
          ((t = e[i]),
          d.push(0),
          (e[f].marker !== t.marker || l !== t.token - 1) && (f = i),
          (l = t.token),
          (t.length = t.length || 0),
          !!t.close)
        ) {
          for (
            u.hasOwnProperty(t.marker) ||
              (u[t.marker] = [-1, -1, -1, -1, -1, -1]),
              o = u[t.marker][(t.open ? 3 : 0) + (t.length % 3)],
              n = f - d[f] - 1,
              s = n;
            n > o;
            n -= d[n] + 1
          )
            if (
              ((r = e[n]),
              r.marker === t.marker &&
                r.open &&
                r.end < 0 &&
                ((c = !1),
                (r.close || t.open) &&
                  (r.length + t.length) % 3 === 0 &&
                  (r.length % 3 !== 0 || t.length % 3 !== 0) &&
                  (c = !0),
                !c))
            ) {
              (p = n > 0 && !e[n - 1].open ? d[n - 1] + 1 : 0),
                (d[i] = i - n + p),
                (d[n] = p),
                (t.open = !1),
                (r.end = i),
                (r.close = !1),
                (s = -1),
                (l = -2);
              break;
            }
          s !== -1 &&
            (u[t.marker][(t.open ? 3 : 0) + ((t.length || 0) % 3)] = s);
        }
    }
  }
  dp.exports = function (e) {
    var i,
      n = e.tokens_meta,
      t = e.tokens_meta.length;
    for (up(e, e.delimiters), i = 0; i < t; i++)
      n[i] && n[i].delimiters && up(e, n[i].delimiters);
  };
});
var hp = y((d0, fp) => {
  "use strict";
  fp.exports = function (e) {
    var i,
      n,
      t = 0,
      r = e.tokens,
      o = e.tokens.length;
    for (i = n = 0; i < o; i++)
      r[i].nesting < 0 && t--,
        (r[i].level = t),
        r[i].nesting > 0 && t++,
        r[i].type === "text" && i + 1 < o && r[i + 1].type === "text"
          ? (r[i + 1].content = r[i].content + r[i + 1].content)
          : (i !== n && (r[n] = r[i]), n++);
    i !== n && (r.length = n);
  };
});
var yp = y((m0, bp) => {
  "use strict";
  var Cn = Li(),
    xp = z().isWhiteSpace,
    gp = z().isPunctChar,
    vp = z().isMdAsciiPunct;
  function ai(a, e, i, n) {
    (this.src = a),
      (this.env = i),
      (this.md = e),
      (this.tokens = n),
      (this.tokens_meta = Array(n.length)),
      (this.pos = 0),
      (this.posMax = this.src.length),
      (this.level = 0),
      (this.pending = ""),
      (this.pendingLevel = 0),
      (this.cache = {}),
      (this.delimiters = []),
      (this._prev_delimiters = []),
      (this.backticks = {}),
      (this.backticksScanned = !1),
      (this.linkLevel = 0);
  }
  ai.prototype.pushPending = function () {
    var a = new Cn("text", "", 0);
    return (
      (a.content = this.pending),
      (a.level = this.pendingLevel),
      this.tokens.push(a),
      (this.pending = ""),
      a
    );
  };
  ai.prototype.push = function (a, e, i) {
    this.pending && this.pushPending();
    var n = new Cn(a, e, i),
      t = null;
    return (
      i < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
      (n.level = this.level),
      i > 0 &&
        (this.level++,
        this._prev_delimiters.push(this.delimiters),
        (this.delimiters = []),
        (t = { delimiters: this.delimiters })),
      (this.pendingLevel = this.level),
      this.tokens.push(n),
      this.tokens_meta.push(t),
      n
    );
  };
  ai.prototype.scanDelims = function (a, e) {
    var i = a,
      n,
      t,
      r,
      o,
      s,
      c,
      p,
      u,
      m,
      f = !0,
      l = !0,
      d = this.posMax,
      h = this.src.charCodeAt(a);
    for (
      n = a > 0 ? this.src.charCodeAt(a - 1) : 32;
      i < d && this.src.charCodeAt(i) === h;

    )
      i++;
    return (
      (r = i - a),
      (t = i < d ? this.src.charCodeAt(i) : 32),
      (p = vp(n) || gp(String.fromCharCode(n))),
      (m = vp(t) || gp(String.fromCharCode(t))),
      (c = xp(n)),
      (u = xp(t)),
      u ? (f = !1) : m && (c || p || (f = !1)),
      c ? (l = !1) : p && (u || m || (l = !1)),
      e ? ((o = f), (s = l)) : ((o = f && (!l || p)), (s = l && (!f || m))),
      { can_open: o, can_close: s, length: r }
    );
  };
  ai.prototype.Token = Cn;
  bp.exports = ai;
});
var kp = y((f0, wp) => {
  "use strict";
  var _p = qi(),
    En = [
      ["text", Mc()],
      ["linkify", Gc()],
      ["newline", Xc()],
      ["escape", Jc()],
      ["backticks", Qc()],
      ["strikethrough", bn().tokenize],
      ["emphasis", _n().tokenize],
      ["link", ep()],
      ["image", ap()],
      ["autolink", tp()],
      ["html_inline", op()],
      ["entity", lp()],
    ],
    An = [
      ["balance_pairs", mp()],
      ["strikethrough", bn().postProcess],
      ["emphasis", _n().postProcess],
      ["fragments_join", hp()],
    ];
  function ni() {
    var a;
    for (this.ruler = new _p(), a = 0; a < En.length; a++)
      this.ruler.push(En[a][0], En[a][1]);
    for (this.ruler2 = new _p(), a = 0; a < An.length; a++)
      this.ruler2.push(An[a][0], An[a][1]);
  }
  ni.prototype.skipToken = function (a) {
    var e,
      i,
      n = a.pos,
      t = this.ruler.getRules(""),
      r = t.length,
      o = a.md.options.maxNesting,
      s = a.cache;
    if (typeof s[n] < "u") {
      a.pos = s[n];
      return;
    }
    if (a.level < o)
      for (i = 0; i < r && (a.level++, (e = t[i](a, !0)), a.level--, !e); i++);
    else a.pos = a.posMax;
    e || a.pos++, (s[n] = a.pos);
  };
  ni.prototype.tokenize = function (a) {
    for (
      var e,
        i,
        n = this.ruler.getRules(""),
        t = n.length,
        r = a.posMax,
        o = a.md.options.maxNesting;
      a.pos < r;

    ) {
      if (a.level < o) for (i = 0; i < t && ((e = n[i](a, !1)), !e); i++);
      if (e) {
        if (a.pos >= r) break;
        continue;
      }
      a.pending += a.src[a.pos++];
    }
    a.pending && a.pushPending();
  };
  ni.prototype.parse = function (a, e, i, n) {
    var t,
      r,
      o,
      s = new this.State(a, e, i, n);
    for (
      this.tokenize(s), r = this.ruler2.getRules(""), o = r.length, t = 0;
      t < o;
      t++
    )
      r[t](s);
  };
  ni.prototype.State = yp();
  wp.exports = ni;
});
var Ep = y((h0, Cp) => {
  "use strict";
  Cp.exports = function (a) {
    var e = {};
    (a = a || {}),
      (e.src_Any = sn().source),
      (e.src_Cc = cn().source),
      (e.src_Z = pn().source),
      (e.src_P = $i().source),
      (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|")),
      (e.src_ZCc = [e.src_Z, e.src_Cc].join("|"));
    var i = "[><\uFF5C]";
    return (
      (e.src_pseudo_letter =
        "(?:(?!" + i + "|" + e.src_ZPCc + ")" + e.src_Any + ")"),
      (e.src_ip4 =
        "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
      (e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
      (e.src_port =
        "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
      (e.src_host_terminator =
        "(?=$|" +
        i +
        "|" +
        e.src_ZPCc +
        ")(?!" +
        (a["---"] ? "-(?!--)|" : "-|") +
        "_|:\\d|\\.-|\\.(?!$|" +
        e.src_ZPCc +
        "))"),
      (e.src_path =
        "(?:[/?#](?:(?!" +
        e.src_ZCc +
        "|" +
        i +
        `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
        e.src_ZCc +
        "|\\]).)*\\]|\\((?:(?!" +
        e.src_ZCc +
        "|[)]).)*\\)|\\{(?:(?!" +
        e.src_ZCc +
        '|[}]).)*\\}|\\"(?:(?!' +
        e.src_ZCc +
        `|["]).)+\\"|\\'(?:(?!` +
        e.src_ZCc +
        "|[']).)+\\'|\\'(?=" +
        e.src_pseudo_letter +
        "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
        e.src_ZCc +
        "|[.]|$)|" +
        (a["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
        ",(?!" +
        e.src_ZCc +
        "|$)|;(?!" +
        e.src_ZCc +
        "|$)|\\!+(?!" +
        e.src_ZCc +
        "|[!]|$)|\\?(?!" +
        e.src_ZCc +
        "|[?]|$))+|\\/)?"),
      (e.src_email_name =
        '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
      (e.src_xn = "xn--[a-z0-9\\-]{1,59}"),
      (e.src_domain_root =
        "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})"),
      (e.src_domain =
        "(?:" +
        e.src_xn +
        "|(?:" +
        e.src_pseudo_letter +
        ")|(?:" +
        e.src_pseudo_letter +
        "(?:-|" +
        e.src_pseudo_letter +
        "){0,61}" +
        e.src_pseudo_letter +
        "))"),
      (e.src_host =
        "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))"),
      (e.tpl_host_fuzzy =
        "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))"),
      (e.tpl_host_no_ip_fuzzy =
        "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))"),
      (e.src_host_strict = e.src_host + e.src_host_terminator),
      (e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator),
      (e.src_host_port_strict =
        e.src_host + e.src_port + e.src_host_terminator),
      (e.tpl_host_port_fuzzy_strict =
        e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
      (e.tpl_host_port_no_ip_fuzzy_strict =
        e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
      (e.tpl_host_fuzzy_test =
        "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
        e.src_ZPCc +
        "|>|$))"),
      (e.tpl_email_fuzzy =
        "(^|" +
        i +
        '|"|\\(|' +
        e.src_ZCc +
        ")(" +
        e.src_email_name +
        "@" +
        e.tpl_host_fuzzy_strict +
        ")"),
      (e.tpl_link_fuzzy =
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" +
        e.src_ZPCc +
        "))((?![$+<=>^`|\uFF5C])" +
        e.tpl_host_port_fuzzy_strict +
        e.src_path +
        ")"),
      (e.tpl_link_no_ip_fuzzy =
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" +
        e.src_ZPCc +
        "))((?![$+<=>^`|\uFF5C])" +
        e.tpl_host_port_no_ip_fuzzy_strict +
        e.src_path +
        ")"),
      e
    );
  };
});
var Tp = y((x0, Sp) => {
  "use strict";
  function Dn(a) {
    var e = Array.prototype.slice.call(arguments, 1);
    return (
      e.forEach(function (i) {
        !i ||
          Object.keys(i).forEach(function (n) {
            a[n] = i[n];
          });
      }),
      a
    );
  }
  function Ui(a) {
    return Object.prototype.toString.call(a);
  }
  function Bh(a) {
    return Ui(a) === "[object String]";
  }
  function qh(a) {
    return Ui(a) === "[object Object]";
  }
  function zh(a) {
    return Ui(a) === "[object RegExp]";
  }
  function Ap(a) {
    return Ui(a) === "[object Function]";
  }
  function Lh(a) {
    return a.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var Pp = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
  function Hh(a) {
    return Object.keys(a || {}).reduce(function (e, i) {
      return e || Pp.hasOwnProperty(i);
    }, !1);
  }
  var Oh = {
      "http:": {
        validate: function (a, e, i) {
          var n = a.slice(e);
          return (
            i.re.http ||
              (i.re.http = new RegExp(
                "^\\/\\/" +
                  i.re.src_auth +
                  i.re.src_host_port_strict +
                  i.re.src_path,
                "i"
              )),
            i.re.http.test(n) ? n.match(i.re.http)[0].length : 0
          );
        },
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (a, e, i) {
          var n = a.slice(e);
          return (
            i.re.no_http ||
              (i.re.no_http = new RegExp(
                "^" +
                  i.re.src_auth +
                  "(?:localhost|(?:(?:" +
                  i.re.src_domain +
                  ")\\.)+" +
                  i.re.src_domain_root +
                  ")" +
                  i.re.src_port +
                  i.re.src_host_terminator +
                  i.re.src_path,
                "i"
              )),
            i.re.no_http.test(n)
              ? (e >= 3 && a[e - 3] === ":") || (e >= 3 && a[e - 3] === "/")
                ? 0
                : n.match(i.re.no_http)[0].length
              : 0
          );
        },
      },
      "mailto:": {
        validate: function (a, e, i) {
          var n = a.slice(e);
          return (
            i.re.mailto ||
              (i.re.mailto = new RegExp(
                "^" + i.re.src_email_name + "@" + i.re.src_host_strict,
                "i"
              )),
            i.re.mailto.test(n) ? n.match(i.re.mailto)[0].length : 0
          );
        },
      },
    },
    Mh =
      "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    Nh =
      "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split(
        "|"
      );
  function Gh(a) {
    (a.__index__ = -1), (a.__text_cache__ = "");
  }
  function Uh(a) {
    return function (e, i) {
      var n = e.slice(i);
      return a.test(n) ? n.match(a)[0].length : 0;
    };
  }
  function Dp() {
    return function (a, e) {
      e.normalize(a);
    };
  }
  function Gi(a) {
    var e = (a.re = Ep()(a.__opts__)),
      i = a.__tlds__.slice();
    a.onCompile(),
      a.__tlds_replaced__ || i.push(Mh),
      i.push(e.src_xn),
      (e.src_tlds = i.join("|"));
    function n(s) {
      return s.replace("%TLDS%", e.src_tlds);
    }
    (e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i")),
      (e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i")),
      (e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i")),
      (e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i"));
    var t = [];
    a.__compiled__ = {};
    function r(s, c) {
      throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + c);
    }
    Object.keys(a.__schemas__).forEach(function (s) {
      var c = a.__schemas__[s];
      if (c !== null) {
        var p = { validate: null, link: null };
        if (((a.__compiled__[s] = p), qh(c))) {
          zh(c.validate)
            ? (p.validate = Uh(c.validate))
            : Ap(c.validate)
            ? (p.validate = c.validate)
            : r(s, c),
            Ap(c.normalize)
              ? (p.normalize = c.normalize)
              : c.normalize
              ? r(s, c)
              : (p.normalize = Dp());
          return;
        }
        if (Bh(c)) {
          t.push(s);
          return;
        }
        r(s, c);
      }
    }),
      t.forEach(function (s) {
        !a.__compiled__[a.__schemas__[s]] ||
          ((a.__compiled__[s].validate =
            a.__compiled__[a.__schemas__[s]].validate),
          (a.__compiled__[s].normalize =
            a.__compiled__[a.__schemas__[s]].normalize));
      }),
      (a.__compiled__[""] = { validate: null, normalize: Dp() });
    var o = Object.keys(a.__compiled__)
      .filter(function (s) {
        return s.length > 0 && a.__compiled__[s];
      })
      .map(Lh)
      .join("|");
    (a.re.schema_test = RegExp(
      "(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")",
      "i"
    )),
      (a.re.schema_search = RegExp(
        "(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")",
        "ig"
      )),
      (a.re.schema_at_start = RegExp("^" + a.re.schema_search.source, "i")),
      (a.re.pretest = RegExp(
        "(" +
          a.re.schema_test.source +
          ")|(" +
          a.re.host_fuzzy_test.source +
          ")|@",
        "i"
      )),
      Gh(a);
  }
  function Xh(a, e) {
    var i = a.__index__,
      n = a.__last_index__,
      t = a.__text_cache__.slice(i, n);
    (this.schema = a.__schema__.toLowerCase()),
      (this.index = i + e),
      (this.lastIndex = n + e),
      (this.raw = t),
      (this.text = t),
      (this.url = t);
  }
  function Pn(a, e) {
    var i = new Xh(a, e);
    return a.__compiled__[i.schema].normalize(i, a), i;
  }
  function K(a, e) {
    if (!(this instanceof K)) return new K(a, e);
    e || (Hh(a) && ((e = a), (a = {}))),
      (this.__opts__ = Dn({}, Pp, e)),
      (this.__index__ = -1),
      (this.__last_index__ = -1),
      (this.__schema__ = ""),
      (this.__text_cache__ = ""),
      (this.__schemas__ = Dn({}, Oh, a)),
      (this.__compiled__ = {}),
      (this.__tlds__ = Nh),
      (this.__tlds_replaced__ = !1),
      (this.re = {}),
      Gi(this);
  }
  K.prototype.add = function (e, i) {
    return (this.__schemas__[e] = i), Gi(this), this;
  };
  K.prototype.set = function (e) {
    return (this.__opts__ = Dn(this.__opts__, e)), this;
  };
  K.prototype.test = function (e) {
    if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
      return !1;
    var i, n, t, r, o, s, c, p, u;
    if (this.re.schema_test.test(e)) {
      for (
        c = this.re.schema_search, c.lastIndex = 0;
        (i = c.exec(e)) !== null;

      )
        if (((r = this.testSchemaAt(e, i[2], c.lastIndex)), r)) {
          (this.__schema__ = i[2]),
            (this.__index__ = i.index + i[1].length),
            (this.__last_index__ = i.index + i[0].length + r);
          break;
        }
    }
    return (
      this.__opts__.fuzzyLink &&
        this.__compiled__["http:"] &&
        ((p = e.search(this.re.host_fuzzy_test)),
        p >= 0 &&
          (this.__index__ < 0 || p < this.__index__) &&
          (n = e.match(
            this.__opts__.fuzzyIP
              ? this.re.link_fuzzy
              : this.re.link_no_ip_fuzzy
          )) !== null &&
          ((o = n.index + n[1].length),
          (this.__index__ < 0 || o < this.__index__) &&
            ((this.__schema__ = ""),
            (this.__index__ = o),
            (this.__last_index__ = n.index + n[0].length)))),
      this.__opts__.fuzzyEmail &&
        this.__compiled__["mailto:"] &&
        ((u = e.indexOf("@")),
        u >= 0 &&
          (t = e.match(this.re.email_fuzzy)) !== null &&
          ((o = t.index + t[1].length),
          (s = t.index + t[0].length),
          (this.__index__ < 0 ||
            o < this.__index__ ||
            (o === this.__index__ && s > this.__last_index__)) &&
            ((this.__schema__ = "mailto:"),
            (this.__index__ = o),
            (this.__last_index__ = s)))),
      this.__index__ >= 0
    );
  };
  K.prototype.pretest = function (e) {
    return this.re.pretest.test(e);
  };
  K.prototype.testSchemaAt = function (e, i, n) {
    return this.__compiled__[i.toLowerCase()]
      ? this.__compiled__[i.toLowerCase()].validate(e, n, this)
      : 0;
  };
  K.prototype.match = function (e) {
    var i = 0,
      n = [];
    this.__index__ >= 0 &&
      this.__text_cache__ === e &&
      (n.push(Pn(this, i)), (i = this.__last_index__));
    for (var t = i ? e.slice(i) : e; this.test(t); )
      n.push(Pn(this, i)),
        (t = t.slice(this.__last_index__)),
        (i += this.__last_index__);
    return n.length ? n : null;
  };
  K.prototype.matchAtStart = function (e) {
    if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
      return null;
    var i = this.re.schema_at_start.exec(e);
    if (!i) return null;
    var n = this.testSchemaAt(e, i[2], i[0].length);
    return n
      ? ((this.__schema__ = i[2]),
        (this.__index__ = i.index + i[1].length),
        (this.__last_index__ = i.index + i[0].length + n),
        Pn(this, 0))
      : null;
  };
  K.prototype.tlds = function (e, i) {
    return (
      (e = Array.isArray(e) ? e : [e]),
      i
        ? ((this.__tlds__ = this.__tlds__
            .concat(e)
            .sort()
            .filter(function (n, t, r) {
              return n !== r[t - 1];
            })
            .reverse()),
          Gi(this),
          this)
        : ((this.__tlds__ = e.slice()),
          (this.__tlds_replaced__ = !0),
          Gi(this),
          this)
    );
  };
  K.prototype.normalize = function (e) {
    e.schema || (e.url = "http://" + e.url),
      e.schema === "mailto:" &&
        !/^mailto:/i.test(e.url) &&
        (e.url = "mailto:" + e.url);
  };
  K.prototype.onCompile = function () {};
  Sp.exports = K;
});
var $p = y((g0, Ip) => {
  "use strict";
  Ip.exports = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 100,
    },
    components: { core: {}, block: {}, inline: {} },
  };
});
var Rp = y((v0, jp) => {
  "use strict";
  jp.exports = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: { rules: ["paragraph"] },
      inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
    },
  };
});
var Bp = y((b0, Fp) => {
  "use strict";
  Fp.exports = {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: "language-",
      linkify: !1,
      typographer: !1,
      quotes: "\u201C\u201D\u2018\u2019",
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: ["normalize", "block", "inline", "text_join"] },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph",
        ],
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text",
        ],
        rules2: ["balance_pairs", "emphasis", "fragments_join"],
      },
    },
  };
});
var Hp = y((y0, Lp) => {
  "use strict";
  var ti = z(),
    Vh = Ps(),
    Jh = Ts(),
    Zh = nc(),
    Qh = Hc(),
    Kh = kp(),
    Wh = Tp(),
    Ee = on(),
    qp = require("punycode"),
    Yh = { default: $p(), zero: Rp(), commonmark: Bp() },
    ex = /^(vbscript|javascript|file|data):/,
    ix = /^data:image\/(gif|png|jpeg|webp);/;
  function ax(a) {
    var e = a.trim().toLowerCase();
    return ex.test(e) ? !!ix.test(e) : !0;
  }
  var zp = ["http:", "https:", "mailto:"];
  function nx(a) {
    var e = Ee.parse(a, !0);
    if (e.hostname && (!e.protocol || zp.indexOf(e.protocol) >= 0))
      try {
        e.hostname = qp.toASCII(e.hostname);
      } catch {}
    return Ee.encode(Ee.format(e));
  }
  function tx(a) {
    var e = Ee.parse(a, !0);
    if (e.hostname && (!e.protocol || zp.indexOf(e.protocol) >= 0))
      try {
        e.hostname = qp.toUnicode(e.hostname);
      } catch {}
    return Ee.decode(Ee.format(e), Ee.decode.defaultChars + "%");
  }
  function Y(a, e) {
    if (!(this instanceof Y)) return new Y(a, e);
    e || ti.isString(a) || ((e = a || {}), (a = "default")),
      (this.inline = new Kh()),
      (this.block = new Qh()),
      (this.core = new Zh()),
      (this.renderer = new Jh()),
      (this.linkify = new Wh()),
      (this.validateLink = ax),
      (this.normalizeLink = nx),
      (this.normalizeLinkText = tx),
      (this.utils = ti),
      (this.helpers = ti.assign({}, Vh)),
      (this.options = {}),
      this.configure(a),
      e && this.set(e);
  }
  Y.prototype.set = function (a) {
    return ti.assign(this.options, a), this;
  };
  Y.prototype.configure = function (a) {
    var e = this,
      i;
    if (ti.isString(a) && ((i = a), (a = Yh[i]), !a))
      throw new Error('Wrong `markdown-it` preset "' + i + '", check name');
    if (!a) throw new Error("Wrong `markdown-it` preset, can't be empty");
    return (
      a.options && e.set(a.options),
      a.components &&
        Object.keys(a.components).forEach(function (n) {
          a.components[n].rules && e[n].ruler.enableOnly(a.components[n].rules),
            a.components[n].rules2 &&
              e[n].ruler2.enableOnly(a.components[n].rules2);
        }),
      this
    );
  };
  Y.prototype.enable = function (a, e) {
    var i = [];
    Array.isArray(a) || (a = [a]),
      ["core", "block", "inline"].forEach(function (t) {
        i = i.concat(this[t].ruler.enable(a, !0));
      }, this),
      (i = i.concat(this.inline.ruler2.enable(a, !0)));
    var n = a.filter(function (t) {
      return i.indexOf(t) < 0;
    });
    if (n.length && !e)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
    return this;
  };
  Y.prototype.disable = function (a, e) {
    var i = [];
    Array.isArray(a) || (a = [a]),
      ["core", "block", "inline"].forEach(function (t) {
        i = i.concat(this[t].ruler.disable(a, !0));
      }, this),
      (i = i.concat(this.inline.ruler2.disable(a, !0)));
    var n = a.filter(function (t) {
      return i.indexOf(t) < 0;
    });
    if (n.length && !e)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
    return this;
  };
  Y.prototype.use = function (a) {
    var e = [this].concat(Array.prototype.slice.call(arguments, 1));
    return a.apply(a, e), this;
  };
  Y.prototype.parse = function (a, e) {
    if (typeof a != "string") throw new Error("Input data should be a String");
    var i = new this.core.State(a, this, e);
    return this.core.process(i), i.tokens;
  };
  Y.prototype.render = function (a, e) {
    return (
      (e = e || {}), this.renderer.render(this.parse(a, e), this.options, e)
    );
  };
  Y.prototype.parseInline = function (a, e) {
    var i = new this.core.State(a, this, e);
    return (i.inlineMode = !0), this.core.process(i), i.tokens;
  };
  Y.prototype.renderInline = function (a, e) {
    return (
      (e = e || {}),
      this.renderer.render(this.parseInline(a, e), this.options, e)
    );
  };
  Lp.exports = Y;
});
var Mp = y((_0, Op) => {
  "use strict";
  Op.exports = Hp();
});
var Qi = U(vt());
var Te = require("http"),
  qr = U(require("path"), 1);
function bt(a) {
  let e = Xl(a.headers["x-forwarded-for"] || "");
  return [a.connection.remoteAddress].concat(e);
}
function Xl(a) {
  let e = a.length,
    i = [],
    n = a.length;
  for (let t = a.length - 1; t >= 0; t--)
    switch (a.charCodeAt(t)) {
      case 32:
        n === e && (n = e = t);
        break;
      case 44:
        n !== e && i.push(a.substring(n, e)), (n = e = t);
        break;
      default:
        n = t;
        break;
    }
  return n !== e && i.push(a.substring(n, e)), i;
}
var aa = U(_t(), 1),
  Vl = /^[0-9]+$/,
  si = aa.default.isValid,
  ci = aa.default.parse,
  wt = {
    linklocal: ["169.254.0.0/16", "fe80::/10"],
    loopback: ["127.0.0.1/8", "::1/128"],
    uniquelocal: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "fc00::/7"],
  };
function na(a, e) {
  let i = bt(a);
  if (!e) return i;
  typeof e != "function" && (e = pi(e));
  for (let n = 0; n < i.length - 1; n++) e(i[n], n) || (i.length = n + 1);
  return i;
}
function pi(a) {
  let e;
  if (typeof a == "string") e = [a];
  else if (Array.isArray(a)) e = a.slice();
  else throw new TypeError("unsupported trust argument");
  for (let i = 0; i < e.length; i++)
    (a = e[i]),
      Object.prototype.hasOwnProperty.call(wt, a) &&
        ((a = wt[a]), e.splice.apply(e, [i, 1].concat(a)), (i += a.length - 1));
  return Zl(Jl(e));
}
function Jl(a) {
  let e = new Array(a.length);
  for (let i = 0; i < a.length; i++) e[i] = Ql(a[i]);
  return e;
}
function Zl(a) {
  let e = a.length;
  return e === 0 ? Wl : e === 1 ? eu(a[0]) : Yl(a);
}
function Ql(a) {
  let e = a.lastIndexOf("/"),
    i = e !== -1 ? a.substring(0, e) : a;
  if (!si(i)) throw new TypeError("invalid IP address: " + i);
  let n = ci(i);
  e === -1 &&
    n.kind() === "ipv6" &&
    ((n = n), n.isIPv4MappedAddress() && (n = n.toIPv4Address()));
  let t = n.kind() === "ipv6" ? 128 : 32,
    r = e !== -1 ? a.substring(e + 1, a.length) : null;
  if (
    (r === null
      ? (r = t)
      : Vl.test(r)
      ? (r = parseInt(r, 10))
      : n.kind() === "ipv4" && si(r)
      ? (r = Kl(r))
      : (r = null),
    r <= 0 || r > t)
  )
    throw new TypeError("invalid range on address: " + a);
  return [n, r];
}
function Kl(a) {
  let e = ci(a);
  return e.kind() === "ipv4" ? e.prefixLengthFromSubnetMask() : null;
}
function kt(a, e) {
  let i = na(a, e);
  return i[i.length - 1];
}
var Wl = () => !1;
function Yl(a) {
  return function (i) {
    if (!si(i)) return !1;
    let n = ci(i),
      t,
      r = n.kind();
    for (let o = 0; o < a.length; o++) {
      let s = a[o],
        c = s[0],
        p = c.kind(),
        u = s[1],
        m = n;
      if (r !== p) {
        if (p === "ipv4" && !n.isIPv4MappedAddress()) continue;
        t || (t = p === "ipv4" ? n.toIPv4Address() : n.toIPv4MappedAddress()),
          (m = t);
      }
      if (m.match(c, u)) return !0;
    }
    return !1;
  };
}
function eu(a) {
  let e = a[0],
    i = e.kind(),
    n = i === "ipv4",
    t = a[1];
  return function (o) {
    if (!si(o)) return !1;
    let s = ci(o);
    if (s.kind() !== i) {
      if (n && !s.isIPv4MappedAddress()) return !1;
      s = n ? s.toIPv4Address() : s.toIPv4MappedAddress();
    }
    return s.match(e, t);
  };
}
var zr = require("net");
var Ct = -3,
  iu = -2,
  au = -1;
function nu(a) {
  let e = a.map(tu).sort(su),
    i = 0;
  for (let t = 1; t < e.length; t++) {
    let r = e[t],
      o = e[i];
    r.start > o.end + 1
      ? (e[++i] = r)
      : r.end > o.end &&
        ((o.end = r.end), (o.index = Math.min(o.index, r.index)));
  }
  e.length = i + 1;
  let n = [...e].sort(ou).map(ru);
  return (n.type = a.type), n;
}
function tu(a, e) {
  return { end: a.end, index: e, start: a.start };
}
function ru(a) {
  return { end: a.end, start: a.start };
}
function ou(a, e) {
  return a.index - e.index;
}
function su(a, e) {
  return a.start - e.start;
}
var cu = class extends Array {
  constructor() {
    super(...arguments), (this.type = "");
  }
  toArray() {
    let a = Array.from(this);
    return (a.type = this.type), a;
  }
};
function pu(a, e) {
  let i = new cu();
  for (let n of a) {
    let t = n.split("-"),
      r = Number.parseInt(t[0], 10),
      o = Number.parseInt(t[1], 10);
    Number.isNaN(r)
      ? ((r = e - o), (o = e - 1))
      : Number.isNaN(o) && (o = e - 1),
      o > e - 1 && (o = e - 1),
      !(Number.isNaN(r) || Number.isNaN(o) || r > o || r < 0) &&
        i.push({ end: o, start: r });
  }
  return i;
}
function Et(a, e, i) {
  let n = !0;
  if (
    (i && "throwError" in i && i.throwError === !1 && (n = !1),
    !Number.isInteger(a))
  ) {
    if (n) throw new TypeError("Argument 'size' must be an integer.");
    return Ct;
  }
  if (typeof e != "string") {
    if (n) throw new TypeError("Argument 'header' must be a string.");
    return Ct;
  }
  let t = e.indexOf("=");
  if (t === -1) return iu;
  let r = e.slice(t + 1).split(","),
    o = pu(r, a);
  return o.length < 1
    ? au
    : ((o.type = e.slice(0, t)), i && i.combine ? nu(o) : o);
}
var lu = /(?:^|,)\s*?no-cache\s*?(?:,|$)/,
  At = Date.parse,
  Dt = (a, e) => e === a || e === `W/${a}` || `W/${e}` === a;
function uu(a, e) {
  let i = 0,
    n = 0;
  for (let t = 0, r = e.length; t < r; t++)
    switch (e.charCodeAt(t)) {
      case 32:
        i === n && (i = n = t + 1);
        break;
      case 44:
        if (Dt(a, e.substring(i, n))) return !1;
        i = n = t + 1;
        break;
      default:
        n = t + 1;
        break;
    }
  return !Dt(a, e.substring(i, n));
}
function Pt(a, e) {
  let i = a["if-modified-since"],
    n = a["if-none-match"];
  if (!i && !n) return !1;
  let t = a["cache-control"];
  if (t && lu.test(t)) return !1;
  if (n && n !== "*") {
    let r = e.etag;
    if (!r || uu(r, n)) return !1;
  }
  if (i) {
    let r = e["last-modified"];
    if (!r || !(At(r) <= At(i))) return !1;
  }
  return !0;
}
var Oe = U(It(), 1),
  $t = require("path"),
  mu = /^\s*([^;\s]*)(?:;|\s|$)/,
  fu = /^text\//i;
function hu(a, e) {
  let i = ["nginx", "apache", void 0, "iana"];
  Object.keys(Oe.default).forEach((n) => {
    let t = Oe.default[n],
      r = t.extensions;
    if (!(!r || !r.length)) {
      a[n] = r;
      for (let o of r) {
        if (e[o]) {
          let s = i.indexOf(Oe.default[e[o]].source),
            c = i.indexOf(t.source);
          if (
            e[o] !== "application/octet-stream" &&
            (s > c || (s === c && e[o].substr(0, 12) === "application/"))
          )
            continue;
        }
        e[o] = n;
      }
    }
  });
}
var xu = Object.create(null),
  jt = Object.create(null);
hu(xu, jt);
function ta(a) {
  if (!a || typeof a != "string") return !1;
  let e = mu.exec(a),
    i = e && Oe.default[e[1].toLowerCase()];
  return i && i.charset ? i.charset : e && fu.test(e[1]) ? "UTF-8" : !1;
}
function Rt(a) {
  if (!a || typeof a != "string") return !1;
  let e = a.indexOf("/") === -1 ? ve(a) : a;
  if (!e) return !1;
  if (e.indexOf("charset") === -1) {
    let i = ta(e);
    i && (e += "; charset=" + i.toLowerCase());
  }
  return e;
}
function ve(a) {
  if (!a || typeof a != "string") return !1;
  let e = (0, $t.extname)("x." + a)
    .toLowerCase()
    .substr(1);
  return (e && jt[e]) || !1;
}
var li = require("http"),
  Ft =
    /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
  vu = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
  Bt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
  bu = /\\([\u000b\u0020-\u00ff])/g,
  yu = /([\\"])/g,
  qt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function _u(a) {
  let e = String(a);
  if (Bt.test(e)) return e;
  if (e.length > 0 && !vu.test(e))
    throw new TypeError("invalid parameter value");
  return '"' + e.replace(yu, "\\$1") + '"';
}
function wu(a) {
  let e;
  if (a instanceof li.ServerResponse && typeof a.getHeader == "function")
    e = a.getHeader("content-type");
  else if (a instanceof li.IncomingMessage && typeof a.headers == "object") {
    let i = a.headers;
    e = i && i["content-type"];
  }
  if (typeof e != "string")
    throw new TypeError("content-type header is missing from object");
  return e;
}
var ku = class {
  constructor(a) {
    (this.parameters = {}), (this.type = a);
  }
};
function ra(a) {
  if (!a || typeof a != "object")
    throw new TypeError("argument obj is required");
  let { parameters: e, type: i } = a;
  if (!i || !qt.test(i)) throw new TypeError("invalid type");
  let n = i;
  if (e && typeof e == "object") {
    let t = Object.keys(e).sort();
    for (let r of t) {
      if (!Bt.test(r)) throw new TypeError("invalid parameter name");
      n += "; " + r + "=" + _u(e[r]);
    }
  }
  return n;
}
function oa(a) {
  if (!a) throw new TypeError("argument string is required");
  let e = typeof a == "object" ? wu(a) : a;
  if (typeof e != "string")
    throw new TypeError("argument string is required to be a string");
  let i = e.indexOf(";"),
    n = i != -1 ? e.substr(0, i).trim() : e.trim();
  if (!qt.test(n)) throw new TypeError("invalid media type");
  let t = new ku(n.toLowerCase());
  if (i != -1) {
    let r, o, s;
    for (Ft.lastIndex = i; (o = Ft.exec(e)); ) {
      if (o.index !== i) throw new TypeError("invalid parameter format");
      (i += o[0].length),
        (r = o[1].toLowerCase()),
        (s = o[2]),
        s[0] == '"' && (s = s.substr(1, s.length - 2).replace(bu, "$1")),
        (t.parameters[r] = s);
    }
    if (i != e.length) throw new TypeError("invalid parameter format");
  }
  return t;
}
var rr = U(tr(), 1);
var Yu = (a) => (a.indexOf("/") == -1 ? ve(a) : a),
  ed = (a) => typeof a == "string",
  be = class {
    constructor(e) {
      (this.headers = e.headers), (this.negotiator = new rr.default(e));
    }
    types(e, ...i) {
      let n = [];
      if (
        (e && !Array.isArray(e) ? (n = [e, ...i]) : e && (n = [...e, ...i]),
        !n || n.length == 0)
      )
        return this.negotiator.mediaTypes();
      if (!this.headers.accept) return n[0];
      let t = n.map(Yu),
        r = this.negotiator.mediaTypes(t.filter(ed)),
        [o] = r;
      return o ? n[t.indexOf(o)] : !1;
    }
    get type() {
      return this.types;
    }
    encodings(e, ...i) {
      let n = e;
      return (
        n && !Array.isArray(n) && (n = [n, ...i]),
        !n || n.length == 0
          ? this.negotiator.encodings()
          : this.negotiator.encodings(n)[0] || !1
      );
    }
    get encoding() {
      return this.encodings;
    }
    charsets(e, ...i) {
      let n = e;
      return (
        n && !Array.isArray(n) && (n = [n, ...i]),
        !n || n.length == 0
          ? this.negotiator.charsets()
          : this.negotiator.charsets(n)[0] || !1
      );
    }
    get charset() {
      return this.charsets;
    }
    languages(e, ...i) {
      let n = e;
      return (
        n && !Array.isArray(n) && (n = [n, ...i]),
        !n || n.length == 0
          ? this.negotiator.languages()
          : this.negotiator.languages(n)[0] || !1
      );
    }
    get lang() {
      return this.languages;
    }
    get langs() {
      return this.languages;
    }
    get language() {
      return this.languages;
    }
  };
var or = require("querystring"),
  da = ({ pattern: a, keys: e }, i = "/") => {
    let n = a.exec(i),
      t = {};
    if (n && typeof e != "boolean")
      for (let r = 0; r < e.length; r++)
        n[r + 1] && (t[e[r]] = decodeURIComponent(n[r + 1]));
    return t;
  },
  sr = (a) => {
    let e = a.indexOf("?");
    return e === -1 ? a.length : e;
  },
  ma = (a) => a.slice(0, sr(a)),
  cr = (a = "/") => (0, or.parse)(a.slice(sr(a) + 1));
var ui =
    (a) =>
    (...e) =>
      new be(a).types(e),
  pr =
    (a) =>
    (...e) =>
      new be(a).encodings(e),
  lr =
    (a) =>
    (...e) =>
      new be(a).charsets(e),
  ur =
    (a) =>
    (...e) =>
      new be(a).languages(e),
  Me = (a) => (e) => {
    let i = e.toLowerCase();
    switch (i) {
      case "referer":
      case "referrer":
        return a.headers.referrer || a.headers.referer;
      default:
        return a.headers[i];
    }
  },
  dr = (a) => (e, i) => {
    let n = Me(a)("Range");
    if (!!n) return Et(e, n, i);
  },
  mr = (a, e) => {
    let i = a.method,
      n = e.statusCode;
    return i !== "GET" && i !== "HEAD"
      ? !1
      : (n >= 200 && n < 300) || n === 304
      ? Pt(a.headers, {
          etag: e.getHeader("ETag"),
          "last-modified": e.getHeader("Last-Modified"),
        })
      : !1;
  },
  fr = (a) => a.headers["X-Requested-With"] === "XMLHttpRequest";
var id = [
    "ACL",
    "BIND",
    "CHECKOUT",
    "CONNECT",
    "COPY",
    "DELETE",
    "GET",
    "HEAD",
    "LINK",
    "LOCK",
    "M-SEARCH",
    "MERGE",
    "MKACTIVITY",
    "MKCALENDAR",
    "MKCOL",
    "MOVE",
    "NOTIFY",
    "OPTIONS",
    "PATCH",
    "POST",
    "PRI",
    "PROPFIND",
    "PROPPATCH",
    "PURGE",
    "PUT",
    "REBIND",
    "REPORT",
    "SEARCH",
    "SOURCE",
    "SUBSCRIBE",
    "TRACE",
    "UNBIND",
    "UNLINK",
    "UNLOCK",
    "UNSUBSCRIBE",
  ],
  hr = ({ path: a, handler: e, fullPath: i, method: n }) => ({
    method: n,
    handler: e || a,
    path: typeof a == "string" ? a : "/",
    fullPath: typeof a == "string" ? i : a,
  }),
  ye =
    (a) =>
    ({
      path: e,
      handler: i,
      method: n,
      handlers: t,
      type: r,
      fullPaths: o,
    }) => {
      let s = hr({ path: e, handler: i, method: n, type: r, fullPath: o?.[0] }),
        c = [],
        p = 1;
      t &&
        (c = t
          .flat()
          .map((u) =>
            hr({
              path: e,
              handler: u,
              method: n,
              type: r,
              fullPath: o == null ? null : o[p++],
            })
          ));
      for (let u of [s, ...c]) a.push({ ...u, type: r });
    },
  di = class {
    constructor() {
      (this.middleware = []), (this.mountpath = "/"), (this.apps = {});
      for (let e of id) this[e.toLowerCase()] = this.add(e);
    }
    add(e) {
      return (...i) => {
        let n = i.slice(1).flat();
        return (
          ye(this.middleware)({
            path: i[0],
            handler: n[0],
            handlers: n.slice(1),
            method: e,
            type: "route",
          }),
          this
        );
      };
    }
    msearch(...e) {
      let i = e.slice(1).flat();
      return (
        ye(this.middleware)({
          path: e[0],
          handler: i[0],
          handlers: i.slice(1),
          method: "M-SEARCH",
          type: "route",
        }),
        this
      );
    }
    all(...e) {
      let i = e.slice(1).flat();
      return (
        ye(this.middleware)({
          path: e[0],
          handler: i[0],
          handlers: i.slice(1),
          type: "route",
        }),
        this
      );
    }
    path() {
      return this.parent ? this.parent.path() + this.mountpath : "";
    }
    use(...e) {
      let i = e[0],
        n = e.slice(1).flat();
      return (
        typeof i == "string"
          ? ye(this.middleware)({
              path: i,
              handler: n[0],
              handlers: n.slice(1),
              type: "mw",
            })
          : ye(this.middleware)({
              path: "/",
              handler: Array.isArray(i) ? i[0] : i,
              handlers: Array.isArray(i) ? [...i.slice(1), ...n] : n,
              type: "mw",
            }),
        this
      );
    }
  };
var xr = require("crypto"),
  fa = require("fs"),
  ad = (a) => {
    if (a.length === 0) return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
    {
      let e = (0, xr.createHash)("sha1")
          .update(a, "utf8")
          .digest("base64")
          .substring(0, 27),
        i = typeof a == "string" ? Buffer.byteLength(a, "utf8") : a.length;
      return '"' + i.toString(16) + "-" + e + '"';
    }
  },
  nd = ({ mtime: a, size: e }) =>
    '"' + a.getTime().toString(16) + "-" + e.toString(16) + '"',
  ha = (a, e) => {
    if (a == null) throw new TypeError("argument entity is required");
    let i = e?.weak || a instanceof fa.Stats,
      n = a instanceof fa.Stats ? nd(a) : ad(a);
    return i ? "W/" + n : n;
  };
var De = require("fs"),
  vr = require("http"),
  Pe = require("path");
var xa =
    (a) =>
    (e, ...i) => (
      a.setHeader("Content-Type", "application/json"),
      typeof e == "object" && e != null
        ? a.end(JSON.stringify(e, null, 2), ...i)
        : typeof e == "string"
        ? a.end(e, ...i)
        : e == null &&
          (a.removeHeader("Content-Length"),
          a.removeHeader("Transfer-Encoding"),
          a.end(null, ...i)),
      a
    ),
  br = (a, e) =>
    a instanceof De.Stats
      ? ha(a, { weak: !0 })
      : ha(Buffer.isBuffer(a) ? a : Buffer.from(a, e), { weak: !0 });
function gr(a, e) {
  let i = oa(a);
  return (i.parameters.charset = e), ra(i);
}
var ga = (a, e) => (i) => {
    let n = i;
    if (Buffer.isBuffer(i)) n = i;
    else if (typeof i == "object" && i !== null) n = JSON.stringify(i, null, 2);
    else if (typeof i == "string") {
      let o = e.getHeader("Content-Type");
      o && typeof o == "string"
        ? e.setHeader("Content-Type", gr(o, "utf-8"))
        : e.setHeader("Content-Type", gr("text/html", "utf-8"));
    }
    let t = "utf8",
      r;
    if (
      (i && !e.getHeader("etag") && (r = br(n, t)) && e.setHeader("etag", r),
      a.fresh && (e.statusCode = 304),
      (e.statusCode === 204 || e.statusCode === 304) &&
        (e.removeHeader("Content-Type"),
        e.removeHeader("Content-Length"),
        e.removeHeader("Transfer-Encoding"),
        (n = "")),
      a.method === "HEAD")
    )
      return e.end(""), e;
    if (typeof i == "object") {
      if (i == null) return e.end(""), e;
      Buffer.isBuffer(i)
        ? (e.getHeader("Content-Type") ||
            e.setHeader("content-type", "application/octet-stream"),
          e.end(n))
        : xa(e)(n, t);
    } else typeof n != "string" && (n = n.toString()), e.end(n, t);
    return e;
  },
  yr = (a, e) => (i) => {
    let n = vr.STATUS_CODES[i] || String(i);
    return (
      (e.statusCode = i), e.setHeader("Content-Type", "text/plain"), ga(a, e)(n)
    );
  },
  _r = (a) => (e) => ((a.statusCode = e), a),
  td = (a, e) => {
    let i = e.maxAge != null && `public,max-age=${e.maxAge}`;
    i && e.immutable
      ? (i += ",immutable")
      : i && e.maxAge === 0 && (i += ",must-revalidate"),
      i && a.setHeader("Cache-Control", i);
  },
  mi =
    (a, e) =>
    (i, n = {}, t) => {
      let {
        root: r,
        headers: o = {},
        encoding: s = "utf-8",
        caching: c,
        ...p
      } = n;
      if (!(0, Pe.isAbsolute)(i) && !r)
        throw new TypeError("path must be absolute");
      c && td(e, c);
      let u = r ? (0, Pe.join)(r, i) : i,
        m = (0, De.statSync)(u);
      (o["Content-Encoding"] = s),
        (o["Last-Modified"] = m.mtime.toUTCString()),
        (o["Content-Type"] = Rt((0, Pe.extname)(i))),
        (o.ETag = br(m, s));
      let f = e.statusCode || 200;
      if (a.headers.range) {
        f = 206;
        let [d, h] = a.headers.range.replace("bytes=", "").split("-"),
          x = (p.end = parseInt(h, 10) || m.size - 1),
          v = (p.start = parseInt(d, 10) || 0);
        if (v >= m.size || x >= m.size)
          return (
            e.writeHead(416, { "Content-Range": `bytes */${m.size}` }).end(), e
          );
        (o["Content-Range"] = `bytes ${v}-${x}/${m.size}`),
          (o["Content-Length"] = x - v + 1),
          (o["Accept-Ranges"] = "bytes");
      } else o["Content-Length"] = m.size;
      for (let [d, h] of Object.entries(o)) e.setHeader(d, h);
      e.writeHead(f, o);
      let l = (0, De.createReadStream)(u, p);
      return t && l.on("error", (d) => t(d)).on("end", () => t()), l.pipe(e), e;
    };
var fi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function wr(a, e, i = {}) {
  if ((i.encode || (i.encode = encodeURIComponent), !fi.test(a)))
    throw new TypeError("argument name is invalid");
  let n = i.encode(e);
  if (n && !fi.test(n)) throw new TypeError("argument val is invalid");
  let t = a + "=" + n;
  if (i.maxAge != null) {
    let r = i.maxAge - 0;
    if (isNaN(r) || !isFinite(r))
      throw new TypeError("option maxAge is invalid");
    t += "; Max-Age=" + Math.floor(r);
  }
  if (i.domain) {
    if (!fi.test(i.domain)) throw new TypeError("option domain is invalid");
    t += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!fi.test(i.path)) throw new TypeError("option path is invalid");
    t += "; Path=" + i.path;
  }
  if (
    (i.expires && (t += "; Expires=" + i.expires.toUTCString()),
    i.httpOnly && (t += "; HttpOnly"),
    i.secure && (t += "; Secure"),
    i.sameSite)
  )
    switch (
      typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite
    ) {
      case !0:
      case "strict":
        t += "; SameSite=Strict";
        break;
      case "lax":
        t += "; SameSite=Lax";
        break;
      case "none":
        t += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return t;
}
var va = require("crypto"),
  kr = (a, e) =>
    `${a}.${(0, va.createHmac)("sha256", e)
      .update(a)
      .digest("base64")
      .replace(/=+$/, "")}`;
var od = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Cr(a) {
  let e = 0,
    i = [],
    n = 0;
  for (var t = 0, r = a.length; t < r; t++)
    switch (a.charCodeAt(t)) {
      case 32:
        n === e && (n = e = t + 1);
        break;
      case 44:
        i.push(a.substring(n, e)), (n = e = t + 1);
        break;
      default:
        e = t + 1;
        break;
    }
  return i.push(a.substring(n, e)), i;
}
function sd(a, e) {
  let i = Array.isArray(e) ? e : Cr(String(e));
  for (let r of i)
    if (!od.test(r))
      throw new TypeError("field argument contains an invalid header name");
  if (a === "*") return a;
  let n = a,
    t = Cr(a.toLowerCase());
  if (i.indexOf("*") !== -1 || t.indexOf("*") !== -1) return "*";
  for (let r of i) {
    let o = r.toLowerCase();
    t.indexOf(o) === -1 && (t.push(o), (n = n ? n + ", " + r : r));
  }
  return n;
}
function Er(a, e) {
  let i = a.getHeader("Vary") || "",
    n = Array.isArray(i) ? i.join(", ") : String(i);
  (i = sd(n, e)) && a.setHeader("Vary", i);
}
var cd =
    /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g,
  pd =
    /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g,
  ld = "$1\uFFFD$2",
  Ar = (a) => String(a).replace(pd, ld).replace(cd, encodeURI);
var _a = require("http");
var ud = /["'&<>]/;
function Dr(a) {
  let e = ud.exec(a);
  if (!e) return a;
  let i,
    n = "",
    t = 0,
    r = 0;
  for (t = e.index; t < a.length; t++) {
    switch (a.charCodeAt(t)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 39:
        i = "&#39;";
        break;
      case 60:
        i = "&lt;";
        break;
      case 62:
        i = "&gt;";
        break;
      default:
        continue;
    }
    r !== t && (n += a.substring(r, t)), (r = t + 1), (n += i);
  }
  return r !== t ? n + a.substring(r, t) : n;
}
var dd = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g,
  md = /%[0-9A-Fa-f]{2}/;
var Sr = /[^\x20-\x7e\xa0-\xff]/g;
var fd = /([\\"])/g;
var hd = /^[\x20-\x7e\x80-\xff]+$/,
  xd = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;
var gd = (a) => String(a).replace(Sr, "?"),
  ba = class {
    constructor(e, i) {
      (this.type = e), (this.parameters = i);
    }
  },
  vd = (a) => '"' + String(a).replace(fd, "\\$1") + '"',
  bd = (a) => "%" + String(a).charCodeAt(0).toString(16).toUpperCase();
function yd(a) {
  let e = String(a),
    i = encodeURIComponent(e).replace(dd, bd);
  return "UTF-8''" + i;
}
var Pr = (a) => a.slice(a.lastIndexOf("/") + 1);
function _d({ parameters: a, type: e }) {
  if (!e || typeof e != "string" || !xd.test(e))
    throw new TypeError("invalid type");
  let i = String(e).toLowerCase();
  if (a && typeof a == "object") {
    let n = Object.keys(a).sort();
    for (let t of n) {
      let r = t.substr(-1) === "*" ? yd(a[t]) : vd(a[t]);
      i += "; " + t + "=" + r;
    }
  }
  return i;
}
function wd(a, e) {
  if (a === void 0) return;
  let i = {};
  if ((e === void 0 && (e = !0), typeof e == "string" && Sr.test(e)))
    throw new TypeError("fallback must be ISO-8859-1 string");
  let n = Pr(a),
    t = hd.test(n),
    r = typeof e != "string" ? e && gd(n) : Pr(e),
    o = typeof r == "string" && r !== n;
  return (
    (o || !t || md.test(n)) && (i["filename*"] = n),
    (t || o) && (i.filename = o ? r : n),
    i
  );
}
function ya(a, e = {}) {
  return _d(new ba(e.type || "attachment", wd(a, e.fallback)));
}
var hi = require("path"),
  kd = /;\s*charset\s*=/,
  Se = (a) => (e, i) => {
    if (typeof e == "string") {
      let n = Array.isArray(i) ? i.map(String) : String(i);
      if (e.toLowerCase() === "content-type") {
        if (Array.isArray(n))
          throw new TypeError("Content-Type cannot be set to an Array");
        if (!kd.test(n)) {
          let t = ta(n.split(";")[0]);
          typeof t == "string" && (n += "; charset=" + t.toLowerCase());
        }
      }
      a.setHeader(e, n);
    } else for (let n in e) Se(a)(n, e[n]);
    return a;
  },
  wa = (a, e) => (i) => {
    let n = i;
    return (
      i === "back" && (n = Me(a)("Referrer") || "/"),
      e.setHeader("Location", Ar(n)),
      e
    );
  },
  ka = (a) => (e) => a.getHeader(e),
  Tr = (a) => (e) => {
    let i = a.getHeader("Link") || "";
    return (
      i && (i += ", "),
      a.setHeader(
        "Link",
        i +
          Object.keys(e)
            .map((n) => "<" + e[n] + '>; rel="' + n + '"')
            .join(", ")
      ),
      a
    );
  },
  Ca = (a) => (e) => (Er(a, e), a),
  Ea = (a) => (e) => {
    let i = e.indexOf("/") === -1 ? ve(e) : e;
    return Se(a)("Content-Type", i), a;
  },
  Aa = (a) => (e, i) => {
    let n = ka(a)(e),
      t = i;
    return (
      n &&
        typeof t != "number" &&
        typeof n != "number" &&
        (t = Array.isArray(n)
          ? n.concat(t)
          : Array.isArray(t)
          ? [n].concat(t)
          : [n, t]),
      Se(a)(e, t),
      a
    );
  },
  Da =
    (a, e) =>
    (i, n, t = {}) => {
      let r = a.secret,
        o = t.signed || !1;
      if (o && !r)
        throw new Error('cookieParser("secret") required for signed cookies');
      let s = typeof n == "object" ? "j:" + JSON.stringify(n) : String(n);
      return (
        o && (s = "s:" + kr(s, r)),
        t.maxAge &&
          ((t.expires = new Date(Date.now() + t.maxAge)), (t.maxAge /= 1e3)),
        t.path == null && (t.path = "/"),
        Aa(e)("Set-Cookie", `${wr(i, String(s), t)}`),
        e
      );
    },
  Ir = (a, e) => (i, n) =>
    Da(a, e)(i, "", Object.assign({}, { expires: new Date(1), path: "/" }, n)),
  $r = (a) => (~a.indexOf("/") ? Cd(a) : { value: ve(a), params: {} });
function Cd(a, e) {
  let i = a.split(/ *; */),
    n = { value: i[0], quality: 1, params: {}, originalIndex: e };
  for (let t of i) {
    let r = t.split(/ *= */);
    r[0] === "q" ? (n.quality = parseFloat(r[1])) : (n.params[r[0]] = r[1]);
  }
  return n;
}
function Ed(a) {
  let e = [];
  for (let i of a) e.push($r(i));
  return e;
}
var Pa = (a, e, i) => (n) => {
    let t = n.default;
    t && delete n.default;
    let r = Object.keys(n),
      o = r.length > 0 ? ui(a)(...r) : !1;
    if ((Ca(e)("Accept"), o))
      e.setHeader("Content-Type", $r(o).value), n[o](a, e, i);
    else if (t) t();
    else {
      let s = new Error("Not Acceptable");
      (s.status = s.statusCode = 406),
        (s.types = Ed(r).map((c) => c.value)),
        i(s);
    }
    return e;
  },
  jr = (a, e, i) => (n, t) => {
    let r = n;
    t = t || 302;
    let o = "";
    return (
      (r = wa(a, e)(r).getHeader("Location")),
      Pa(
        a,
        e,
        i
      )({
        text: () => {
          o = _a.STATUS_CODES[t] + ". Redirecting to " + r;
        },
        html: () => {
          let s = Dr(r);
          o = `<p>${_a.STATUS_CODES[t]}. Redirecting to <a href="${s}">${s}</a></p>`;
        },
      }),
      e.setHeader("Content-Length", Buffer.byteLength(o)),
      (e.statusCode = t),
      a.method === "HEAD" ? e.end() : e.end(o),
      e
    );
  },
  Rr = (a, e) => (i, n, t, r) => {
    let o = r,
      s = n,
      c = t || null;
    typeof n == "function"
      ? ((o = n), (s = null))
      : typeof t == "function" && ((o = t), (c = null));
    let p = { "Content-Disposition": ya(s || i) };
    if (c && c.headers)
      for (let u of Object.keys(c.headers))
        u.toLowerCase() !== "content-disposition" && (p[u] = c.headers[u]);
    return (
      (c = { ...c, headers: p }),
      mi(a, e)(c.root ? i : (0, hi.resolve)(i), c, o || (() => {}))
    );
  },
  Fr = (a) => (e) => (
    e && Ea(a)((0, hi.extname)(e)), Se(a)("Content-Disposition", ya(e)), a
  );
function xi(a, e) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var i,
    n,
    t,
    r,
    o = [],
    s = "",
    c = a.split("/");
  for (c[0] || c.shift(); (t = c.shift()); )
    (i = t[0]),
      i === "*"
        ? (o.push("wild"), (s += "/(.*)"))
        : i === ":"
        ? ((n = t.indexOf("?", 1)),
          (r = t.indexOf(".", 1)),
          o.push(t.substring(1, ~n ? n : ~r ? r : t.length)),
          (s += !!~n && !~r ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~r && (s += (~n ? "?" : "") + "\\" + t.substring(r)))
        : (s += "/" + t);
  return {
    keys: o,
    pattern: new RegExp("^" + s + (e ? "(?=$|/)" : "/?$"), "i"),
  };
}
var vi = ({ socket: a }) => {
    let e = a.remoteAddress;
    return typeof e == "function"
      ? e
      : typeof e == "boolean" && e === !0
      ? () => !0
      : typeof e == "number"
      ? (i, n) => (e ? n < e : void 0)
      : typeof e == "string"
      ? pi(e.split(",").map((i) => i.trim()))
      : pi(e || []);
  },
  Ad = ({ middleware: a }, e) =>
    a.find(({ handler: i }) => typeof i == "function" && i.name === e.name),
  Dd = (a) => {
    let e = a.connection.encrypted ? "https" : "http";
    if (!vi(a)) return e;
    let i = a.headers["X-Forwarded-Proto"] || e,
      n = i.indexOf(",");
    return n !== -1 ? i.substring(0, n).trim() : i.trim();
  },
  Lr = (a) => {
    let e = a.get("X-Forwarded-Host");
    if (((!e || !vi(a)) && (e = a.get("Host")), !e)) return;
    let i = e.indexOf(":", e[0] === "[" ? e.indexOf("]") + 1 : 0);
    return i !== -1 ? e.substring(0, i) : e;
  },
  Pd = (a) => kt(a, vi(a)).replace(/^.*:/, ""),
  Sd = (a) => na(a, vi(a)),
  Td = (a, e = 2) => {
    let i = Lr(a);
    return i ? ((0, zr.isIP)(i) ? [i] : i.split(".").reverse()).slice(e) : [];
  },
  Id = (a, e, i) => {
    !process.env.TESTING && a instanceof Error && console.error(a);
    let n = a.code in Te.STATUS_CODES ? a.code : a.status;
    typeof a == "string" || Buffer.isBuffer(a)
      ? i.writeHead(500).end(a)
      : n in Te.STATUS_CODES
      ? i.writeHead(n).end(Te.STATUS_CODES[n])
      : i.writeHead(500).end(a.message);
  },
  $d = (a, e, i) => (n, t, r) => (
    i.render(
      n,
      t,
      (o, s) => {
        if (o) throw o;
        e.send(s);
      },
      r
    ),
    e
  ),
  jd = (a) => (e, i, n) => {
    let { settings: t } = a;
    (i.get = ka(i)),
      (e.get = Me(e)),
      t?.bindAppToReqRes && ((e.app = a), (i.app = a)),
      t?.networkExtensions &&
        ((e.protocol = Dd(e)),
        (e.secure = e.protocol === "https"),
        (e.connection = Object.assign(e.socket, { encrypted: e.secure })),
        (e.hostname = Lr(e)),
        (e.subdomains = Td(e, t.subdomainOffset)),
        (e.ip = Pd(e)),
        (e.ips = Sd(e))),
      (e.query = cr(e.url)),
      (e.range = dr(e)),
      (e.accepts = ui(e)),
      (e.acceptsCharsets = lr(e)),
      (e.acceptsEncodings = pr(e)),
      (e.acceptsLanguages = ur(e)),
      (e.xhr = fr(e)),
      (i.header = i.set = Se(i)),
      (i.send = ga(e, i)),
      (i.json = xa(i)),
      (i.status = _r(i)),
      (i.sendStatus = yr(e, i)),
      (i.sendFile = mi(e, i)),
      (i.type = Ea(i)),
      (i.location = wa(e, i)),
      (i.links = Tr(i)),
      (i.vary = Ca(i)),
      (i.cookie = Da(e, i)),
      (i.clearCookie = Ir(e, i)),
      (i.render = $d(e, i, a)),
      (i.format = Pa(e, i, n)),
      (i.redirect = jr(e, i, n)),
      (i.attachment = Fr(i)),
      (i.download = Rr(e, i)),
      (i.append = Aa(i)),
      (i.locals = i.locals || Object.create(null)),
      Object.defineProperty(e, "fresh", {
        get: mr.bind(null, e, i),
        configurable: !0,
      }),
      (e.stale = !e.fresh),
      n();
  },
  gi = (a) => (a.charCodeAt(0) === 47 ? a : "/" + a),
  Br = (a) => (a instanceof ne ? a.attach : a),
  Rd = (a) => async (e, i, n) => {
    try {
      a[Symbol.toStringTag] === "AsyncFunction" ? await a(e, i, n) : a(e, i, n);
    } catch (t) {
      n(t);
    }
  },
  ne = class extends di {
    constructor(e = {}) {
      super(),
        (this.middleware = []),
        (this.locals = {}),
        (this.engines = {}),
        (this.onError = e?.onError || Id),
        (this.noMatchHandler =
          e?.noMatchHandler || this.onError.bind(null, { code: 404 })),
        (this.settings = e.settings || {
          xPoweredBy: !0,
          views: process.cwd(),
        }),
        (this.applyExtensions = e?.applyExtensions),
        (this.attach = (i, n) =>
          setImmediate(this.handler.bind(this, i, n, void 0), i, n));
    }
    set(e, i) {
      return (this.settings[e] = i), this;
    }
    enable(e) {
      return (this.settings[e] = !0), this;
    }
    disable(e) {
      return (this.settings[e] = !1), this;
    }
    render(e, i = {}, n, t = {}) {
      (t.viewsFolder =
        t.viewsFolder || this.settings.views || `${process.cwd()}/views`),
        (t.ext = t.ext || e.slice(e.lastIndexOf(".") + 1) || "ejs"),
        (t._locals = t._locals || {}),
        (t.cache = t.cache || process.env.NODE_ENV === "production");
      let r = { ...i, ...this.locals };
      t._locals && (r = { ...r, ...t._locals }),
        e.endsWith(`.${t.ext}`) || (e = `${e}.${t.ext}`);
      let o = t.viewsFolder ? qr.default.join(t.viewsFolder, e) : e;
      return this.engines[t.ext](o, r, t.renderOptions, n), this;
    }
    use(...e) {
      var i;
      let n = e[0],
        t = e.slice(1).flat();
      typeof n == "function" || n instanceof ne
        ? t.unshift(n)
        : Array.isArray(n) && t.unshift(...n);
      let r = typeof n == "string" ? n : "/",
        o;
      for (let u of t)
        u instanceof ne &&
          ((o = xi(r, !0)),
          (u.mountpath = r),
          (this.apps[r] = u),
          (u.parent = this));
      let s = [],
        c = [],
        p = r === "/" ? "" : gi(r);
      for (let u of t)
        if (
          u instanceof ne &&
          ((i = u.middleware) === null || i === void 0 ? void 0 : i.length)
        )
          for (let m of u.middleware) s.push(p + gi(m.path)), c.push(u);
        else s.push(""), c.push(u);
      return (
        ye(this.middleware)({
          path: r,
          regex: o,
          type: "mw",
          handler: Br(c[0]),
          handlers: c.slice(1).map(Br),
          fullPaths: s,
        }),
        this
      );
    }
    engine(e, i) {
      return (this.engines[e] = i), this;
    }
    route(e) {
      let i = new ne();
      return this.use(e, i), i;
    }
    find(e) {
      return this.middleware.filter((i) => {
        i.regex = i.regex || xi(i.path, i.type === "mw");
        let n;
        return (
          i.fullPath && typeof i.fullPath == "string"
            ? (n = xi(i.fullPath, i.type === "mw"))
            : (n = null),
          i.regex.pattern.test(e) &&
            (i.type === "mw" && n ? n.pattern.test(e) : !0)
        );
      });
    }
    handler(e, i, n) {
      let { xPoweredBy: t } = this.settings;
      t && i.setHeader("X-Powered-By", typeof t == "string" ? t : "tinyhttp");
      let r = this.applyExtensions || jd(this);
      e.originalUrl = e.url || e.originalUrl;
      let o = ma(e.originalUrl),
        s = this.find(o),
        c = [
          { handler: r, type: "mw", path: "/" },
          ...s.filter(
            (f) =>
              e.method === "HEAD" || (f.method ? f.method === e.method : !0)
          ),
        ];
      s[0] != null &&
        c.push({
          type: "mw",
          handler: (f, l, d) => {
            if (f.method === "HEAD") return (l.statusCode = 204), l.end("");
            d();
          },
          path: "/",
        }),
        c.push({ handler: this.noMatchHandler, type: "mw", path: "/" });
      let p = (f) => async (l, d, h) => {
          var x;
          let { path: v, handler: g, regex: b } = f,
            k = b ? da(b, o) : {};
          if (((l.params = { ...l.params, ...k }), v.includes(":"))) {
            let T = Object.values(k)[0],
              _ = l.url.slice(l.url.indexOf(T) + T?.length);
            l.url = gi(_);
          } else l.url = gi(l.url.substring(v.length));
          l.path || (l.path = ma(l.url)),
            !((x = this.settings) === null || x === void 0) &&
              x.enableReqRoute &&
              (l.route = Ad(this, g)),
            await Rd(g)(l, d, h);
        },
        u = 0,
        m = () => i.writableEnded || (u < c.length && p(c[u++])(e, i, n));
      (n = n || ((f) => (f ? this.onError(f, e, i) : m()))), m();
    }
    listen(e, i, n = "0.0.0.0") {
      return (0, Te.createServer)().on("request", this.attach).listen(e, n, i);
    }
  };
var Ta = U(require("tty"), 1),
  fe = process.env,
  Fd = "NO_COLOR" in fe,
  Bd = "FORCE_COLOR" in fe,
  qd = process.platform === "win32",
  zd = Ta && Ta.isatty(1) && fe.TERM && fe.TERM !== "dumb",
  Ld =
    "CI" in fe &&
    ("GITHUB_ACTIONS" in fe || "GITLAB_CI" in fe || "CIRCLECI" in fe),
  Sa = !Fd && (Bd || qd || zd || Ld),
  Ia = (a, e, i, n) => (t) =>
    Sa ? a + (~(t += "").indexOf(e, 4) ? t.replace(i, n) : t) + e : t,
  F = (a, e) =>
    Ia(
      `\x1B[${a}m`,
      `\x1B[${e}m`,
      new RegExp(`\\x1b\\[${e}m`, "g"),
      `\x1B[${a}m`
    ),
  ev = Object.defineProperty({}, "enabled", {
    get: () => Sa,
    set: (a) => (Sa = a),
  }),
  iv = F(0, 0),
  bi = Ia("\x1B[1m", "\x1B[22m", /\x1b\[22m/g, "\x1B[22m\x1B[1m"),
  av = Ia("\x1B[2m", "\x1B[22m", /\x1b\[22m/g, "\x1B[22m\x1B[2m"),
  nv = F(3, 23),
  tv = F(4, 24),
  rv = F(7, 27),
  ov = F(8, 28),
  sv = F(9, 29),
  cv = F(30, 39),
  $a = F(31, 39),
  pv = F(32, 39),
  lv = F(33, 39),
  uv = F(34, 39),
  ja = F(35, 39),
  Ra = F(36, 39),
  dv = F(37, 39),
  mv = F(90, 39),
  fv = F(40, 49),
  hv = F(41, 49),
  xv = F(42, 49),
  gv = F(43, 49),
  vv = F(44, 49),
  bv = F(45, 49),
  yv = F(46, 49),
  _v = F(47, 49),
  wv = F(90, 39),
  kv = F(91, 39),
  Cv = F(92, 39),
  Ev = F(93, 39),
  Av = F(94, 39),
  Dv = F(95, 39),
  Pv = F(96, 39),
  Sv = F(97, 39),
  Tv = F(100, 49),
  Iv = F(101, 49),
  $v = F(102, 49),
  jv = F(103, 49),
  Rv = F(104, 49),
  Fv = F(105, 49),
  Bv = F(106, 49),
  qv = F(107, 49);
var Hd = U(Or(), 1),
  Mr = U(Ne(), 1),
  qa = require("http"),
  yi = (a, e, i, n = {}, t, r) => {
    var o, s;
    let { method: c } = e,
      { statusCode: p } = i,
      u = e.originalUrl || e.url,
      m = (o = n.methods) !== null && o !== void 0 ? o : qa.METHODS,
      f = (s = n.timestamp) !== null && s !== void 0 ? s : !1,
      l = n.emoji;
    m.includes(c) &&
      f &&
      a.push(
        `${(0, Mr.default)()
          .format(typeof f != "boolean" && f.format ? f.format : "HH:mm:ss")
          .toString()} - `
      ),
      n.ip && a.push(e.ip),
      l && a.push(Hd[p]),
      a.push(c),
      a.push(t || i.statusCode),
      a.push(r || i.statusMessage),
      a.push(u);
  },
  Nr = (a = {}) => {
    var e, i;
    let n = (e = a.methods) !== null && e !== void 0 ? e : qa.METHODS,
      t =
        (i = a.output) !== null && i !== void 0
          ? i
          : { callback: console.log, color: !0 };
    return (r, o, s) => {
      o.on("finish", () => {
        let c = [];
        if (n.includes(r.method)) {
          let p = o.statusCode.toString();
          if (t.color)
            switch (p[0]) {
              case "2":
                yi(c, r, o, a, Ra(bi(p)), Ra(o.statusMessage)),
                  t.callback(c.join(" "));
                break;
              case "4":
                yi(c, r, o, a, $a(bi(p)), $a(o.statusMessage)),
                  t.callback(c.join(" "));
                break;
              case "5":
                yi(c, r, o, a, ja(bi(p)), ja(o.statusMessage)),
                  t.callback(c.join(" "));
                break;
            }
          else {
            yi(c, r, o, a);
            let u = c.join(" ");
            t.callback(u);
          }
        }
      }),
        s?.();
    };
  };
var Km = U(Vr(), 1),
  Wm = U(Va(), 1),
  Ym = U(Ja(), 1),
  ef = U(an(), 1),
  tn = U(Uo(), 1);
var bl = require("node:path"),
  yl = require("chokidar");
var Vp = U(Mp()),
  Jp = require("shiki");
var Np = new Set([!0, !1, "alt", "title"]);
function Gp(a, e) {
  return (Array.isArray(a) ? a : []).filter(([i]) => i !== e);
}
function Up(a, e) {
  a && a.attrs && (a.attrs = Gp(a.attrs, e));
}
function rx(a, e) {
  if (!Np.has(a)) throw new TypeError(`figcaption must be one of: ${[...Np]}.`);
  if (a === "alt") return e.content;
  let i = e.attrs.find(([n]) => n === "title");
  return Array.isArray(i) && i[1] ? (Up(e, "title"), i[1]) : void 0;
}
function ox(a, e) {
  (e = e || {}),
    a.core.ruler.before("linkify", "image_figures", function (i) {
      let n = 1;
      for (let t = 1, r = i.tokens.length; t < r - 1; ++t) {
        let o = i.tokens[t];
        if (
          o.type !== "inline" ||
          !o.children ||
          (o.children.length !== 1 && o.children.length !== 3) ||
          (o.children.length === 1 && o.children[0].type !== "image")
        )
          continue;
        if (o.children.length === 3) {
          let [p, u, m] = o.children;
          if (
            p.type !== "link_open" ||
            u.type !== "image" ||
            m.type !== "link_close"
          )
            continue;
        }
        if (
          (t !== 0 && i.tokens[t - 1].type !== "paragraph_open") ||
          (t !== r - 1 && i.tokens[t + 1].type !== "paragraph_close")
        )
          continue;
        let s = i.tokens[t - 1],
          c;
        if (
          ((s.type = "figure_open"),
          (s.tag = "figure"),
          (i.tokens[t + 1].type = "figure_close"),
          (i.tokens[t + 1].tag = "figure"),
          e.dataType && i.tokens[t - 1].attrPush(["data-type", "image"]),
          e.link && o.children.length === 1)
        ) {
          [c] = o.children;
          let p = new i.Token("link_open", "a", 1);
          p.attrPush(["href", c.attrGet("src")]),
            o.children.unshift(p),
            o.children.push(new i.Token("link_close", "a", -1));
        }
        if (
          ((c = o.children.length === 1 ? o.children[0] : o.children[1]),
          e.figcaption)
        ) {
          let p = rx(e.figcaption, c);
          if (p) {
            let [u] = a.parseInline(p, i.env);
            o.children.push(new i.Token("figcaption_open", "figcaption", 1)),
              o.children.push(...u.children),
              o.children.push(
                new i.Token("figcaption_close", "figcaption", -1)
              ),
              c.attrs && (c.attrs = Gp(c.attrs, "title"));
          }
        }
        if (e.copyAttrs && c.attrs) {
          let p = e.copyAttrs === !0 ? "" : e.copyAttrs;
          s.attrs = c.attrs
            .filter(([u]) => u.match(p))
            .map((u) => Array.from(u));
        }
        if (
          (e.tabindex && (i.tokens[t - 1].attrPush(["tabindex", n]), n++),
          e.lazy &&
            (c.attrs.some(([p]) => p === "loading") ||
              c.attrs.push(["loading", "lazy"])),
          e.async &&
            (c.attrs.some(([p]) => p === "decoding") ||
              c.attrs.push(["decoding", "async"])),
          e.classes && typeof e.classes == "string")
        ) {
          let p = !1;
          for (let u = 0, m = c.attrs.length; u < m && !p; u++) {
            let f = c.attrs[u];
            f[0] === "class" && ((f[1] = `${f[1]} ${e.classes}`), (p = !0));
          }
          p || c.attrs.push(["class", e.classes]);
        }
        if (e.removeSrc) {
          let p = c.attrs.find(([u]) => u === "src");
          c.attrs.push(["data-src", p[1]]), Up(c, "src");
        }
      }
    });
}
var Xp = ox;
var Zp = async () => {
    let a = await (0, Jp.getHighlighter)({ theme: "material-palenight" });
    return new Vp.default({
      html: !0,
      highlight: (e, i, n) => {
        try {
          return a.codeToHtml(e, { lang: i });
        } catch (t) {
          return console.error(t), "";
        }
      },
    }).use(Xp, { dataType: !0, figcaption: !0, lazy: !0, async: !0 });
  },
  Xi = {};
var Qp = "/public/main-T7IYXZOQ.css";
function cx(a) {
  return a
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
}
function R(a, ...e) {
  let i = a.raw,
    n = "";
  return (
    e.forEach((t, r) => {
      let o = i[r];
      Array.isArray(t) && (t = t.join("")),
        o.endsWith("$") && ((t = cx(t)), (o = o.slice(0, -1))),
        (n += o + t);
    }),
    (n += i[i.length - 1]),
    n
  );
}
var Sn = "/public/agplv3-88x31-AI7BJ3TP.gif";
var Tn = "/public/alienow-F722NEWX.gif";
var In = "/public/anydamn-EPDXWEYY.gif";
var $n = "/public/anythingbut-P7SC26EW.gif";
var jn = "/public/benis-SROGCNYG.gif";
var Rn = "/public/bestenjoyed-5PPUZ5AV.gif";
var Fn = "/public/bestvw-export-H7ESPG6Y.gif";
var Bn = "/public/cards-D57WF3WX.png";
var qn = "/public/chrome-SDGCSO3K.gif";
var zn = "/public/coke-UCQSJDCW.png";
var Ln = "/public/css-4IZ244C2.png";
var Hn = "/public/firefoxget-PTWTDP3M.gif";
var On = "/public/hair-B5ZMUMGL.gif";
var Mn = "/public/javascriptfree-WBIZITKK.gif";
var Nn = "/public/the-largest-88x31-collection-2-UNMROLFA.png";
var Gn = "/public/linux_powered-3XB4JCTP.gif";
var Un = "/public/macos_mov-5PAXNS2V.gif";
var Xn = "/public/masto-FY7MFTQH.gif";
var Vn = "/public/monero-now-4PJLOID7.gif";
var Vi = "/public/network2-Y2HTEAXS.ico";
var Jn = "/public/opengl-RTCOHNPV.png";
var Zn = "/public/possums-now-I4SEPO7L.png";
var Qn = "/public/slava-JIPXVKUI.gif";
var Kn = "/public/2001-Z77RP4TU.gif";
var Wn = "/public/webstorm-24YHM4P2.png";
var Yn = "/public/wiby-E7GX3O3V.gif";
var et = "/public/yanknow-4WCNUAZA.gif";
var it = "/public/log02-5GQ3HL2X.png";
var at = "/public/calendar-4-VOBBK3IM.png";
var Kp = "navigation-toggle",
  Wp = () => R`<input
    type="checkbox"
    id="${Kp}"
    class="visually-hidden"
  />`,
  Yp = () => R`<label
    for="${Kp}"
    class="hamburger-button big-screen-hidden"
    title="Toggle navigation menu"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10" width="100" height="10" fill="currentColor" />
      <rect y="45" width="100" height="10" fill="currentColor" />
      <rect y="80" width="100" height="10" fill="currentColor" />
    </svg>
  </label>`;
var zx = "latest",
  el = () => {
    let a = new Date().getFullYear().toString(),
      e = a === "2022" ? "2022" : `2022 - ${a}`;
    return R`<footer class="footer">
    <span>
      Copyright © ${e} Ignore This Page. All rights reserved.
    </span>
    <span>${zx}</span>
  </footer>`;
  };
var G = {
    home: "",
    about: "about",
    now: "now",
    rss: "feed",
    archive: "archive",
    tag: "tag",
    post: "post",
  },
  Ji = 4e3,
  Zi = Ji + 1;
var il = () => R`<form
    class="search"
    method="get"
    action="https://duckduckgo.com/"
  >
    <input type="hidden" name="sites" value="https://ignorethis.page" />
    <input
      type="search"
      name="q"
      autocomplete="off"
      aria-label="Search the site"
      placeholder="Search…"
      class="search__input"
    />
  </form>`;
var Lx = () => R`<svg
    class="small-screen-hidden"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="House icon"
  >
    <path
      d="M 20 85 L 40 85 L 40 60 L 60 60 L 60 85 L 80 85 L 80 50 L 90 50 L 50 15 L 10 50 L 20 50 Z"
      fill="currentColor"
    />
    <rect x="65" y="20" width="10" height="20" fill="currentColor" />
  </svg>`,
  al = () => R`<nav class="navigation">
    <span class="navigation__search"> ${il()} </span>
    <ul class="navigation__menu">
      <li class="navigation__divider big-screen-hidden" aria-hidden="true"></li>
      <li class="navigation__item">
        <a
          href="/${G.home}"
          class="navigation__button navigation__button--home"
          title="Home"
        >
          ${Lx()}
          <span class="big-screen-hidden">Home</span>
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${G.about}" class="navigation__button">About</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${G.now}" class="navigation__button">Now!</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${G.archive}" class="navigation__button">Archive</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item big-screen-hidden">
        <a class="navigation__button" href="/${G.rss}">RSS Feed</a>
      </li>
      <!--<li class="navigation__divider big-screen-hidden" aria-hidden="true"></li>
            <li class="navigation__item big-screen-hidden">
              <div class="navigation__button">
                <label for="themeSelector"> Theme: </label>
                <select name="themeSelector" id="themeSelector">
                  <option value="os">OS Default</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </li>-->
    </ul>
  </nav>`;
var nl = () => R`<a
    href="/${G.rss}"
    class="rss-button small-screen-hidden"
    title="RSS feed"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="85" r="15" fill="currentColor" />
      <path
        d="M 0 55 A 45 45 0 0 1 45 100 L 65 100 A 65 65 0 0 0 0 35 Z"
        fill="currentColor"
      />
      <path
        d="M 0 20 A 80 80 0 0 1 80 100 L 100 100 A 100 100 0 0 0 0 0 Z"
        fill="currentColor"
      />
    </svg>
  </a>`;
var tl = 10,
  rl = (a = 0) => {
    let e = `${a}`;
    if (e.length > tl) throw new Error("Hit counter overflow");
    let i = e.padStart(tl, "0");
    return R`<div class="hit-counter">
    ${i.split("").map((n) => R`<span class="hit-counter__digit">${n}</span>`)}
  </div>`;
  };
var ol = () => R`<section class="sidebar-banners">
    <img src="${On}" alt="No bad hair on the internet" />
    <img src="${Un}" alt="Made with MacOS" />
    <img src="${Gn}" alt="Linux powered" />
    <a href="https://wiby.me/">
      <img src="${Yn}" alt="Wiby search engine micro banner" />
    </a>
    <img src="${Jn}" alt="OpenGL logo micro banner" />
    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
      <img src="${Sn}" alt="AGPLv3 logo micro banner" />
    </a>
    <img src="${Fn}" alt="Best viewed with computer and monitor" />
    <img src="${In}" alt="Best viewed with any damn browser" />
    <a href="https://www.mozilla.org/en-GB/firefox/new/">
      <img
        class="sidebar-banners--rounded"
        src="${Hn}"
        alt="Get Firefox animation micro banner"
      />
    </a>
    <a href="https://www.youtube.com/user/alyankovic/videos">
      <img src="${et}" alt="Weird Al Yankovic logo micro banner" />
    </a>
    <a href="https://www.jetbrains.com/webstorm/">
      <img src="${Wn}" alt="WebStorm IDE logo micro banner" />
    </a>
    <img src="${Tn}" alt="Alien Now micro banner" />
    <img src="${$n}" alt="Anything but Chrome gif" />
    <img src="${jn}" alt="Benis Now!" />
    <img src="${Rn}" alt="Best enjoyed with Coca-Cola" />
    <img src="${Bn}" alt="Cards micro banner" />
    <img src="${qn}" alt="Chrome is evil" />
    <img src="${zn}" alt="Powered by Coca-Cola" />
    <img src="${Ln}" alt="CSS is awesome" />
    <img src="${Mn}" alt="JavaScript Free Page" />
    <a href="https://capstasher.neocities.org/88x31collection-page1.html">
      <img
        src="${Nn}"
        alt="Largest collection of 88x31 buttons"
      />
    </a>
    <a rel="me" href="https://masto.ai/@i9or">
      <img src="${Xn}" alt="Join Mastodon, leave Twitter"
    /></a>
    <a href="https://www.getmonero.org/">
      <img src="${Vn}" alt="Monero Now" />
    </a>
    <img src="${Zn}" alt="Possums Now" />
    <img src="${Qn}" alt="Glory to Ukraine!" />
    <img src="${Kn}" alt="I wish it was 2001" />
    ${rl(Math.floor(Math.random() * 1e5))}
  </section>`;
var Hx = () => R`<div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No tags yet.
</div>`,
  Ox = (a) => R`<ul
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  ${a.map(
    (e) => R`<li class="sidebar-widget__tag">
      <a href="/${G.tag}/${e.slug}">${e.text}</a>
    </li>`
  )}
</ul>`,
  sl = (a) => R` <section class="sidebar-widget">
    <header class="sidebar-widget__header">Tags</header>
    ${a.length > 0 ? Ox(a) : Hx()}
  </section>`;
var Mx = () => R` <div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No recent posts yet.
</div>`,
  Nx = (a) => R`<ul
  class="sidebar-widget__content sidebar-widget__content--list"
>
  ${a.map(
    (e) => R`<li class="sidebar-widget__list-item">
      <a href="/post/${e.slug}" tabindex="0" title="${e.title}">
        ${e.title}
      </a>
    </li>`
  )}
</ul>`,
  cl = (a) => R`<section class="sidebar-widget">
    <header class="sidebar-widget__header">Recent Posts</header>
    ${a.length > 0 ? Nx(a) : Mx()}
  </section>`;
var ze = () => process.env.NODE_ENV === "production";
var pl,
  ll = () =>
    ze()
      ? ""
      : R(
          pl ||
            (pl = st([
              `<script>
    const ws = new WebSocket("ws://localhost:`,
              `");

    ws.onopen = function () {
      console.info("[DEV] Connected");
    };

    ws.onclose = function () {
      console.info("[DEV] Connection lost, reloading in 1 second");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    ws.onmessage = function (event) {
      if (event.data === "reload") {
        window.location.reload();
      }
    };
  <\/script>`,
            ])),
          Zi.toString()
        );
var ul = ({ body: a, tags: e, recentPosts: i }) => R`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="${Vi}" type="image/x-icon" />
        <link rel="icon" href="${Vi}" type="image/x-icon" />
        <link rel="stylesheet" href="${Qp}" />
        ${ll()}
        <title>Ignore This Page</title>
      </head>
      <body class="body-container">
        ${Wp()}
        <header class="header">
          <div class="header__title-wrapper">
            <img
              class="header__logo small-screen-hidden"
              src="${it}"
              alt="Notepad logo"
              width="32"
              height="32"
            />
            <h1 class="header__title">Ignore This Page</h1>
          </div>
          <div class="header__actions">
            ${nl()} ${Yp()}
          </div>
        </header>
        ${al()}
        <main class="main">${a}</main>
        <aside class="sidebar">
          ${cl(i)} ${sl(e)}
          ${ol()}
        </aside>
        ${el()}
      </body>
    </html>`;
var W = require("node:fs/promises"),
  J = require("node:path"),
  vl = U(Ne());
var dl = U(Ne());
var Gx = (a) =>
    a.length > 0
      ? R` <section class="post__tags">
      <span>Tags:</span>
      ${a
        .map(({ slug: e, text: i }) => R`<a href="/tag/${e}">${i}</a>`)
        .join(", ")}
    </section>`
      : "",
  nt = ({
    post: a,
    tags: e = [],
    previousPost: i,
    nextPost: n,
  }) => R`<article class="post">
  <small class="post__date">
    <img
      src="${at}"
      width="16"
      height="16"
      alt="Small calendar icon"
    />
    ${dl.default.unix(a.createdAt).format("MMMM D, YYYY")}
  </small>
  ${Xi.md.render(a.content)}
  <p class="post__fin">☙</p>
  ${Gx(e)}
  <section class="post__navigation">
    ${
      i
        ? R`<a
          href="/${G.post}/${i.slug}"
          title="${i.title}"
        >
          <small>&larr; There</small>
        </a>`
        : "&nbsp;"
    }
    ${
      n
        ? R`<a
          href="/${G.post}/${n.slug}"
          title="${n.title}"
        >
          <small>Here &rarr;</small>
        </a>`
        : "&nbsp;"
    }
  </section>
</article>`;
var Ux = { "C++": "cpp" },
  tt = (a) => {
    let e = a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let [i, n] of Object.entries(Ux)) e = e.replace(i, n);
    return (
      (e = e.toLowerCase()),
      (e = e.replace(/\s+/g, "-")),
      (e = e.replace(/[^a-z0-9-]/gi, "")),
      e
    );
  };
var fl = U(Ne());
var ml = "MMMM YYYY";
var hl = () => R`<article>
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  <ul>
    <li>
      <p>${(0, fl.default)("2022-12-04").format(ml)}</p>
      <ul>
        <li>Making an almost static Blog engine using Node.js;</li>
        <li>
          Working on a legacy OpenGL demo with retro graphics and old libraries;
        </li>
        <li>
          Studying
          <a href="https://sarabander.github.io/sicp/">SICP</a>.
        </li>
      </ul>
    </li>
  </ul>
  <p>
    Inspired by other
    <a href="https://nownownow.com/about">now pages</a>.
  </p>
</article>`;
var xl = () => R`<article>
  <h1>About</h1>
  <p>
    Welcome to my personal technical blog about programming and technology! My
    private digital garden, as they say, nowadays. My name is Igor, by the way.
    You can easily find that this name is usually automatically adjusted to
    <em>Ignore</em> by many spellcheckers. Hence, the name of this blog. Here,
    you'll find posts about a variety of topics, mostly about outdated stuff,
    and probably a lot of swearing and complaining. Possibly the best thing to
    do is <em>ignore this page</em>, you have been warned.
  </p>

  <p>
    This is actually around a third attempt to start a technical blog. At this
    point, I've been stuck with programming for far too long, and now just
    trying to survive the daily grind by offloading thoughts from my head into
    some public space. So, the plan is simple: write a bunch of posts about
    things I was never able to finish, hoping it will help me to mute an endless
    stream of thoughts and self-blaming 😅. Among the topics, I plan to write
    about are low-level game programming using C, computer graphics using legacy
    OpenGL, or web development without those modern JavaScript atrocities. Why?
    Because nostalgia is a hell of a drug, this blog is just a way to return to
    those happy times virtually.
  </p>

  <p>
    Also, feedback is not welcome 😂👍, that's basically why I am not planning
    to add a comment section or share my contact details (although there's a
    link to my Mastodon somewhere on this website). Don't follow me, don't share
    my links, and don't hit that like button (there's no such button anyway). As
    already mentioned above, <em>ignore this page</em> for the good.
  </p>

  <p>
    Thank you for visiting my blog anyway, hope you won't have any strong
    feelings one way or the other about my hot takes and badly formatted
    ramblings!
  </p>

  <p>
    <strong>P.S.</strong> Or maybe there will be some articles about modern
    JavaScript atrocities. I don't know! Who cares after all? Also, get off my
    <s>lawn</s> <s>property</s> digital garden!
  </p>
</article>`;
var gl = () => R`<article>
  <h1>Archive</h1>
  <p>Not ready yet...</p>
</article>`;
var Xx = async (a) => {
    let e = [],
      i = new Map(),
      n = [];
    try {
      let r = await (0, W.opendir)(a);
      for await (let o of r) {
        let [s, c, p, ...u] = o.name.split("-"),
          m = await (0, W.readFile)((0, J.join)(a, o.name), {
            encoding: "utf-8",
          }),
          [f, l, d, h, ...x] = m.split(`
`);
        if (f !== "---" || d !== "---" || h !== "")
          throw new Error(`Post "${o.name}" is formatted incorrectly!`);
        let { tags: v } = JSON.parse(l),
          g = v.map((b) => {
            let k = tt(b);
            return i.set(b, tt(b)), { slug: k, text: b };
          });
        e.push({
          content: x.join(`
`),
          slug: u.join("-").replace(".md", ""),
          tags: g,
          createdAt: (0, vl.default)(`${s}-${c}-${p}`).unix(),
          title: x[0].replace("#", "").trim(),
        });
      }
      e.sort((o, s) => s.createdAt - o.createdAt);
      for (let o = 0; o < 5 && o < e.length; o++)
        n.push({ slug: e[o].slug, title: e[o].title });
    } catch (r) {
      console.error(r);
      return;
    }
    let t = [];
    return (
      i.forEach((r, o) => {
        t.push({ text: o, slug: r });
      }),
      { posts: e, tags: t, recentPosts: n }
    );
  },
  Vx = (a, e) => async (i, n) => {
    let t = ul({ body: i, recentPosts: a, tags: e });
    await (0, W.mkdir)(n, { recursive: !0 }),
      await (0, W.writeFile)((0, J.join)(n, "index.html"), t);
  },
  Jx = async (a) => {
    await (0, W.writeFile)(
      (0, J.join)(a, "robots.txt"),
      ["User-agent: *", "Allow: /", ""].join(`
`)
    );
  },
  rt = async () => {
    process.stdout.write("Building the blog...");
    let a = process.hrtime(),
      e = (0, J.resolve)(process.cwd(), "content/posts"),
      i = await Xx(e);
    if (!i)
      throw new Error("Hey chief, something is wrong, no blog data at all!");
    let { tags: n, recentPosts: t, posts: r } = i,
      o = (0, J.resolve)(process.cwd(), "build");
    if (r.length === 0)
      throw new Error("Hey chief, something is wrong, no posts at all!");
    let s = Vx(t, n);
    await (0, W.mkdir)(o, { recursive: !0 });
    let c;
    r.length > 1 && (c = { title: r[1].title, slug: r[1].slug }),
      await s(nt({ post: r[0], tags: r[0].tags, previousPost: c }), o);
    for (let u = 0; u < r.length; u++) {
      let m, f;
      u > 0 && (f = { slug: r[u - 1].slug, title: r[u - 1].title }),
        u < r.length - 1 &&
          (m = { slug: r[u + 1].slug, title: r[u + 1].title }),
        await s(
          nt({ post: r[u], tags: r[u].tags, previousPost: m, nextPost: f }),
          (0, J.join)(o, G.post, r[u].slug)
        );
    }
    await s(hl(), (0, J.join)(o, G.now)),
      await s(xl(), (0, J.join)(o, G.about)),
      await s(gl(), (0, J.join)(o, G.archive)),
      await Jx(o),
      ze() &&
        (await (0, W.cp)(
          (0, J.resolve)(process.cwd(), "content/images"),
          (0, J.join)(o, "images"),
          { recursive: !0 }
        ),
        await (0, W.cp)(
          (0, J.resolve)(process.cwd(), "tmp/public"),
          (0, J.join)(o, "public"),
          { recursive: !0 }
        ));
    let p = Math.round(process.hrtime(a)[1] / 1e6);
    process.stdout.write(` done in ${p}ms
`);
  };
(async () => {
  if (((Xi.md = await Zp()), await rt(), ze())) return;
  let a = new tn.default({ port: Zi });
  (0, yl.watch)((0, bl.resolve)(process.cwd(), "content/posts")).on(
    "change",
    async () => {
      await rt(),
        console.info("Reloading..."),
        a.clients.forEach((i) => i.send("reload"));
    }
  );
  let e = new ne();
  try {
    e.use(Nr())
      .use(
        "/public",
        (0, Qi.default)("tmp/public", { maxAge: 31536e3, immutable: !0 })
      )
      .use(
        "/images",
        (0, Qi.default)("content/images", { maxAge: 31536e3, immutable: !0 })
      )
      .use("/", (0, Qi.default)("build/", { dev: !0 }))
      .listen(Ji, () => {
        console.info(`\u{1F680} Listening on http://localhost:${Ji}`);
      });
  } catch (i) {
    console.error(i);
  }
})();
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
