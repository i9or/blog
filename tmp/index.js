"use strict";
var Cl = Object.create,
  sn = Object.freeze,
  Wi = Object.defineProperty;
var El = Object.getOwnPropertyDescriptor;
var Al = Object.getOwnPropertyNames;
var Pl = Object.getPrototypeOf,
  Dl = Object.prototype.hasOwnProperty;
var _ = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports);
var Sl = (a, e, i, t) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let n of Al(e))
      !Dl.call(a, n) &&
        n !== i &&
        Wi(a, n, {
          get: () => e[n],
          enumerable: !(t = El(e, n)) || t.enumerable,
        });
  return a;
};
var X = (a, e, i) => (
  (i = a != null ? Cl(Pl(a)) : {}),
  Sl(
    e || !a || !a.__esModule
      ? Wi(i, "default", { value: a, enumerable: !0 })
      : i,
    a
  )
);
var cn = (a, e) => sn(Wi(a, "raw", { value: sn(e || a.slice()) }));
var un = _((ln) => {
  var { join: Yi, resolve: Tl } = require("path"),
    { readdirSync: Il, statSync: $l } = require("fs");
  function pn(a, e, i = "") {
    a = Tl(".", a);
    let t = Il(a),
      n = 0,
      r,
      o;
    for (; n < t.length; n++)
      (r = Yi(a, t[n])),
        (o = $l(r)),
        o.isDirectory() ? pn(r, e, Yi(i, t[n])) : e(Yi(i, t[n]), r, o);
  }
  ln.totalist = pn;
});
var mn = _((dn) => {
  var jl = require("querystring");
  function Rl(a) {
    let e = a.url;
    if (e == null) return;
    let i = a._parsedUrl;
    if (i && i.raw === e) return i;
    let t = e,
      n = "",
      r;
    if (e.length > 1) {
      let o = e.indexOf("?", 1);
      o !== -1 &&
        ((n = e.substring(o)),
        (t = e.substring(0, o)),
        n.length > 1 && (r = jl.parse(n.substring(1))));
    }
    return (a._parsedUrl = { pathname: t, search: n, query: r, raw: e });
  }
  dn.parse = Rl;
});
var hn = _((ea) => {
  var fn = {
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
  function ql(a) {
    let e = ("" + a).trim().toLowerCase(),
      i = e.lastIndexOf(".");
    return fn[~i ? e.substring(++i) : e];
  }
  ea.lookup = ql;
  ea.mimes = fn;
});
var bn = _((ig, vn) => {
  var ia = require("fs"),
    { join: Fl, normalize: Bl, resolve: zl } = require("path"),
    { totalist: Ll } = un(),
    { parse: Hl } = mn(),
    { lookup: Ol } = hn(),
    Ml = () => {};
  function Nl(a, e) {
    for (let i = 0; i < e.length; i++) if (e[i].test(a)) return !0;
  }
  function xn(a, e) {
    let i = 0,
      t,
      n = a.length - 1;
    a.charCodeAt(n) === 47 && (a = a.substring(0, n));
    let r = [],
      o = `${a}/index`;
    for (; i < e.length; i++)
      (t = e[i] ? `.${e[i]}` : ""), a && r.push(a + t), r.push(o + t);
    return r;
  }
  function Ul(a, e, i) {
    let t = 0,
      n,
      r = xn(e, i);
    for (; t < r.length; t++) if ((n = a[r[t]])) return n;
  }
  function Gl(a, e, i, t) {
    let n = 0,
      r = xn(i, t),
      o,
      s,
      c,
      p;
    for (; n < r.length; n++)
      if (((o = Bl(Fl(a, (c = r[n])))), o.startsWith(a) && ia.existsSync(o))) {
        if (((s = ia.statSync(o)), s.isDirectory())) continue;
        return (
          (p = gn(c, s, e)),
          (p["Cache-Control"] = e ? "no-cache" : "no-store"),
          { abs: o, stats: s, headers: p }
        );
      }
  }
  function Xl(a, e) {
    return (e.statusCode = 404), e.end();
  }
  function Vl(a, e, i, t, n) {
    let r = 200,
      o,
      s = {};
    n = { ...n };
    for (let c in n) (o = e.getHeader(c)), o && (n[c] = o);
    if (
      ((o = e.getHeader("content-type")) && (n["Content-Type"] = o),
      a.headers.range)
    ) {
      r = 206;
      let [c, p] = a.headers.range.replace("bytes=", "").split("-"),
        u = (s.end = parseInt(p, 10) || t.size - 1),
        m = (s.start = parseInt(c, 10) || 0);
      if (m >= t.size || u >= t.size)
        return (
          e.setHeader("Content-Range", `bytes */${t.size}`),
          (e.statusCode = 416),
          e.end()
        );
      (n["Content-Range"] = `bytes ${m}-${u}/${t.size}`),
        (n["Content-Length"] = u - m + 1),
        (n["Accept-Ranges"] = "bytes");
    }
    e.writeHead(r, n), ia.createReadStream(i, s).pipe(e);
  }
  var Jl = { ".br": "br", ".gz": "gzip" };
  function gn(a, e, i) {
    let t = Jl[a.slice(-3)],
      n = Ol(a.slice(0, t && -3)) || "";
    n === "text/html" && (n += ";charset=utf-8");
    let r = {
      "Content-Length": e.size,
      "Content-Type": n,
      "Last-Modified": e.mtime.toUTCString(),
    };
    return (
      t && (r["Content-Encoding"] = t),
      i && (r.ETag = `W/"${e.size}-${e.mtime.getTime()}"`),
      r
    );
  }
  vn.exports = function (a, e = {}) {
    a = zl(a || ".");
    let i = e.onNoMatch || Xl,
      t = e.setHeaders || Ml,
      n = e.extensions || ["html", "htm"],
      r = e.gzip && n.map((d) => `${d}.gz`).concat("gz"),
      o = e.brotli && n.map((d) => `${d}.br`).concat("br"),
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
        Ll(a, (d, h, x) => {
          if (!/\.well-known[\\+\/]/.test(d)) {
            if (!e.dotfiles && /(^\.|[\\+|\/+]\.)/.test(d)) return;
          }
          let v = gn(d, x, p);
          f && (v["Cache-Control"] = f),
            (s["/" + d.normalize().replace(/\\+/g, "/")] = {
              abs: h,
              stats: x,
              headers: v,
            });
        });
    let l = e.dev ? Gl.bind(0, a, p) : Ul.bind(0, s);
    return function (d, h, x) {
      let v = [""],
        g = Hl(d).pathname,
        y = d.headers["accept-encoding"] || "";
      if (
        (r && y.includes("gzip") && v.unshift(...r),
        o && /(br|brotli)/i.test(y) && v.unshift(...o),
        v.push(...n),
        g.indexOf("%") !== -1)
      )
        try {
          g = decodeURIComponent(g);
        } catch {}
      let D = l(g, v) || (u && !Nl(g, m) && l(c, v));
      if (!D) return x ? x() : i(d, h);
      if (p && d.headers["if-none-match"] === D.headers.ETag)
        return h.writeHead(304), h.end();
      (r || o) && h.setHeader("Vary", "Accept-Encoding"),
        t(h, g, D.stats),
        Vl(d, h, D.abs, D.stats, D.headers);
    };
  };
});
var wn = _((_n, oi) => {
  (function (a) {
    "use strict";
    let e = "(0?\\d+|0x[a-f0-9]+)",
      i = {
        fourOctet: new RegExp(`^${e}\\.${e}\\.${e}\\.${e}$`, "i"),
        threeOctet: new RegExp(`^${e}\\.${e}\\.${e}$`, "i"),
        twoOctet: new RegExp(`^${e}\\.${e}$`, "i"),
        longValue: new RegExp(`^${e}$`, "i"),
      },
      t = new RegExp("^0[0-7]+$", "i"),
      n = new RegExp("^0x[a-f0-9]+$", "i"),
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
        y;
      for (
        v && ((v = v.substring(1)), (l = l.replace(/%.+$/, "")));
        (x = l.indexOf(":", x + 1)) >= 0;

      )
        h++;
      if (
        (l.substr(0, 2) === "::" && h--, l.substr(-2, 2) === "::" && h--, h > d)
      )
        return null;
      for (y = d - h, g = ":"; y--; ) g += "0:";
      return (
        (l = l.replace("::", g)),
        l[0] === ":" && (l = l.slice(1)),
        l[l.length - 1] === ":" && (l = l.slice(0, -1)),
        (d = (function () {
          let D = l.split(":"),
            w = [];
          for (let b = 0; b < D.length; b++) w.push(parseInt(D[b], 16));
          return w;
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
      if (n.test(l)) return parseInt(l, 16);
      if (l[0] === "0" && !isNaN(parseInt(l[1], 10))) {
        if (t.test(l)) return parseInt(l, 8);
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
            y;
          for (v = 3; v >= 0; v -= 1)
            if (((g = this.octets[v]), g in x)) {
              if (((y = x[g]), h && y !== 0)) return null;
              y !== 8 && (h = !0), (d += y);
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
            for (let y = 0; y < v.length; y++) (h = v[y]), g.push(u(h));
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
            for (let y = 7; y >= 0; y -= 1)
              if (((v = this.parts[y]), v in x)) {
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
        } catch (y) {
          throw new Error(
            `ipaddr: the address does not have IPv6 CIDR format (${y})`
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
        let d, h, x, v, g, y;
        if ((x = l.match(s.deprecatedTransitional)))
          return this.parser(`::ffff:${x[1]}`);
        if (s.native.test(l)) return c(l, 8);
        if (
          (x = l.match(s.transitional)) &&
          ((y = x[6] || ""), (d = c(x[1].slice(0, -1) + y, 6)), d.parts)
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
        let x, v, g, y;
        h == null && (h = "unicast");
        for (v in d)
          if (Object.prototype.hasOwnProperty.call(d, v)) {
            for (
              g = d[v], g[0] && !(g[0] instanceof Array) && (g = [g]), x = 0;
              x < g.length;
              x++
            )
              if (((y = g[x]), l.kind() === y[0].kind() && l.match.apply(l, y)))
                return v;
          }
        return h;
      }),
      typeof oi < "u" && oi.exports ? (oi.exports = f) : (a.ipaddr = f);
  })(_n);
});
var Tn = _((cg, hu) => {
  hu.exports = {
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
var $n = _((pg, In) => {
  In.exports = Tn();
});
var Mn = _((mg, sa) => {
  "use strict";
  sa.exports = On;
  sa.exports.preferredCharsets = On;
  var Du = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function Su(a) {
    for (var e = a.split(","), i = 0, t = 0; i < e.length; i++) {
      var n = Tu(e[i].trim(), i);
      n && (e[t++] = n);
    }
    return (e.length = t), e;
  }
  function Tu(a, e) {
    var i = Du.exec(a);
    if (!i) return null;
    var t = i[1],
      n = 1;
    if (i[2])
      for (var r = i[2].split(";"), o = 0; o < r.length; o++) {
        var s = r[o].trim().split("=");
        if (s[0] === "q") {
          n = parseFloat(s[1]);
          break;
        }
      }
    return { charset: t, q: n, i: e };
  }
  function Iu(a, e, i) {
    for (var t = { o: -1, q: 0, s: 0 }, n = 0; n < e.length; n++) {
      var r = $u(a, e[n], i);
      r && (t.s - r.s || t.q - r.q || t.o - r.o) < 0 && (t = r);
    }
    return t;
  }
  function $u(a, e, i) {
    var t = 0;
    if (e.charset.toLowerCase() === a.toLowerCase()) t |= 1;
    else if (e.charset !== "*") return null;
    return { i, o: e.i, q: e.q, s: t };
  }
  function On(a, e) {
    var i = Su(a === void 0 ? "*" : a || "");
    if (!e) return i.filter(Hn).sort(Ln).map(ju);
    var t = e.map(function (r, o) {
      return Iu(r, i, o);
    });
    return t
      .filter(Hn)
      .sort(Ln)
      .map(function (r) {
        return e[t.indexOf(r)];
      });
  }
  function Ln(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function ju(a) {
    return a.charset;
  }
  function Hn(a) {
    return a.q > 0;
  }
});
var Vn = _((fg, ca) => {
  "use strict";
  ca.exports = Xn;
  ca.exports.preferredEncodings = Xn;
  var Ru = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
  function qu(a) {
    for (var e = a.split(","), i = !1, t = 1, n = 0, r = 0; n < e.length; n++) {
      var o = Fu(e[n].trim(), n);
      o &&
        ((e[r++] = o),
        (i = i || Gn("identity", o)),
        (t = Math.min(t, o.q || 1)));
    }
    return (
      i || (e[r++] = { encoding: "identity", q: t, i: n }), (e.length = r), e
    );
  }
  function Fu(a, e) {
    var i = Ru.exec(a);
    if (!i) return null;
    var t = i[1],
      n = 1;
    if (i[2])
      for (var r = i[2].split(";"), o = 0; o < r.length; o++) {
        var s = r[o].trim().split("=");
        if (s[0] === "q") {
          n = parseFloat(s[1]);
          break;
        }
      }
    return { encoding: t, q: n, i: e };
  }
  function Bu(a, e, i) {
    for (var t = { o: -1, q: 0, s: 0 }, n = 0; n < e.length; n++) {
      var r = Gn(a, e[n], i);
      r && (t.s - r.s || t.q - r.q || t.o - r.o) < 0 && (t = r);
    }
    return t;
  }
  function Gn(a, e, i) {
    var t = 0;
    if (e.encoding.toLowerCase() === a.toLowerCase()) t |= 1;
    else if (e.encoding !== "*") return null;
    return { i, o: e.i, q: e.q, s: t };
  }
  function Xn(a, e) {
    var i = qu(a || "");
    if (!e) return i.filter(Un).sort(Nn).map(zu);
    var t = e.map(function (r, o) {
      return Bu(r, i, o);
    });
    return t
      .filter(Un)
      .sort(Nn)
      .map(function (r) {
        return e[t.indexOf(r)];
      });
  }
  function Nn(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function zu(a) {
    return a.encoding;
  }
  function Un(a) {
    return a.q > 0;
  }
});
var Wn = _((hg, pa) => {
  "use strict";
  pa.exports = Kn;
  pa.exports.preferredLanguages = Kn;
  var Lu = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
  function Hu(a) {
    for (var e = a.split(","), i = 0, t = 0; i < e.length; i++) {
      var n = Qn(e[i].trim(), i);
      n && (e[t++] = n);
    }
    return (e.length = t), e;
  }
  function Qn(a, e) {
    var i = Lu.exec(a);
    if (!i) return null;
    var t = i[1],
      n = i[2],
      r = t;
    n && (r += "-" + n);
    var o = 1;
    if (i[3])
      for (var s = i[3].split(";"), c = 0; c < s.length; c++) {
        var p = s[c].split("=");
        p[0] === "q" && (o = parseFloat(p[1]));
      }
    return { prefix: t, suffix: n, q: o, i: e, full: r };
  }
  function Ou(a, e, i) {
    for (var t = { o: -1, q: 0, s: 0 }, n = 0; n < e.length; n++) {
      var r = Mu(a, e[n], i);
      r && (t.s - r.s || t.q - r.q || t.o - r.o) < 0 && (t = r);
    }
    return t;
  }
  function Mu(a, e, i) {
    var t = Qn(a);
    if (!t) return null;
    var n = 0;
    if (e.full.toLowerCase() === t.full.toLowerCase()) n |= 4;
    else if (e.prefix.toLowerCase() === t.full.toLowerCase()) n |= 2;
    else if (e.full.toLowerCase() === t.prefix.toLowerCase()) n |= 1;
    else if (e.full !== "*") return null;
    return { i, o: e.i, q: e.q, s: n };
  }
  function Kn(a, e) {
    var i = Hu(a === void 0 ? "*" : a || "");
    if (!e) return i.filter(Zn).sort(Jn).map(Nu);
    var t = e.map(function (r, o) {
      return Ou(r, i, o);
    });
    return t
      .filter(Zn)
      .sort(Jn)
      .map(function (r) {
        return e[t.indexOf(r)];
      });
  }
  function Jn(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Nu(a) {
    return a.full;
  }
  function Zn(a) {
    return a.q > 0;
  }
});
var nr = _((xg, la) => {
  "use strict";
  la.exports = ar;
  la.exports.preferredMediaTypes = ar;
  var Uu = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
  function Gu(a) {
    for (var e = Qu(a), i = 0, t = 0; i < e.length; i++) {
      var n = ir(e[i].trim(), i);
      n && (e[t++] = n);
    }
    return (e.length = t), e;
  }
  function ir(a, e) {
    var i = Uu.exec(a);
    if (!i) return null;
    var t = Object.create(null),
      n = 1,
      r = i[2],
      o = i[1];
    if (i[3])
      for (var s = Ku(i[3]).map(Zu), c = 0; c < s.length; c++) {
        var p = s[c],
          u = p[0].toLowerCase(),
          m = p[1],
          f =
            m && m[0] === '"' && m[m.length - 1] === '"'
              ? m.substr(1, m.length - 2)
              : m;
        if (u === "q") {
          n = parseFloat(f);
          break;
        }
        t[u] = f;
      }
    return { type: o, subtype: r, params: t, q: n, i: e };
  }
  function Xu(a, e, i) {
    for (var t = { o: -1, q: 0, s: 0 }, n = 0; n < e.length; n++) {
      var r = Vu(a, e[n], i);
      r && (t.s - r.s || t.q - r.q || t.o - r.o) < 0 && (t = r);
    }
    return t;
  }
  function Vu(a, e, i) {
    var t = ir(a),
      n = 0;
    if (!t) return null;
    if (e.type.toLowerCase() == t.type.toLowerCase()) n |= 4;
    else if (e.type != "*") return null;
    if (e.subtype.toLowerCase() == t.subtype.toLowerCase()) n |= 2;
    else if (e.subtype != "*") return null;
    var r = Object.keys(e.params);
    if (r.length > 0)
      if (
        r.every(function (o) {
          return (
            e.params[o] == "*" ||
            (e.params[o] || "").toLowerCase() ==
              (t.params[o] || "").toLowerCase()
          );
        })
      )
        n |= 1;
      else return null;
    return { i, o: e.i, q: e.q, s: n };
  }
  function ar(a, e) {
    var i = Gu(a === void 0 ? "*/*" : a || "");
    if (!e) return i.filter(er).sort(Yn).map(Ju);
    var t = e.map(function (r, o) {
      return Xu(r, i, o);
    });
    return t
      .filter(er)
      .sort(Yn)
      .map(function (r) {
        return e[t.indexOf(r)];
      });
  }
  function Yn(a, e) {
    return e.q - a.q || e.s - a.s || a.o - e.o || a.i - e.i || 0;
  }
  function Ju(a) {
    return a.type + "/" + a.subtype;
  }
  function er(a) {
    return a.q > 0;
  }
  function tr(a) {
    for (var e = 0, i = 0; (i = a.indexOf('"', i)) !== -1; ) e++, i++;
    return e;
  }
  function Zu(a) {
    var e = a.indexOf("="),
      i,
      t;
    return (
      e === -1 ? (i = a) : ((i = a.substr(0, e)), (t = a.substr(e + 1))), [i, t]
    );
  }
  function Qu(a) {
    for (var e = a.split(","), i = 1, t = 0; i < e.length; i++)
      tr(e[t]) % 2 == 0 ? (e[++t] = e[i]) : (e[t] += "," + e[i]);
    return (e.length = t + 1), e;
  }
  function Ku(a) {
    for (var e = a.split(";"), i = 1, t = 0; i < e.length; i++)
      tr(e[t]) % 2 == 0 ? (e[++t] = e[i]) : (e[t] += ";" + e[i]);
    e.length = t + 1;
    for (var i = 0; i < e.length; i++) e[i] = e[i].trim();
    return e;
  }
});
var rr = _((gg, ua) => {
  "use strict";
  var Wu = Mn(),
    Yu = Vn(),
    ed = Wn(),
    id = nr();
  ua.exports = H;
  ua.exports.Negotiator = H;
  function H(a) {
    if (!(this instanceof H)) return new H(a);
    this.request = a;
  }
  H.prototype.charset = function (e) {
    var i = this.charsets(e);
    return i && i[0];
  };
  H.prototype.charsets = function (e) {
    return Wu(this.request.headers["accept-charset"], e);
  };
  H.prototype.encoding = function (e) {
    var i = this.encodings(e);
    return i && i[0];
  };
  H.prototype.encodings = function (e) {
    return Yu(this.request.headers["accept-encoding"], e);
  };
  H.prototype.language = function (e) {
    var i = this.languages(e);
    return i && i[0];
  };
  H.prototype.languages = function (e) {
    return ed(this.request.headers["accept-language"], e);
  };
  H.prototype.mediaType = function (e) {
    var i = this.mediaTypes(e);
    return i && i[0];
  };
  H.prototype.mediaTypes = function (e) {
    return id(this.request.headers.accept, e);
  };
  H.prototype.preferredCharset = H.prototype.charset;
  H.prototype.preferredCharsets = H.prototype.charsets;
  H.prototype.preferredEncoding = H.prototype.encoding;
  H.prototype.preferredEncodings = H.prototype.encodings;
  H.prototype.preferredLanguage = H.prototype.language;
  H.prototype.preferredLanguages = H.prototype.languages;
  H.prototype.preferredMediaType = H.prototype.mediaType;
  H.prototype.preferredMediaTypes = H.prototype.mediaTypes;
});
var Mr = _((Ov, Or) => {
  "use strict";
  Or.exports = {
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
var Ne = _((qa, Fa) => {
  (function (a, e) {
    typeof qa == "object" && typeof Fa < "u"
      ? (Fa.exports = e())
      : typeof define == "function" && define.amd
      ? define(e)
      : ((a = typeof globalThis < "u" ? globalThis : a || self).dayjs = e());
  })(qa, function () {
    "use strict";
    var a = 1e3,
      e = 6e4,
      i = 36e5,
      t = "millisecond",
      n = "second",
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
            k = A % 100;
          return "[" + A + (E[(k - 20) % 10] || E[k] || E[0]) + "]";
        },
      },
      v = function (A, E, k) {
        var I = String(A);
        return !I || I.length >= E
          ? A
          : "" + Array(E + 1 - I.length).join(k) + A;
      },
      g = {
        s: v,
        z: function (A) {
          var E = -A.utcOffset(),
            k = Math.abs(E),
            I = Math.floor(k / 60),
            P = k % 60;
          return (E <= 0 ? "+" : "-") + v(I, 2, "0") + ":" + v(P, 2, "0");
        },
        m: function A(E, k) {
          if (E.date() < k.date()) return -A(k, E);
          var I = 12 * (k.year() - E.year()) + (k.month() - E.month()),
            P = E.clone().add(I, p),
            T = k - P < 0,
            $ = E.clone().add(I + (T ? -1 : 1), p);
          return +(-(I + (k - P) / (T ? P - $ : $ - P)) || 0);
        },
        a: function (A) {
          return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
        },
        p: function (A) {
          return (
            { M: p, y: m, w: c, d: s, D: f, h: o, m: r, s: n, ms: t, Q: u }[
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
      y = "en",
      D = {};
    D[y] = x;
    var w = function (A) {
        return A instanceof L;
      },
      b = function A(E, k, I) {
        var P;
        if (!E) return y;
        if (typeof E == "string") {
          var T = E.toLowerCase();
          D[T] && (P = T), k && ((D[T] = k), (P = T));
          var $ = E.split("-");
          if (!P && $.length > 1) return A($[0]);
        } else {
          var B = E.name;
          (D[B] = E), (P = B);
        }
        return !I && P && (y = P), P || (!I && y);
      },
      C = function (A, E) {
        if (w(A)) return A.clone();
        var k = typeof E == "object" ? E : {};
        return (k.date = A), (k.args = arguments), new L(k);
      },
      S = g;
    (S.l = b),
      (S.i = w),
      (S.w = function (A, E) {
        return C(A, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      });
    var L = (function () {
        function A(k) {
          (this.$L = b(k.locale, null, !0)), this.parse(k);
        }
        var E = A.prototype;
        return (
          (E.parse = function (k) {
            (this.$d = (function (I) {
              var P = I.date,
                T = I.utc;
              if (P === null) return new Date(NaN);
              if (S.u(P)) return new Date();
              if (P instanceof Date) return new Date(P);
              if (typeof P == "string" && !/Z$/i.test(P)) {
                var $ = P.match(d);
                if ($) {
                  var B = $[2] - 1 || 0,
                    M = ($[7] || "0").substring(0, 3);
                  return T
                    ? new Date(
                        Date.UTC(
                          $[1],
                          B,
                          $[3] || 1,
                          $[4] || 0,
                          $[5] || 0,
                          $[6] || 0,
                          M
                        )
                      )
                    : new Date(
                        $[1],
                        B,
                        $[3] || 1,
                        $[4] || 0,
                        $[5] || 0,
                        $[6] || 0,
                        M
                      );
                }
              }
              return new Date(P);
            })(k)),
              (this.$x = k.x || {}),
              this.init();
          }),
          (E.init = function () {
            var k = this.$d;
            (this.$y = k.getFullYear()),
              (this.$M = k.getMonth()),
              (this.$D = k.getDate()),
              (this.$W = k.getDay()),
              (this.$H = k.getHours()),
              (this.$m = k.getMinutes()),
              (this.$s = k.getSeconds()),
              (this.$ms = k.getMilliseconds());
          }),
          (E.$utils = function () {
            return S;
          }),
          (E.isValid = function () {
            return this.$d.toString() !== l;
          }),
          (E.isSame = function (k, I) {
            var P = C(k);
            return this.startOf(I) <= P && P <= this.endOf(I);
          }),
          (E.isAfter = function (k, I) {
            return C(k) < this.startOf(I);
          }),
          (E.isBefore = function (k, I) {
            return this.endOf(I) < C(k);
          }),
          (E.$g = function (k, I, P) {
            return S.u(k) ? this[I] : this.set(P, k);
          }),
          (E.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (E.valueOf = function () {
            return this.$d.getTime();
          }),
          (E.startOf = function (k, I) {
            var P = this,
              T = !!S.u(I) || I,
              $ = S.p(k),
              B = function (De, Q) {
                var he = S.w(
                  P.$u ? Date.UTC(P.$y, Q, De) : new Date(P.$y, Q, De),
                  P
                );
                return T ? he : he.endOf(s);
              },
              M = function (De, Q) {
                return S.w(
                  P.toDate()[De].apply(
                    P.toDate("s"),
                    (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)
                  ),
                  P
                );
              },
              O = this.$W,
              N = this.$M,
              K = this.$D,
              W = "set" + (this.$u ? "UTC" : "");
            switch ($) {
              case m:
                return T ? B(1, 0) : B(31, 11);
              case p:
                return T ? B(1, N) : B(0, N + 1);
              case c:
                var re = this.$locale().weekStart || 0,
                  ue = (O < re ? O + 7 : O) - re;
                return B(T ? K - ue : K + (6 - ue), N);
              case s:
              case f:
                return M(W + "Hours", 0);
              case o:
                return M(W + "Minutes", 1);
              case r:
                return M(W + "Seconds", 2);
              case n:
                return M(W + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (E.endOf = function (k) {
            return this.startOf(k, !1);
          }),
          (E.$set = function (k, I) {
            var P,
              T = S.p(k),
              $ = "set" + (this.$u ? "UTC" : ""),
              B = ((P = {}),
              (P[s] = $ + "Date"),
              (P[f] = $ + "Date"),
              (P[p] = $ + "Month"),
              (P[m] = $ + "FullYear"),
              (P[o] = $ + "Hours"),
              (P[r] = $ + "Minutes"),
              (P[n] = $ + "Seconds"),
              (P[t] = $ + "Milliseconds"),
              P)[T],
              M = T === s ? this.$D + (I - this.$W) : I;
            if (T === p || T === m) {
              var O = this.clone().set(f, 1);
              O.$d[B](M),
                O.init(),
                (this.$d = O.set(f, Math.min(this.$D, O.daysInMonth())).$d);
            } else B && this.$d[B](M);
            return this.init(), this;
          }),
          (E.set = function (k, I) {
            return this.clone().$set(k, I);
          }),
          (E.get = function (k) {
            return this[S.p(k)]();
          }),
          (E.add = function (k, I) {
            var P,
              T = this;
            k = Number(k);
            var $ = S.p(I),
              B = function (N) {
                var K = C(T);
                return S.w(K.date(K.date() + Math.round(N * k)), T);
              };
            if ($ === p) return this.set(p, this.$M + k);
            if ($ === m) return this.set(m, this.$y + k);
            if ($ === s) return B(1);
            if ($ === c) return B(7);
            var M = ((P = {}), (P[r] = e), (P[o] = i), (P[n] = a), P)[$] || 1,
              O = this.$d.getTime() + k * M;
            return S.w(O, this);
          }),
          (E.subtract = function (k, I) {
            return this.add(-1 * k, I);
          }),
          (E.format = function (k) {
            var I = this,
              P = this.$locale();
            if (!this.isValid()) return P.invalidDate || l;
            var T = k || "YYYY-MM-DDTHH:mm:ssZ",
              $ = S.z(this),
              B = this.$H,
              M = this.$m,
              O = this.$M,
              N = P.weekdays,
              K = P.months,
              W = function (Q, he, Ki, ri) {
                return (Q && (Q[he] || Q(I, T))) || Ki[he].slice(0, ri);
              },
              re = function (Q) {
                return S.s(B % 12 || 12, Q, "0");
              },
              ue =
                P.meridiem ||
                function (Q, he, Ki) {
                  var ri = Q < 12 ? "AM" : "PM";
                  return Ki ? ri.toLowerCase() : ri;
                },
              De = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: O + 1,
                MM: S.s(O + 1, 2, "0"),
                MMM: W(P.monthsShort, O, K, 3),
                MMMM: W(K, O),
                D: this.$D,
                DD: S.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: W(P.weekdaysMin, this.$W, N, 2),
                ddd: W(P.weekdaysShort, this.$W, N, 3),
                dddd: N[this.$W],
                H: String(B),
                HH: S.s(B, 2, "0"),
                h: re(1),
                hh: re(2),
                a: ue(B, M, !0),
                A: ue(B, M, !1),
                m: String(M),
                mm: S.s(M, 2, "0"),
                s: String(this.$s),
                ss: S.s(this.$s, 2, "0"),
                SSS: S.s(this.$ms, 3, "0"),
                Z: $,
              };
            return T.replace(h, function (Q, he) {
              return he || De[Q] || $.replace(":", "");
            });
          }),
          (E.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (E.diff = function (k, I, P) {
            var T,
              $ = S.p(I),
              B = C(k),
              M = (B.utcOffset() - this.utcOffset()) * e,
              O = this - B,
              N = S.m(this, B);
            return (
              (N =
                ((T = {}),
                (T[m] = N / 12),
                (T[p] = N),
                (T[u] = N / 3),
                (T[c] = (O - M) / 6048e5),
                (T[s] = (O - M) / 864e5),
                (T[o] = O / i),
                (T[r] = O / e),
                (T[n] = O / a),
                T)[$] || O),
              P ? N : S.a(N)
            );
          }),
          (E.daysInMonth = function () {
            return this.endOf(p).$D;
          }),
          (E.$locale = function () {
            return D[this.$L];
          }),
          (E.locale = function (k, I) {
            if (!k) return this.$L;
            var P = this.clone(),
              T = b(k, I, !0);
            return T && (P.$L = T), P;
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
      j = L.prototype;
    return (
      (C.prototype = j),
      [
        ["$ms", t],
        ["$s", n],
        ["$m", r],
        ["$H", o],
        ["$W", s],
        ["$M", p],
        ["$y", m],
        ["$D", f],
      ].forEach(function (A) {
        j[A[1]] = function (E) {
          return this.$g(E, A[0], A[1]);
        };
      }),
      (C.extend = function (A, E) {
        return A.$i || (A(E, L, C), (A.$i = !0)), C;
      }),
      (C.locale = b),
      (C.isDayjs = w),
      (C.unix = function (A) {
        return C(1e3 * A);
      }),
      (C.en = D[y]),
      (C.Ls = D),
      (C.p = {}),
      C
    );
  });
});
var Jr = _((Uv, Vr) => {
  "use strict";
  var { Duplex: Ud } = require("stream");
  function Gr(a) {
    a.emit("close");
  }
  function Gd() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function Xr(a) {
    this.removeListener("error", Xr),
      this.destroy(),
      this.listenerCount("error") === 0 && this.emit("error", a);
  }
  function Xd(a, e) {
    let i = !0,
      t = new Ud({
        ...e,
        autoDestroy: !1,
        emitClose: !1,
        objectMode: !1,
        writableObjectMode: !1,
      });
    return (
      a.on("message", function (r, o) {
        let s = !o && t._readableState.objectMode ? r.toString() : r;
        t.push(s) || a.pause();
      }),
      a.once("error", function (r) {
        t.destroyed || ((i = !1), t.destroy(r));
      }),
      a.once("close", function () {
        t.destroyed || t.push(null);
      }),
      (t._destroy = function (n, r) {
        if (a.readyState === a.CLOSED) {
          r(n), process.nextTick(Gr, t);
          return;
        }
        let o = !1;
        a.once("error", function (c) {
          (o = !0), r(c);
        }),
          a.once("close", function () {
            o || r(n), process.nextTick(Gr, t);
          }),
          i && a.terminate();
      }),
      (t._final = function (n) {
        if (a.readyState === a.CONNECTING) {
          a.once("open", function () {
            t._final(n);
          });
          return;
        }
        a._socket !== null &&
          (a._socket._writableState.finished
            ? (n(), t._readableState.endEmitted && t.destroy())
            : (a._socket.once("finish", function () {
                n();
              }),
              a.close()));
      }),
      (t._read = function () {
        a.isPaused && a.resume();
      }),
      (t._write = function (n, r, o) {
        if (a.readyState === a.CONNECTING) {
          a.once("open", function () {
            t._write(n, r, o);
          });
          return;
        }
        a.send(n, o);
      }),
      t.on("end", Gd),
      t.on("error", Xr),
      t
    );
  }
  Vr.exports = Xd;
});
var ge = _((Gv, Zr) => {
  "use strict";
  Zr.exports = {
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
var Ue = _((Xv, _i) => {
  "use strict";
  var { EMPTY_BUFFER: Vd } = ge(),
    za = Buffer[Symbol.species];
  function Jd(a, e) {
    if (a.length === 0) return Vd;
    if (a.length === 1) return a[0];
    let i = Buffer.allocUnsafe(e),
      t = 0;
    for (let n = 0; n < a.length; n++) {
      let r = a[n];
      i.set(r, t), (t += r.length);
    }
    return t < e ? new za(i.buffer, i.byteOffset, t) : i;
  }
  function Qr(a, e, i, t, n) {
    for (let r = 0; r < n; r++) i[t + r] = a[r] ^ e[r & 3];
  }
  function Kr(a, e) {
    for (let i = 0; i < a.length; i++) a[i] ^= e[i & 3];
  }
  function Zd(a) {
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
    concat: Jd,
    mask: Qr,
    toArrayBuffer: Zd,
    toBuffer: La,
    unmask: Kr,
  };
  if (!process.env.WS_NO_BUFFER_UTIL)
    try {
      let a = require("bufferutil");
      (_i.exports.mask = function (e, i, t, n, r) {
        r < 48 ? Qr(e, i, t, n, r) : a.mask(e, i, t, n, r);
      }),
        (_i.exports.unmask = function (e, i) {
          e.length < 32 ? Kr(e, i) : a.unmask(e, i);
        });
    } catch {}
});
var eo = _((Vv, Yr) => {
  "use strict";
  var Wr = Symbol("kDone"),
    Ha = Symbol("kRun"),
    Oa = class {
      constructor(e) {
        (this[Wr] = () => {
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
          this.pending++, e(this[Wr]);
        }
      }
    };
  Yr.exports = Oa;
});
var Ve = _((Jv, no) => {
  "use strict";
  var Ge = require("zlib"),
    io = Ue(),
    Qd = eo(),
    { kStatusCode: ao } = ge(),
    Kd = Buffer[Symbol.species],
    Wd = Buffer.from([0, 0, 255, 255]),
    Ci = Symbol("permessage-deflate"),
    de = Symbol("total-length"),
    Xe = Symbol("callback"),
    ve = Symbol("buffers"),
    ki = Symbol("error"),
    wi,
    Ma = class {
      constructor(e, i, t) {
        if (
          ((this._maxPayload = t | 0),
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
          let n =
            this._options.concurrencyLimit !== void 0
              ? this._options.concurrencyLimit
              : 10;
          wi = new Qd(n);
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
          t = e.find(
            (n) =>
              !(
                (i.serverNoContextTakeover === !1 &&
                  n.server_no_context_takeover) ||
                (n.server_max_window_bits &&
                  (i.serverMaxWindowBits === !1 ||
                    (typeof i.serverMaxWindowBits == "number" &&
                      i.serverMaxWindowBits > n.server_max_window_bits))) ||
                (typeof i.clientMaxWindowBits == "number" &&
                  !n.client_max_window_bits)
              )
          );
        if (!t) throw new Error("None of the extension offers can be accepted");
        return (
          i.serverNoContextTakeover && (t.server_no_context_takeover = !0),
          i.clientNoContextTakeover && (t.client_no_context_takeover = !0),
          typeof i.serverMaxWindowBits == "number" &&
            (t.server_max_window_bits = i.serverMaxWindowBits),
          typeof i.clientMaxWindowBits == "number"
            ? (t.client_max_window_bits = i.clientMaxWindowBits)
            : (t.client_max_window_bits === !0 ||
                i.clientMaxWindowBits === !1) &&
              delete t.client_max_window_bits,
          t
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
            Object.keys(i).forEach((t) => {
              let n = i[t];
              if (n.length > 1)
                throw new Error(
                  `Parameter "${t}" must have only a single value`
                );
              if (((n = n[0]), t === "client_max_window_bits")) {
                if (n !== !0) {
                  let r = +n;
                  if (!Number.isInteger(r) || r < 8 || r > 15)
                    throw new TypeError(
                      `Invalid value for parameter "${t}": ${n}`
                    );
                  n = r;
                } else if (!this._isServer)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
              } else if (t === "server_max_window_bits") {
                let r = +n;
                if (!Number.isInteger(r) || r < 8 || r > 15)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
                n = r;
              } else if (
                t === "client_no_context_takeover" ||
                t === "server_no_context_takeover"
              ) {
                if (n !== !0)
                  throw new TypeError(
                    `Invalid value for parameter "${t}": ${n}`
                  );
              } else throw new Error(`Unknown parameter "${t}"`);
              i[t] = n;
            });
          }),
          e
        );
      }
      decompress(e, i, t) {
        wi.add((n) => {
          this._decompress(e, i, (r, o) => {
            n(), t(r, o);
          });
        });
      }
      compress(e, i, t) {
        wi.add((n) => {
          this._compress(e, i, (r, o) => {
            n(), t(r, o);
          });
        });
      }
      _decompress(e, i, t) {
        let n = this._isServer ? "client" : "server";
        if (!this._inflate) {
          let r = `${n}_max_window_bits`,
            o =
              typeof this.params[r] != "number"
                ? Ge.Z_DEFAULT_WINDOWBITS
                : this.params[r];
          (this._inflate = Ge.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits: o,
          })),
            (this._inflate[Ci] = this),
            (this._inflate[de] = 0),
            (this._inflate[ve] = []),
            this._inflate.on("error", em),
            this._inflate.on("data", to);
        }
        (this._inflate[Xe] = t),
          this._inflate.write(e),
          i && this._inflate.write(Wd),
          this._inflate.flush(() => {
            let r = this._inflate[ki];
            if (r) {
              this._inflate.close(), (this._inflate = null), t(r);
              return;
            }
            let o = io.concat(this._inflate[ve], this._inflate[de]);
            this._inflate._readableState.endEmitted
              ? (this._inflate.close(), (this._inflate = null))
              : ((this._inflate[de] = 0),
                (this._inflate[ve] = []),
                i &&
                  this.params[`${n}_no_context_takeover`] &&
                  this._inflate.reset()),
              t(null, o);
          });
      }
      _compress(e, i, t) {
        let n = this._isServer ? "server" : "client";
        if (!this._deflate) {
          let r = `${n}_max_window_bits`,
            o =
              typeof this.params[r] != "number"
                ? Ge.Z_DEFAULT_WINDOWBITS
                : this.params[r];
          (this._deflate = Ge.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits: o,
          })),
            (this._deflate[de] = 0),
            (this._deflate[ve] = []),
            this._deflate.on("data", Yd);
        }
        (this._deflate[Xe] = t),
          this._deflate.write(e),
          this._deflate.flush(Ge.Z_SYNC_FLUSH, () => {
            if (!this._deflate) return;
            let r = io.concat(this._deflate[ve], this._deflate[de]);
            i && (r = new Kd(r.buffer, r.byteOffset, r.length - 4)),
              (this._deflate[Xe] = null),
              (this._deflate[de] = 0),
              (this._deflate[ve] = []),
              i &&
                this.params[`${n}_no_context_takeover`] &&
                this._deflate.reset(),
              t(null, r);
          });
      }
    };
  no.exports = Ma;
  function Yd(a) {
    this[ve].push(a), (this[de] += a.length);
  }
  function to(a) {
    if (
      ((this[de] += a.length),
      this[Ci]._maxPayload < 1 || this[de] <= this[Ci]._maxPayload)
    ) {
      this[ve].push(a);
      return;
    }
    (this[ki] = new RangeError("Max payload size exceeded")),
      (this[ki].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"),
      (this[ki][ao] = 1009),
      this.removeListener("data", to),
      this.reset();
  }
  function em(a) {
    (this[Ci]._inflate = null), (a[ao] = 1007), this[Xe](a);
  }
});
var Je = _((Zv, Ei) => {
  "use strict";
  var { isUtf8: ro } = require("buffer"),
    im = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      0, 1, 0,
    ];
  function am(a) {
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
  Ei.exports = { isValidStatusCode: am, isValidUTF8: Na, tokenChars: im };
  if (ro)
    Ei.exports.isValidUTF8 = function (a) {
      return a.length < 24 ? Na(a) : ro(a);
    };
  else if (!process.env.WS_NO_UTF_8_VALIDATE)
    try {
      let a = require("utf-8-validate");
      Ei.exports.isValidUTF8 = function (e) {
        return e.length < 32 ? Na(e) : a(e);
      };
    } catch {}
});
var Va = _((Qv, mo) => {
  "use strict";
  var { Writable: tm } = require("stream"),
    oo = Ve(),
    {
      BINARY_TYPES: nm,
      EMPTY_BUFFER: so,
      kStatusCode: rm,
      kWebSocket: om,
    } = ge(),
    { concat: Ua, toArrayBuffer: sm, unmask: cm } = Ue(),
    { isValidStatusCode: pm, isValidUTF8: co } = Je(),
    Ai = Buffer[Symbol.species],
    Ze = 0,
    po = 1,
    lo = 2,
    uo = 3,
    Ga = 4,
    lm = 5,
    Xa = class extends tm {
      constructor(e = {}) {
        super(),
          (this._binaryType = e.binaryType || nm[0]),
          (this._extensions = e.extensions || {}),
          (this._isServer = !!e.isServer),
          (this._maxPayload = e.maxPayload | 0),
          (this._skipUTF8Validation = !!e.skipUTF8Validation),
          (this[om] = void 0),
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
      _write(e, i, t) {
        if (this._opcode === 8 && this._state == Ze) return t();
        (this._bufferedBytes += e.length),
          this._buffers.push(e),
          this.startLoop(t);
      }
      consume(e) {
        if (((this._bufferedBytes -= e), e === this._buffers[0].length))
          return this._buffers.shift();
        if (e < this._buffers[0].length) {
          let t = this._buffers[0];
          return (
            (this._buffers[0] = new Ai(
              t.buffer,
              t.byteOffset + e,
              t.length - e
            )),
            new Ai(t.buffer, t.byteOffset, e)
          );
        }
        let i = Buffer.allocUnsafe(e);
        do {
          let t = this._buffers[0],
            n = i.length - e;
          e >= t.length
            ? i.set(this._buffers.shift(), n)
            : (i.set(new Uint8Array(t.buffer, t.byteOffset, e), n),
              (this._buffers[0] = new Ai(
                t.buffer,
                t.byteOffset + e,
                t.length - e
              ))),
            (e -= t.length);
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
            case po:
              i = this.getPayloadLength16();
              break;
            case lo:
              i = this.getPayloadLength64();
              break;
            case uo:
              this.getMask();
              break;
            case Ga:
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
            V(
              RangeError,
              "RSV2 and RSV3 must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_RSV_2_3"
            )
          );
        let i = (e[0] & 64) === 64;
        if (i && !this._extensions[oo.extensionName])
          return (
            (this._loop = !1),
            V(
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
              V(
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
              V(
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
              V(
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
              V(RangeError, "FIN must be set", !0, 1002, "WS_ERR_EXPECTED_FIN")
            );
          if (i)
            return (
              (this._loop = !1),
              V(
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
              V(
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
            V(
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
              V(
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
            V(
              RangeError,
              "MASK must be clear",
              !0,
              1002,
              "WS_ERR_UNEXPECTED_MASK"
            )
          );
        if (this._payloadLength === 126) this._state = po;
        else if (this._payloadLength === 127) this._state = lo;
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
            V(
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
            V(
              RangeError,
              "Max payload size exceeded",
              !1,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            )
          );
        this._masked ? (this._state = uo) : (this._state = Ga);
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = !1;
          return;
        }
        (this._mask = this.consume(4)), (this._state = Ga);
      }
      getData(e) {
        let i = so;
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
              cm(i, this._mask);
        }
        if (this._opcode > 7) return this.controlMessage(i);
        if (this._compressed) {
          (this._state = lm), this.decompress(i, e);
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
        this._extensions[oo.extensionName].decompress(e, this._fin, (n, r) => {
          if (n) return i(n);
          if (r.length) {
            if (
              ((this._messageLength += r.length),
              this._messageLength > this._maxPayload && this._maxPayload > 0)
            )
              return i(
                V(
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
            let t;
            this._binaryType === "nodebuffer"
              ? (t = Ua(i, e))
              : this._binaryType === "arraybuffer"
              ? (t = sm(Ua(i, e)))
              : (t = i),
              this.emit("message", t, !0);
          } else {
            let t = Ua(i, e);
            if (!this._skipUTF8Validation && !co(t))
              return (
                (this._loop = !1),
                V(
                  Error,
                  "invalid UTF-8 sequence",
                  !0,
                  1007,
                  "WS_ERR_INVALID_UTF8"
                )
              );
            this.emit("message", t, !1);
          }
        }
        this._state = Ze;
      }
      controlMessage(e) {
        if (this._opcode === 8)
          if (((this._loop = !1), e.length === 0))
            this.emit("conclude", 1005, so), this.end();
          else {
            let i = e.readUInt16BE(0);
            if (!pm(i))
              return V(
                RangeError,
                `invalid status code ${i}`,
                !0,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
            let t = new Ai(e.buffer, e.byteOffset + 2, e.length - 2);
            if (!this._skipUTF8Validation && !co(t))
              return V(
                Error,
                "invalid UTF-8 sequence",
                !0,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            this.emit("conclude", i, t), this.end();
          }
        else this._opcode === 9 ? this.emit("ping", e) : this.emit("pong", e);
        this._state = Ze;
      }
    };
  mo.exports = Xa;
  function V(a, e, i, t, n) {
    let r = new a(i ? `Invalid WebSocket frame: ${e}` : e);
    return Error.captureStackTrace(r, V), (r.code = n), (r[rm] = t), r;
  }
});
var Ja = _((Yv, xo) => {
  "use strict";
  var Kv = require("net"),
    Wv = require("tls"),
    { randomFillSync: um } = require("crypto"),
    fo = Ve(),
    { EMPTY_BUFFER: dm } = ge(),
    { isValidStatusCode: mm } = Je(),
    { mask: ho, toBuffer: je } = Ue(),
    te = Symbol("kByteLength"),
    fm = Buffer.alloc(4),
    se = class {
      constructor(e, i, t) {
        (this._extensions = i || {}),
          t && ((this._generateMask = t), (this._maskBuffer = Buffer.alloc(4))),
          (this._socket = e),
          (this._firstFragment = !0),
          (this._compress = !1),
          (this._bufferedBytes = 0),
          (this._deflating = !1),
          (this._queue = []);
      }
      static frame(e, i) {
        let t,
          n = !1,
          r = 2,
          o = !1;
        i.mask &&
          ((t = i.maskBuffer || fm),
          i.generateMask ? i.generateMask(t) : um(t, 0, 4),
          (o = (t[0] | t[1] | t[2] | t[3]) === 0),
          (r = 6));
        let s;
        typeof e == "string"
          ? (!i.mask || o) && i[te] !== void 0
            ? (s = i[te])
            : ((e = Buffer.from(e)), (s = e.length))
          : ((s = e.length), (n = i.mask && i.readOnly && !o));
        let c = s;
        s >= 65536 ? ((r += 8), (c = 127)) : s > 125 && ((r += 2), (c = 126));
        let p = Buffer.allocUnsafe(n ? s + r : r);
        return (
          (p[0] = i.fin ? i.opcode | 128 : i.opcode),
          i.rsv1 && (p[0] |= 64),
          (p[1] = c),
          c === 126
            ? p.writeUInt16BE(s, 2)
            : c === 127 && ((p[2] = p[3] = 0), p.writeUIntBE(s, 4, 6)),
          i.mask
            ? ((p[1] |= 128),
              (p[r - 4] = t[0]),
              (p[r - 3] = t[1]),
              (p[r - 2] = t[2]),
              (p[r - 1] = t[3]),
              o
                ? [p, e]
                : n
                ? (ho(e, t, p, r, s), [p])
                : (ho(e, t, e, 0, s), [p, e]))
            : [p, e]
        );
      }
      close(e, i, t, n) {
        let r;
        if (e === void 0) r = dm;
        else {
          if (typeof e != "number" || !mm(e))
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
          [te]: r.length,
          fin: !0,
          generateMask: this._generateMask,
          mask: t,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: !1,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, r, !1, o, n])
          : this.sendFrame(se.frame(r, o), n);
      }
      ping(e, i, t) {
        let n, r;
        if (
          (typeof e == "string"
            ? ((n = Buffer.byteLength(e)), (r = !1))
            : ((e = je(e)), (n = e.length), (r = je.readOnly)),
          n > 125)
        )
          throw new RangeError(
            "The data size must not be greater than 125 bytes"
          );
        let o = {
          [te]: n,
          fin: !0,
          generateMask: this._generateMask,
          mask: i,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly: r,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, e, !1, o, t])
          : this.sendFrame(se.frame(e, o), t);
      }
      pong(e, i, t) {
        let n, r;
        if (
          (typeof e == "string"
            ? ((n = Buffer.byteLength(e)), (r = !1))
            : ((e = je(e)), (n = e.length), (r = je.readOnly)),
          n > 125)
        )
          throw new RangeError(
            "The data size must not be greater than 125 bytes"
          );
        let o = {
          [te]: n,
          fin: !0,
          generateMask: this._generateMask,
          mask: i,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly: r,
          rsv1: !1,
        };
        this._deflating
          ? this.enqueue([this.dispatch, e, !1, o, t])
          : this.sendFrame(se.frame(e, o), t);
      }
      send(e, i, t) {
        let n = this._extensions[fo.extensionName],
          r = i.binary ? 2 : 1,
          o = i.compress,
          s,
          c;
        if (
          (typeof e == "string"
            ? ((s = Buffer.byteLength(e)), (c = !1))
            : ((e = je(e)), (s = e.length), (c = je.readOnly)),
          this._firstFragment
            ? ((this._firstFragment = !1),
              o &&
                n &&
                n.params[
                  n._isServer
                    ? "server_no_context_takeover"
                    : "client_no_context_takeover"
                ] &&
                (o = s >= n._threshold),
              (this._compress = o))
            : ((o = !1), (r = 0)),
          i.fin && (this._firstFragment = !0),
          n)
        ) {
          let p = {
            [te]: s,
            fin: i.fin,
            generateMask: this._generateMask,
            mask: i.mask,
            maskBuffer: this._maskBuffer,
            opcode: r,
            readOnly: c,
            rsv1: o,
          };
          this._deflating
            ? this.enqueue([this.dispatch, e, this._compress, p, t])
            : this.dispatch(e, this._compress, p, t);
        } else
          this.sendFrame(
            se.frame(e, {
              [te]: s,
              fin: i.fin,
              generateMask: this._generateMask,
              mask: i.mask,
              maskBuffer: this._maskBuffer,
              opcode: r,
              readOnly: c,
              rsv1: !1,
            }),
            t
          );
      }
      dispatch(e, i, t, n) {
        if (!i) {
          this.sendFrame(se.frame(e, t), n);
          return;
        }
        let r = this._extensions[fo.extensionName];
        (this._bufferedBytes += t[te]),
          (this._deflating = !0),
          r.compress(e, t.fin, (o, s) => {
            if (this._socket.destroyed) {
              let c = new Error(
                "The socket was closed while data was being compressed"
              );
              typeof n == "function" && n(c);
              for (let p = 0; p < this._queue.length; p++) {
                let u = this._queue[p],
                  m = u[u.length - 1];
                typeof m == "function" && m(c);
              }
              return;
            }
            (this._bufferedBytes -= t[te]),
              (this._deflating = !1),
              (t.readOnly = !1),
              this.sendFrame(se.frame(s, t), n),
              this.dequeue();
          });
      }
      dequeue() {
        for (; !this._deflating && this._queue.length; ) {
          let e = this._queue.shift();
          (this._bufferedBytes -= e[3][te]),
            Reflect.apply(e[0], this, e.slice(1));
        }
      }
      enqueue(e) {
        (this._bufferedBytes += e[3][te]), this._queue.push(e);
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
  xo.exports = se;
});
var Eo = _((eb, Co) => {
  "use strict";
  var { kForOnEventAttribute: Qe, kListener: Za } = ge(),
    go = Symbol("kCode"),
    vo = Symbol("kData"),
    bo = Symbol("kError"),
    yo = Symbol("kMessage"),
    _o = Symbol("kReason"),
    Re = Symbol("kTarget"),
    wo = Symbol("kType"),
    ko = Symbol("kWasClean"),
    me = class {
      constructor(e) {
        (this[Re] = null), (this[wo] = e);
      }
      get target() {
        return this[Re];
      }
      get type() {
        return this[wo];
      }
    };
  Object.defineProperty(me.prototype, "target", { enumerable: !0 });
  Object.defineProperty(me.prototype, "type", { enumerable: !0 });
  var ke = class extends me {
    constructor(e, i = {}) {
      super(e),
        (this[go] = i.code === void 0 ? 0 : i.code),
        (this[_o] = i.reason === void 0 ? "" : i.reason),
        (this[ko] = i.wasClean === void 0 ? !1 : i.wasClean);
    }
    get code() {
      return this[go];
    }
    get reason() {
      return this[_o];
    }
    get wasClean() {
      return this[ko];
    }
  };
  Object.defineProperty(ke.prototype, "code", { enumerable: !0 });
  Object.defineProperty(ke.prototype, "reason", { enumerable: !0 });
  Object.defineProperty(ke.prototype, "wasClean", { enumerable: !0 });
  var qe = class extends me {
    constructor(e, i = {}) {
      super(e),
        (this[bo] = i.error === void 0 ? null : i.error),
        (this[yo] = i.message === void 0 ? "" : i.message);
    }
    get error() {
      return this[bo];
    }
    get message() {
      return this[yo];
    }
  };
  Object.defineProperty(qe.prototype, "error", { enumerable: !0 });
  Object.defineProperty(qe.prototype, "message", { enumerable: !0 });
  var Ke = class extends me {
    constructor(e, i = {}) {
      super(e), (this[vo] = i.data === void 0 ? null : i.data);
    }
    get data() {
      return this[vo];
    }
  };
  Object.defineProperty(Ke.prototype, "data", { enumerable: !0 });
  var hm = {
    addEventListener(a, e, i = {}) {
      for (let n of this.listeners(a))
        if (!i[Qe] && n[Za] === e && !n[Qe]) return;
      let t;
      if (a === "message")
        t = function (r, o) {
          let s = new Ke("message", { data: o ? r : r.toString() });
          (s[Re] = this), Pi(e, this, s);
        };
      else if (a === "close")
        t = function (r, o) {
          let s = new ke("close", {
            code: r,
            reason: o.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent,
          });
          (s[Re] = this), Pi(e, this, s);
        };
      else if (a === "error")
        t = function (r) {
          let o = new qe("error", { error: r, message: r.message });
          (o[Re] = this), Pi(e, this, o);
        };
      else if (a === "open")
        t = function () {
          let r = new me("open");
          (r[Re] = this), Pi(e, this, r);
        };
      else return;
      (t[Qe] = !!i[Qe]), (t[Za] = e), i.once ? this.once(a, t) : this.on(a, t);
    },
    removeEventListener(a, e) {
      for (let i of this.listeners(a))
        if (i[Za] === e && !i[Qe]) {
          this.removeListener(a, i);
          break;
        }
    },
  };
  Co.exports = {
    CloseEvent: ke,
    ErrorEvent: qe,
    Event: me,
    EventTarget: hm,
    MessageEvent: Ke,
  };
  function Pi(a, e, i) {
    typeof a == "object" && a.handleEvent
      ? a.handleEvent.call(a, i)
      : a.call(e, i);
  }
});
var Qa = _((ib, Ao) => {
  "use strict";
  var { tokenChars: We } = Je();
  function ce(a, e, i) {
    a[e] === void 0 ? (a[e] = [i]) : a[e].push(i);
  }
  function xm(a) {
    let e = Object.create(null),
      i = Object.create(null),
      t = !1,
      n = !1,
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
          p === 44 ? (ce(e, l, i), (i = Object.create(null))) : (o = l),
            (c = u = -1);
        } else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (s === void 0)
        if (u === -1 && We[p] === 1) c === -1 && (c = m);
        else if (p === 32 || p === 9) u === -1 && c !== -1 && (u = m);
        else if (p === 59 || p === 44) {
          if (c === -1)
            throw new SyntaxError(`Unexpected character at index ${m}`);
          u === -1 && (u = m),
            ce(i, a.slice(c, u), !0),
            p === 44 && (ce(e, o, i), (i = Object.create(null)), (o = void 0)),
            (c = u = -1);
        } else if (p === 61 && c !== -1 && u === -1)
          (s = a.slice(c, m)), (c = u = -1);
        else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (n) {
        if (We[p] !== 1)
          throw new SyntaxError(`Unexpected character at index ${m}`);
        c === -1 ? (c = m) : t || (t = !0), (n = !1);
      } else if (r)
        if (We[p] === 1) c === -1 && (c = m);
        else if (p === 34 && c !== -1) (r = !1), (u = m);
        else if (p === 92) n = !0;
        else throw new SyntaxError(`Unexpected character at index ${m}`);
      else if (p === 34 && a.charCodeAt(m - 1) === 61) r = !0;
      else if (u === -1 && We[p] === 1) c === -1 && (c = m);
      else if (c !== -1 && (p === 32 || p === 9)) u === -1 && (u = m);
      else if (p === 59 || p === 44) {
        if (c === -1)
          throw new SyntaxError(`Unexpected character at index ${m}`);
        u === -1 && (u = m);
        let l = a.slice(c, u);
        t && ((l = l.replace(/\\/g, "")), (t = !1)),
          ce(i, s, l),
          p === 44 && (ce(e, o, i), (i = Object.create(null)), (o = void 0)),
          (s = void 0),
          (c = u = -1);
      } else throw new SyntaxError(`Unexpected character at index ${m}`);
    if (c === -1 || r || p === 32 || p === 9)
      throw new SyntaxError("Unexpected end of input");
    u === -1 && (u = m);
    let f = a.slice(c, u);
    return (
      o === void 0
        ? ce(e, f, i)
        : (s === void 0
            ? ce(i, f, !0)
            : t
            ? ce(i, s, f.replace(/\\/g, ""))
            : ce(i, s, f),
          ce(e, o, i)),
      e
    );
  }
  function gm(a) {
    return Object.keys(a)
      .map((e) => {
        let i = a[e];
        return (
          Array.isArray(i) || (i = [i]),
          i
            .map((t) =>
              [e]
                .concat(
                  Object.keys(t).map((n) => {
                    let r = t[n];
                    return (
                      Array.isArray(r) || (r = [r]),
                      r.map((o) => (o === !0 ? n : `${n}=${o}`)).join("; ")
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
  Ao.exports = { format: gm, parse: xm };
});
var it = _((tb, Bo) => {
  "use strict";
  var vm = require("events"),
    bm = require("https"),
    ym = require("http"),
    So = require("net"),
    _m = require("tls"),
    { randomBytes: wm, createHash: km } = require("crypto"),
    { Readable: ab } = require("stream"),
    { URL: Ka } = require("url"),
    be = Ve(),
    Cm = Va(),
    Em = Ja(),
    {
      BINARY_TYPES: Po,
      EMPTY_BUFFER: Di,
      GUID: Am,
      kForOnEventAttribute: Wa,
      kListener: Pm,
      kStatusCode: Dm,
      kWebSocket: J,
      NOOP: To,
    } = ge(),
    {
      EventTarget: { addEventListener: Sm, removeEventListener: Tm },
    } = Eo(),
    { format: Im, parse: $m } = Qa(),
    { toBuffer: jm } = Ue(),
    Rm = 30 * 1e3,
    Io = Symbol("kAborted"),
    Ya = [8, 13],
    fe = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    qm = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/,
    q = class extends vm {
      constructor(e, i, t) {
        super(),
          (this._binaryType = Po[0]),
          (this._closeCode = 1006),
          (this._closeFrameReceived = !1),
          (this._closeFrameSent = !1),
          (this._closeMessage = Di),
          (this._closeTimer = null),
          (this._extensions = {}),
          (this._paused = !1),
          (this._protocol = ""),
          (this._readyState = q.CONNECTING),
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
                    ? ((t = i), (i = []))
                    : (i = [i])),
              $o(this, e, i, t))
            : (this._isServer = !0);
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e) {
        !Po.includes(e) ||
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
      setSocket(e, i, t) {
        let n = new Cm({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: t.maxPayload,
          skipUTF8Validation: t.skipUTF8Validation,
        });
        (this._sender = new Em(e, this._extensions, t.generateMask)),
          (this._receiver = n),
          (this._socket = e),
          (n[J] = this),
          (e[J] = this),
          n.on("conclude", zm),
          n.on("drain", Lm),
          n.on("error", Hm),
          n.on("message", Om),
          n.on("ping", Mm),
          n.on("pong", Nm),
          e.setTimeout(0),
          e.setNoDelay(),
          i.length > 0 && e.unshift(i),
          e.on("close", Ro),
          e.on("data", Ti),
          e.on("end", qo),
          e.on("error", Fo),
          (this._readyState = q.OPEN),
          this.emit("open");
      }
      emitClose() {
        if (!this._socket) {
          (this._readyState = q.CLOSED),
            this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        this._extensions[be.extensionName] &&
          this._extensions[be.extensionName].cleanup(),
          this._receiver.removeAllListeners(),
          (this._readyState = q.CLOSED),
          this.emit("close", this._closeCode, this._closeMessage);
      }
      close(e, i) {
        if (this.readyState !== q.CLOSED) {
          if (this.readyState === q.CONNECTING) {
            let t =
              "WebSocket was closed before the connection was established";
            Y(this, this._req, t);
            return;
          }
          if (this.readyState === q.CLOSING) {
            this._closeFrameSent &&
              (this._closeFrameReceived ||
                this._receiver._writableState.errorEmitted) &&
              this._socket.end();
            return;
          }
          (this._readyState = q.CLOSING),
            this._sender.close(e, i, !this._isServer, (t) => {
              t ||
                ((this._closeFrameSent = !0),
                (this._closeFrameReceived ||
                  this._receiver._writableState.errorEmitted) &&
                  this._socket.end());
            }),
            (this._closeTimer = setTimeout(
              this._socket.destroy.bind(this._socket),
              Rm
            ));
        }
      }
      pause() {
        this.readyState === q.CONNECTING ||
          this.readyState === q.CLOSED ||
          ((this._paused = !0), this._socket.pause());
      }
      ping(e, i, t) {
        if (this.readyState === q.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function"
            ? ((t = e), (e = i = void 0))
            : typeof i == "function" && ((t = i), (i = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== q.OPEN)
        ) {
          et(this, e, t);
          return;
        }
        i === void 0 && (i = !this._isServer), this._sender.ping(e || Di, i, t);
      }
      pong(e, i, t) {
        if (this.readyState === q.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof e == "function"
            ? ((t = e), (e = i = void 0))
            : typeof i == "function" && ((t = i), (i = void 0)),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== q.OPEN)
        ) {
          et(this, e, t);
          return;
        }
        i === void 0 && (i = !this._isServer), this._sender.pong(e || Di, i, t);
      }
      resume() {
        this.readyState === q.CONNECTING ||
          this.readyState === q.CLOSED ||
          ((this._paused = !1),
          this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(e, i, t) {
        if (this.readyState === q.CONNECTING)
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if (
          (typeof i == "function" && ((t = i), (i = {})),
          typeof e == "number" && (e = e.toString()),
          this.readyState !== q.OPEN)
        ) {
          et(this, e, t);
          return;
        }
        let n = {
          binary: typeof e != "string",
          mask: !this._isServer,
          compress: !0,
          fin: !0,
          ...i,
        };
        this._extensions[be.extensionName] || (n.compress = !1),
          this._sender.send(e || Di, n, t);
      }
      terminate() {
        if (this.readyState !== q.CLOSED) {
          if (this.readyState === q.CONNECTING) {
            let e =
              "WebSocket was closed before the connection was established";
            Y(this, this._req, e);
            return;
          }
          this._socket &&
            ((this._readyState = q.CLOSING), this._socket.destroy());
        }
      }
    };
  Object.defineProperty(q, "CONNECTING", {
    enumerable: !0,
    value: fe.indexOf("CONNECTING"),
  });
  Object.defineProperty(q.prototype, "CONNECTING", {
    enumerable: !0,
    value: fe.indexOf("CONNECTING"),
  });
  Object.defineProperty(q, "OPEN", {
    enumerable: !0,
    value: fe.indexOf("OPEN"),
  });
  Object.defineProperty(q.prototype, "OPEN", {
    enumerable: !0,
    value: fe.indexOf("OPEN"),
  });
  Object.defineProperty(q, "CLOSING", {
    enumerable: !0,
    value: fe.indexOf("CLOSING"),
  });
  Object.defineProperty(q.prototype, "CLOSING", {
    enumerable: !0,
    value: fe.indexOf("CLOSING"),
  });
  Object.defineProperty(q, "CLOSED", {
    enumerable: !0,
    value: fe.indexOf("CLOSED"),
  });
  Object.defineProperty(q.prototype, "CLOSED", {
    enumerable: !0,
    value: fe.indexOf("CLOSED"),
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
    Object.defineProperty(q.prototype, a, { enumerable: !0 });
  });
  ["open", "error", "close", "message"].forEach((a) => {
    Object.defineProperty(q.prototype, `on${a}`, {
      enumerable: !0,
      get() {
        for (let e of this.listeners(a)) if (e[Wa]) return e[Pm];
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
  q.prototype.addEventListener = Sm;
  q.prototype.removeEventListener = Tm;
  Bo.exports = q;
  function $o(a, e, i, t) {
    let n = {
      protocolVersion: Ya[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...t,
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
    if (!Ya.includes(n.protocolVersion))
      throw new RangeError(
        `Unsupported protocol version: ${
          n.protocolVersion
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
      u = wm(16).toString("base64"),
      m = o ? bm.request : ym.request,
      f = new Set(),
      l;
    if (
      ((n.createConnection = o ? Bm : Fm),
      (n.defaultPort = n.defaultPort || p),
      (n.port = r.port || p),
      (n.host = r.hostname.startsWith("[")
        ? r.hostname.slice(1, -1)
        : r.hostname),
      (n.headers = {
        ...n.headers,
        "Sec-WebSocket-Version": n.protocolVersion,
        "Sec-WebSocket-Key": u,
        Connection: "Upgrade",
        Upgrade: "websocket",
      }),
      (n.path = r.pathname + r.search),
      (n.timeout = n.handshakeTimeout),
      n.perMessageDeflate &&
        ((l = new be(
          n.perMessageDeflate !== !0 ? n.perMessageDeflate : {},
          !1,
          n.maxPayload
        )),
        (n.headers["Sec-WebSocket-Extensions"] = Im({
          [be.extensionName]: l.offer(),
        }))),
      i.length)
    ) {
      for (let h of i) {
        if (typeof h != "string" || !qm.test(h) || f.has(h))
          throw new SyntaxError(
            "An invalid or duplicated subprotocol was specified"
          );
        f.add(h);
      }
      n.headers["Sec-WebSocket-Protocol"] = i.join(",");
    }
    if (
      (n.origin &&
        (n.protocolVersion < 13
          ? (n.headers["Sec-WebSocket-Origin"] = n.origin)
          : (n.headers.Origin = n.origin)),
      (r.username || r.password) && (n.auth = `${r.username}:${r.password}`),
      s)
    ) {
      let h = n.path.split(":");
      (n.socketPath = h[0]), (n.path = h[1]);
    }
    let d;
    if (n.followRedirects) {
      if (a._redirects === 0) {
        (a._originalIpc = s),
          (a._originalSecure = o),
          (a._originalHostOrSocketPath = s ? n.socketPath : r.host);
        let h = t && t.headers;
        if (((t = { ...t, headers: {} }), h))
          for (let [x, v] of Object.entries(h)) t.headers[x.toLowerCase()] = v;
      } else if (a.listenerCount("redirect") === 0) {
        let h = s
          ? a._originalIpc
            ? n.socketPath === a._originalHostOrSocketPath
            : !1
          : a._originalIpc
          ? !1
          : r.host === a._originalHostOrSocketPath;
        (!h || (a._originalSecure && !o)) &&
          (delete n.headers.authorization,
          delete n.headers.cookie,
          h || delete n.headers.host,
          (n.auth = void 0));
      }
      n.auth &&
        !t.headers.authorization &&
        (t.headers.authorization =
          "Basic " + Buffer.from(n.auth).toString("base64")),
        (d = a._req = m(n)),
        a._redirects && a.emit("redirect", a.url, d);
    } else d = a._req = m(n);
    n.timeout &&
      d.on("timeout", () => {
        Y(a, d, "Opening handshake has timed out");
      }),
      d.on("error", (h) => {
        d === null || d[Io] || ((d = a._req = null), Si(a, h));
      }),
      d.on("response", (h) => {
        let x = h.headers.location,
          v = h.statusCode;
        if (x && n.followRedirects && v >= 300 && v < 400) {
          if (++a._redirects > n.maxRedirects) {
            Y(a, d, "Maximum redirects exceeded");
            return;
          }
          d.abort();
          let g;
          try {
            g = new Ka(x, e);
          } catch {
            let D = new SyntaxError(`Invalid URL: ${x}`);
            Si(a, D);
            return;
          }
          $o(a, g, i, t);
        } else
          a.emit("unexpected-response", d, h) ||
            Y(a, d, `Unexpected server response: ${h.statusCode}`);
      }),
      d.on("upgrade", (h, x, v) => {
        if ((a.emit("upgrade", h), a.readyState !== q.CONNECTING)) return;
        if (
          ((d = a._req = null), h.headers.upgrade.toLowerCase() !== "websocket")
        ) {
          Y(a, x, "Invalid Upgrade header");
          return;
        }
        let g = km("sha1")
          .update(u + Am)
          .digest("base64");
        if (h.headers["sec-websocket-accept"] !== g) {
          Y(a, x, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        let y = h.headers["sec-websocket-protocol"],
          D;
        if (
          (y !== void 0
            ? f.size
              ? f.has(y) || (D = "Server sent an invalid subprotocol")
              : (D = "Server sent a subprotocol but none was requested")
            : f.size && (D = "Server sent no subprotocol"),
          D)
        ) {
          Y(a, x, D);
          return;
        }
        y && (a._protocol = y);
        let w = h.headers["sec-websocket-extensions"];
        if (w !== void 0) {
          if (!l) {
            Y(
              a,
              x,
              "Server sent a Sec-WebSocket-Extensions header but no extension was requested"
            );
            return;
          }
          let b;
          try {
            b = $m(w);
          } catch {
            Y(a, x, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          let C = Object.keys(b);
          if (C.length !== 1 || C[0] !== be.extensionName) {
            Y(a, x, "Server indicated an extension that was not requested");
            return;
          }
          try {
            l.accept(b[be.extensionName]);
          } catch {
            Y(a, x, "Invalid Sec-WebSocket-Extensions header");
            return;
          }
          a._extensions[be.extensionName] = l;
        }
        a.setSocket(x, v, {
          generateMask: n.generateMask,
          maxPayload: n.maxPayload,
          skipUTF8Validation: n.skipUTF8Validation,
        });
      }),
      d.end();
  }
  function Si(a, e) {
    (a._readyState = q.CLOSING), a.emit("error", e), a.emitClose();
  }
  function Fm(a) {
    return (a.path = a.socketPath), So.connect(a);
  }
  function Bm(a) {
    return (
      (a.path = void 0),
      !a.servername &&
        a.servername !== "" &&
        (a.servername = So.isIP(a.host) ? "" : a.host),
      _m.connect(a)
    );
  }
  function Y(a, e, i) {
    a._readyState = q.CLOSING;
    let t = new Error(i);
    Error.captureStackTrace(t, Y),
      e.setHeader
        ? ((e[Io] = !0),
          e.abort(),
          e.socket && !e.socket.destroyed && e.socket.destroy(),
          process.nextTick(Si, a, t))
        : (e.destroy(t),
          e.once("error", a.emit.bind(a, "error")),
          e.once("close", a.emitClose.bind(a)));
  }
  function et(a, e, i) {
    if (e) {
      let t = jm(e).length;
      a._socket ? (a._sender._bufferedBytes += t) : (a._bufferedAmount += t);
    }
    if (i) {
      let t = new Error(
        `WebSocket is not open: readyState ${a.readyState} (${
          fe[a.readyState]
        })`
      );
      process.nextTick(i, t);
    }
  }
  function zm(a, e) {
    let i = this[J];
    (i._closeFrameReceived = !0),
      (i._closeMessage = e),
      (i._closeCode = a),
      i._socket[J] !== void 0 &&
        (i._socket.removeListener("data", Ti),
        process.nextTick(jo, i._socket),
        a === 1005 ? i.close() : i.close(a, e));
  }
  function Lm() {
    let a = this[J];
    a.isPaused || a._socket.resume();
  }
  function Hm(a) {
    let e = this[J];
    e._socket[J] !== void 0 &&
      (e._socket.removeListener("data", Ti),
      process.nextTick(jo, e._socket),
      e.close(a[Dm])),
      e.emit("error", a);
  }
  function Do() {
    this[J].emitClose();
  }
  function Om(a, e) {
    this[J].emit("message", a, e);
  }
  function Mm(a) {
    let e = this[J];
    e.pong(a, !e._isServer, To), e.emit("ping", a);
  }
  function Nm(a) {
    this[J].emit("pong", a);
  }
  function jo(a) {
    a.resume();
  }
  function Ro() {
    let a = this[J];
    this.removeListener("close", Ro),
      this.removeListener("data", Ti),
      this.removeListener("end", qo),
      (a._readyState = q.CLOSING);
    let e;
    !this._readableState.endEmitted &&
      !a._closeFrameReceived &&
      !a._receiver._writableState.errorEmitted &&
      (e = a._socket.read()) !== null &&
      a._receiver.write(e),
      a._receiver.end(),
      (this[J] = void 0),
      clearTimeout(a._closeTimer),
      a._receiver._writableState.finished ||
      a._receiver._writableState.errorEmitted
        ? a.emitClose()
        : (a._receiver.on("error", Do), a._receiver.on("finish", Do));
  }
  function Ti(a) {
    this[J]._receiver.write(a) || this.pause();
  }
  function qo() {
    let a = this[J];
    (a._readyState = q.CLOSING), a._receiver.end(), this.end();
  }
  function Fo() {
    let a = this[J];
    this.removeListener("error", Fo),
      this.on("error", To),
      a && ((a._readyState = q.CLOSING), this.destroy());
  }
});
var Lo = _((nb, zo) => {
  "use strict";
  var { tokenChars: Um } = Je();
  function Gm(a) {
    let e = new Set(),
      i = -1,
      t = -1,
      n = 0;
    for (n; n < a.length; n++) {
      let o = a.charCodeAt(n);
      if (t === -1 && Um[o] === 1) i === -1 && (i = n);
      else if (n !== 0 && (o === 32 || o === 9))
        t === -1 && i !== -1 && (t = n);
      else if (o === 44) {
        if (i === -1)
          throw new SyntaxError(`Unexpected character at index ${n}`);
        t === -1 && (t = n);
        let s = a.slice(i, t);
        if (e.has(s))
          throw new SyntaxError(`The "${s}" subprotocol is duplicated`);
        e.add(s), (i = t = -1);
      } else throw new SyntaxError(`Unexpected character at index ${n}`);
    }
    if (i === -1 || t !== -1) throw new SyntaxError("Unexpected end of input");
    let r = a.slice(i, n);
    if (e.has(r)) throw new SyntaxError(`The "${r}" subprotocol is duplicated`);
    return e.add(r), e;
  }
  zo.exports = { parse: Gm };
});
var Xo = _((cb, Go) => {
  "use strict";
  var Xm = require("events"),
    Ii = require("http"),
    rb = require("https"),
    ob = require("net"),
    sb = require("tls"),
    { createHash: Vm } = require("crypto"),
    Ho = Qa(),
    Ce = Ve(),
    Jm = Lo(),
    Zm = it(),
    { GUID: Qm, kWebSocket: Km } = ge(),
    Wm = /^[+/0-9A-Za-z]{22}==$/,
    Oo = 0,
    Mo = 1,
    Uo = 2,
    at = class extends Xm {
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
            WebSocket: Zm,
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
            ? ((this._server = Ii.createServer((t, n) => {
                let r = Ii.STATUS_CODES[426];
                n.writeHead(426, {
                  "Content-Length": r.length,
                  "Content-Type": "text/plain",
                }),
                  n.end(r);
              })),
              this._server.listen(e.port, e.host, e.backlog, i))
            : e.server && (this._server = e.server),
          this._server)
        ) {
          let t = this.emit.bind(this, "connection");
          this._removeListeners = Ym(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (n, r, o) => {
              this.handleUpgrade(n, r, o, t);
            },
          });
        }
        e.perMessageDeflate === !0 && (e.perMessageDeflate = {}),
          e.clientTracking &&
            ((this.clients = new Set()), (this._shouldEmitClose = !1)),
          (this.options = e),
          (this._state = Oo);
      }
      address() {
        if (this.options.noServer)
          throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e) {
        if (this._state === Uo) {
          e &&
            this.once("close", () => {
              e(new Error("The server is not running"));
            }),
            process.nextTick(Ye, this);
          return;
        }
        if ((e && this.once("close", e), this._state !== Mo))
          if (
            ((this._state = Mo), this.options.noServer || this.options.server)
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
      handleUpgrade(e, i, t, n) {
        i.on("error", No);
        let r = e.headers["sec-websocket-key"],
          o = +e.headers["sec-websocket-version"];
        if (e.method !== "GET") {
          Ee(this, e, i, 405, "Invalid HTTP method");
          return;
        }
        if (e.headers.upgrade.toLowerCase() !== "websocket") {
          Ee(this, e, i, 400, "Invalid Upgrade header");
          return;
        }
        if (!r || !Wm.test(r)) {
          Ee(this, e, i, 400, "Missing or invalid Sec-WebSocket-Key header");
          return;
        }
        if (o !== 8 && o !== 13) {
          Ee(
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
            c = Jm.parse(s);
          } catch {
            Ee(this, e, i, 400, "Invalid Sec-WebSocket-Protocol header");
            return;
          }
        let p = e.headers["sec-websocket-extensions"],
          u = {};
        if (this.options.perMessageDeflate && p !== void 0) {
          let m = new Ce(
            this.options.perMessageDeflate,
            !0,
            this.options.maxPayload
          );
          try {
            let f = Ho.parse(p);
            f[Ce.extensionName] &&
              (m.accept(f[Ce.extensionName]), (u[Ce.extensionName] = m));
          } catch {
            Ee(
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
              this.completeUpgrade(u, r, c, e, i, t, n);
            });
            return;
          }
          if (!this.options.verifyClient(m)) return ei(i, 401);
        }
        this.completeUpgrade(u, r, c, e, i, t, n);
      }
      completeUpgrade(e, i, t, n, r, o, s) {
        if (!r.readable || !r.writable) return r.destroy();
        if (r[Km])
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        if (this._state > Oo) return ei(r, 503);
        let c = Vm("sha1")
            .update(i + Qm)
            .digest("base64"),
          p = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            `Sec-WebSocket-Accept: ${c}`,
          ],
          u = new this.options.WebSocket(null);
        if (t.size) {
          let m = this.options.handleProtocols
            ? this.options.handleProtocols(t, n)
            : t.values().next().value;
          m && (p.push(`Sec-WebSocket-Protocol: ${m}`), (u._protocol = m));
        }
        if (e[Ce.extensionName]) {
          let m = e[Ce.extensionName].params,
            f = Ho.format({ [Ce.extensionName]: [m] });
          p.push(`Sec-WebSocket-Extensions: ${f}`), (u._extensions = e);
        }
        this.emit("headers", p, n),
          r.write(
            p.concat(`\r
`).join(`\r
`)
          ),
          r.removeListener("error", No),
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
          s(u, n);
      }
    };
  Go.exports = at;
  function Ym(a, e) {
    for (let i of Object.keys(e)) a.on(i, e[i]);
    return function () {
      for (let t of Object.keys(e)) a.removeListener(t, e[t]);
    };
  }
  function Ye(a) {
    (a._state = Uo), a.emit("close");
  }
  function No() {
    this.destroy();
  }
  function ei(a, e, i, t) {
    (i = i || Ii.STATUS_CODES[e]),
      (t = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(i),
        ...t,
      }),
      a.once("finish", a.destroy),
      a.end(
        `HTTP/1.1 ${e} ${Ii.STATUS_CODES[e]}\r
` +
          Object.keys(t).map((n) => `${n}: ${t[n]}`).join(`\r
`) +
          `\r
\r
` +
          i
      );
  }
  function Ee(a, e, i, t, n) {
    if (a.listenerCount("wsClientError")) {
      let r = new Error(n);
      Error.captureStackTrace(r, Ee), a.emit("wsClientError", r, i, e);
    } else ei(i, t, n);
  }
});
var Vo = _((lb, rf) => {
  rf.exports = {
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
var nt = _((ub, Jo) => {
  "use strict";
  Jo.exports = Vo();
});
var $i = _((db, Zo) => {
  Zo.exports =
    /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
});
var Wo = _((mb, Ko) => {
  "use strict";
  var Qo = {};
  function of(a) {
    var e,
      i,
      t = Qo[a];
    if (t) return t;
    for (t = Qo[a] = [], e = 0; e < 128; e++)
      (i = String.fromCharCode(e)),
        /^[0-9a-z]$/i.test(i)
          ? t.push(i)
          : t.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
    for (e = 0; e < a.length; e++) t[a.charCodeAt(e)] = a[e];
    return t;
  }
  function ji(a, e, i) {
    var t,
      n,
      r,
      o,
      s,
      c = "";
    for (
      typeof e != "string" && ((i = e), (e = ji.defaultChars)),
        typeof i > "u" && (i = !0),
        s = of(e),
        t = 0,
        n = a.length;
      t < n;
      t++
    ) {
      if (
        ((r = a.charCodeAt(t)),
        i &&
          r === 37 &&
          t + 2 < n &&
          /^[0-9a-f]{2}$/i.test(a.slice(t + 1, t + 3)))
      ) {
        (c += a.slice(t, t + 3)), (t += 2);
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
          t + 1 < n &&
          ((o = a.charCodeAt(t + 1)), o >= 56320 && o <= 57343)
        ) {
          (c += encodeURIComponent(a[t] + a[t + 1])), t++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(a[t]);
    }
    return c;
  }
  ji.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  ji.componentChars = "-_.!~*'()";
  Ko.exports = ji;
});
var is = _((fb, es) => {
  "use strict";
  var Yo = {};
  function sf(a) {
    var e,
      i,
      t = Yo[a];
    if (t) return t;
    for (t = Yo[a] = [], e = 0; e < 128; e++)
      (i = String.fromCharCode(e)), t.push(i);
    for (e = 0; e < a.length; e++)
      (i = a.charCodeAt(e)),
        (t[i] = "%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    return t;
  }
  function Ri(a, e) {
    var i;
    return (
      typeof e != "string" && (e = Ri.defaultChars),
      (i = sf(e)),
      a.replace(/(%[a-f0-9]{2})+/gi, function (t) {
        var n,
          r,
          o,
          s,
          c,
          p,
          u,
          m = "";
        for (n = 0, r = t.length; n < r; n += 3) {
          if (((o = parseInt(t.slice(n + 1, n + 3), 16)), o < 128)) {
            m += i[o];
            continue;
          }
          if (
            (o & 224) === 192 &&
            n + 3 < r &&
            ((s = parseInt(t.slice(n + 4, n + 6), 16)), (s & 192) === 128)
          ) {
            (u = ((o << 6) & 1984) | (s & 63)),
              u < 128 ? (m += "\uFFFD\uFFFD") : (m += String.fromCharCode(u)),
              (n += 3);
            continue;
          }
          if (
            (o & 240) === 224 &&
            n + 6 < r &&
            ((s = parseInt(t.slice(n + 4, n + 6), 16)),
            (c = parseInt(t.slice(n + 7, n + 9), 16)),
            (s & 192) === 128 && (c & 192) === 128)
          ) {
            (u = ((o << 12) & 61440) | ((s << 6) & 4032) | (c & 63)),
              u < 2048 || (u >= 55296 && u <= 57343)
                ? (m += "\uFFFD\uFFFD\uFFFD")
                : (m += String.fromCharCode(u)),
              (n += 6);
            continue;
          }
          if (
            (o & 248) === 240 &&
            n + 9 < r &&
            ((s = parseInt(t.slice(n + 4, n + 6), 16)),
            (c = parseInt(t.slice(n + 7, n + 9), 16)),
            (p = parseInt(t.slice(n + 10, n + 12), 16)),
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
              (n += 9);
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
  es.exports = Ri;
});
var ts = _((hb, as) => {
  "use strict";
  as.exports = function (e) {
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
var ls = _((xb, ps) => {
  "use strict";
  function qi() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.pathname = null);
  }
  var cf = /^([a-z0-9.+-]+:)/i,
    pf = /:[0-9]*$/,
    lf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    uf = [
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
    df = ["{", "}", "|", "\\", "^", "`"].concat(uf),
    mf = ["'"].concat(df),
    ns = ["%", "/", "?", ";", "#"].concat(mf),
    rs = ["/", "?", "#"],
    ff = 255,
    os = /^[+a-z0-9A-Z_-]{0,63}$/,
    hf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    ss = { javascript: !0, "javascript:": !0 },
    cs = {
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
  function xf(a, e) {
    if (a && a instanceof qi) return a;
    var i = new qi();
    return i.parse(a, e), i;
  }
  qi.prototype.parse = function (a, e) {
    var i,
      t,
      n,
      r,
      o,
      s = a;
    if (((s = s.trim()), !e && a.split("#").length === 1)) {
      var c = lf.exec(s);
      if (c) return (this.pathname = c[1]), c[2] && (this.search = c[2]), this;
    }
    var p = cf.exec(s);
    if (
      (p &&
        ((p = p[0]),
        (n = p.toLowerCase()),
        (this.protocol = p),
        (s = s.substr(p.length))),
      (e || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
        ((o = s.substr(0, 2) === "//"),
        o && !(p && ss[p]) && ((s = s.substr(2)), (this.slashes = !0))),
      !ss[p] && (o || (p && !cs[p])))
    ) {
      var u = -1;
      for (i = 0; i < rs.length; i++)
        (r = s.indexOf(rs[i])), r !== -1 && (u === -1 || r < u) && (u = r);
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
        for (i = 0, t = h.length; i < t; i++) {
          var x = h[i];
          if (!!x && !x.match(os)) {
            for (var v = "", g = 0, y = x.length; g < y; g++)
              x.charCodeAt(g) > 127 ? (v += "x") : (v += x[g]);
            if (!v.match(os)) {
              var D = h.slice(0, i),
                w = h.slice(i + 1),
                b = x.match(hf);
              b && (D.push(b[1]), w.unshift(b[2])),
                w.length && (s = w.join(".") + s),
                (this.hostname = D.join("."));
              break;
            }
          }
        }
      }
      this.hostname.length > ff && (this.hostname = ""),
        d &&
          (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var C = s.indexOf("#");
    C !== -1 && ((this.hash = s.substr(C)), (s = s.slice(0, C)));
    var S = s.indexOf("?");
    return (
      S !== -1 && ((this.search = s.substr(S)), (s = s.slice(0, S))),
      s && (this.pathname = s),
      cs[n] && this.hostname && !this.pathname && (this.pathname = ""),
      this
    );
  };
  qi.prototype.parseHost = function (a) {
    var e = pf.exec(a);
    e &&
      ((e = e[0]),
      e !== ":" && (this.port = e.substr(1)),
      (a = a.substr(0, a.length - e.length))),
      a && (this.hostname = a);
  };
  ps.exports = xf;
});
var rt = _((gb, ii) => {
  "use strict";
  ii.exports.encode = Wo();
  ii.exports.decode = is();
  ii.exports.format = ts();
  ii.exports.parse = ls();
});
var ot = _((vb, us) => {
  us.exports =
    /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
});
var st = _((bb, ds) => {
  ds.exports = /[\0-\x1F\x7F-\x9F]/;
});
var fs = _((yb, ms) => {
  ms.exports =
    /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
});
var ct = _((_b, hs) => {
  hs.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
});
var xs = _((Fe) => {
  "use strict";
  Fe.Any = ot();
  Fe.Cc = st();
  Fe.Cf = fs();
  Fe.P = $i();
  Fe.Z = ct();
});
var z = _((G) => {
  "use strict";
  function gf(a) {
    return Object.prototype.toString.call(a);
  }
  function vf(a) {
    return gf(a) === "[object String]";
  }
  var bf = Object.prototype.hasOwnProperty;
  function vs(a, e) {
    return bf.call(a, e);
  }
  function yf(a) {
    var e = Array.prototype.slice.call(arguments, 1);
    return (
      e.forEach(function (i) {
        if (!!i) {
          if (typeof i != "object") throw new TypeError(i + "must be object");
          Object.keys(i).forEach(function (t) {
            a[t] = i[t];
          });
        }
      }),
      a
    );
  }
  function _f(a, e, i) {
    return [].concat(a.slice(0, e), i, a.slice(e + 1));
  }
  function bs(a) {
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
  function ys(a) {
    if (a > 65535) {
      a -= 65536;
      var e = 55296 + (a >> 10),
        i = 56320 + (a & 1023);
      return String.fromCharCode(e, i);
    }
    return String.fromCharCode(a);
  }
  var _s = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
    wf = /&([a-z#][a-z0-9]{1,31});/gi,
    kf = new RegExp(_s.source + "|" + wf.source, "gi"),
    Cf = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
    gs = nt();
  function Ef(a, e) {
    var i = 0;
    return vs(gs, e)
      ? gs[e]
      : e.charCodeAt(0) === 35 &&
        Cf.test(e) &&
        ((i =
          e[1].toLowerCase() === "x"
            ? parseInt(e.slice(2), 16)
            : parseInt(e.slice(1), 10)),
        bs(i))
      ? ys(i)
      : a;
  }
  function Af(a) {
    return a.indexOf("\\") < 0 ? a : a.replace(_s, "$1");
  }
  function Pf(a) {
    return a.indexOf("\\") < 0 && a.indexOf("&") < 0
      ? a
      : a.replace(kf, function (e, i, t) {
          return i || Ef(e, t);
        });
  }
  var Df = /[&<>"]/,
    Sf = /[&<>"]/g,
    Tf = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function If(a) {
    return Tf[a];
  }
  function $f(a) {
    return Df.test(a) ? a.replace(Sf, If) : a;
  }
  var jf = /[.?*+^$[\]\\(){}|-]/g;
  function Rf(a) {
    return a.replace(jf, "\\$&");
  }
  function qf(a) {
    switch (a) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function Ff(a) {
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
  var Bf = $i();
  function zf(a) {
    return Bf.test(a);
  }
  function Lf(a) {
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
  function Hf(a) {
    return (
      (a = a.trim().replace(/\s+/g, " ")),
      "\u1E9E".toLowerCase() === "\u1E7E" && (a = a.replace(/ẞ/g, "\xDF")),
      a.toLowerCase().toUpperCase()
    );
  }
  G.lib = {};
  G.lib.mdurl = rt();
  G.lib.ucmicro = xs();
  G.assign = yf;
  G.isString = vf;
  G.has = vs;
  G.unescapeMd = Af;
  G.unescapeAll = Pf;
  G.isValidEntityCode = bs;
  G.fromCodePoint = ys;
  G.escapeHtml = $f;
  G.arrayReplaceAt = _f;
  G.isSpace = qf;
  G.isWhiteSpace = Ff;
  G.isMdAsciiPunct = Lf;
  G.isPunctChar = zf;
  G.escapeRE = Rf;
  G.normalizeReference = Hf;
});
var ks = _((Cb, ws) => {
  "use strict";
  ws.exports = function (e, i, t) {
    var n,
      r,
      o,
      s,
      c = -1,
      p = e.posMax,
      u = e.pos;
    for (e.pos = i + 1, n = 1; e.pos < p; ) {
      if (((o = e.src.charCodeAt(e.pos)), o === 93 && (n--, n === 0))) {
        r = !0;
        break;
      }
      if (((s = e.pos), e.md.inline.skipToken(e), o === 91)) {
        if (s === e.pos - 1) n++;
        else if (t) return (e.pos = u), -1;
      }
    }
    return r && (c = e.pos), (e.pos = u), c;
  };
});
var As = _((Eb, Es) => {
  "use strict";
  var Cs = z().unescapeAll;
  Es.exports = function (e, i, t) {
    var n,
      r,
      o = 0,
      s = i,
      c = { ok: !1, pos: 0, lines: 0, str: "" };
    if (e.charCodeAt(i) === 60) {
      for (i++; i < t; ) {
        if (((n = e.charCodeAt(i)), n === 10 || n === 60)) return c;
        if (n === 62)
          return (
            (c.pos = i + 1), (c.str = Cs(e.slice(s + 1, i))), (c.ok = !0), c
          );
        if (n === 92 && i + 1 < t) {
          i += 2;
          continue;
        }
        i++;
      }
      return c;
    }
    for (
      r = 0;
      i < t && ((n = e.charCodeAt(i)), !(n === 32 || n < 32 || n === 127));

    ) {
      if (n === 92 && i + 1 < t) {
        if (e.charCodeAt(i + 1) === 32) break;
        i += 2;
        continue;
      }
      if (n === 40 && (r++, r > 32)) return c;
      if (n === 41) {
        if (r === 0) break;
        r--;
      }
      i++;
    }
    return (
      s === i ||
        r !== 0 ||
        ((c.str = Cs(e.slice(s, i))), (c.lines = o), (c.pos = i), (c.ok = !0)),
      c
    );
  };
});
var Ds = _((Ab, Ps) => {
  "use strict";
  var Of = z().unescapeAll;
  Ps.exports = function (e, i, t) {
    var n,
      r,
      o = 0,
      s = i,
      c = { ok: !1, pos: 0, lines: 0, str: "" };
    if (i >= t || ((r = e.charCodeAt(i)), r !== 34 && r !== 39 && r !== 40))
      return c;
    for (i++, r === 40 && (r = 41); i < t; ) {
      if (((n = e.charCodeAt(i)), n === r))
        return (
          (c.pos = i + 1),
          (c.lines = o),
          (c.str = Of(e.slice(s + 1, i))),
          (c.ok = !0),
          c
        );
      if (n === 40 && r === 41) return c;
      n === 10
        ? o++
        : n === 92 && i + 1 < t && (i++, e.charCodeAt(i) === 10 && o++),
        i++;
    }
    return c;
  };
});
var Ss = _((Fi) => {
  "use strict";
  Fi.parseLinkLabel = ks();
  Fi.parseLinkDestination = As();
  Fi.parseLinkTitle = Ds();
});
var Is = _((Db, Ts) => {
  "use strict";
  var Mf = z().assign,
    Nf = z().unescapeAll,
    Ae = z().escapeHtml,
    pe = {};
  pe.code_inline = function (a, e, i, t, n) {
    var r = a[e];
    return "<code" + n.renderAttrs(r) + ">" + Ae(a[e].content) + "</code>";
  };
  pe.code_block = function (a, e, i, t, n) {
    var r = a[e];
    return (
      "<pre" +
      n.renderAttrs(r) +
      "><code>" +
      Ae(a[e].content) +
      `</code></pre>
`
    );
  };
  pe.fence = function (a, e, i, t, n) {
    var r = a[e],
      o = r.info ? Nf(r.info).trim() : "",
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
        ? (p = i.highlight(r.content, s, c) || Ae(r.content))
        : (p = Ae(r.content)),
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
            n.renderAttrs(l) +
            ">" +
            p +
            `</code></pre>
`)
        : "<pre><code" +
          n.renderAttrs(r) +
          ">" +
          p +
          `</code></pre>
`
    );
  };
  pe.image = function (a, e, i, t, n) {
    var r = a[e];
    return (
      (r.attrs[r.attrIndex("alt")][1] = n.renderInlineAsText(r.children, i, t)),
      n.renderToken(a, e, i)
    );
  };
  pe.hardbreak = function (a, e, i) {
    return i.xhtmlOut
      ? `<br />
`
      : `<br>
`;
  };
  pe.softbreak = function (a, e, i) {
    return i.breaks
      ? i.xhtmlOut
        ? `<br />
`
        : `<br>
`
      : `
`;
  };
  pe.text = function (a, e) {
    return Ae(a[e].content);
  };
  pe.html_block = function (a, e) {
    return a[e].content;
  };
  pe.html_inline = function (a, e) {
    return a[e].content;
  };
  function Be() {
    this.rules = Mf({}, pe);
  }
  Be.prototype.renderAttrs = function (e) {
    var i, t, n;
    if (!e.attrs) return "";
    for (n = "", i = 0, t = e.attrs.length; i < t; i++)
      n += " " + Ae(e.attrs[i][0]) + '="' + Ae(e.attrs[i][1]) + '"';
    return n;
  };
  Be.prototype.renderToken = function (e, i, t) {
    var n,
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
        s.nesting === 0 && t.xhtmlOut && (r += " /"),
        s.block &&
          ((o = !0),
          s.nesting === 1 &&
            i + 1 < e.length &&
            ((n = e[i + 1]),
            (n.type === "inline" ||
              n.hidden ||
              (n.nesting === -1 && n.tag === s.tag)) &&
              (o = !1))),
        (r += o
          ? `>
`
          : ">"),
        r);
  };
  Be.prototype.renderInline = function (a, e, i) {
    for (var t, n = "", r = this.rules, o = 0, s = a.length; o < s; o++)
      (t = a[o].type),
        typeof r[t] < "u"
          ? (n += r[t](a, o, e, i, this))
          : (n += this.renderToken(a, o, e));
    return n;
  };
  Be.prototype.renderInlineAsText = function (a, e, i) {
    for (var t = "", n = 0, r = a.length; n < r; n++)
      a[n].type === "text"
        ? (t += a[n].content)
        : a[n].type === "image"
        ? (t += this.renderInlineAsText(a[n].children, e, i))
        : a[n].type === "softbreak" &&
          (t += `
`);
    return t;
  };
  Be.prototype.render = function (a, e, i) {
    var t,
      n,
      r,
      o = "",
      s = this.rules;
    for (t = 0, n = a.length; t < n; t++)
      (r = a[t].type),
        r === "inline"
          ? (o += this.renderInline(a[t].children, e, i))
          : typeof s[r] < "u"
          ? (o += s[a[t].type](a, t, e, i, this))
          : (o += this.renderToken(a, t, e, i));
    return o;
  };
  Ts.exports = Be;
});
var Bi = _((Sb, $s) => {
  "use strict";
  function ne() {
    (this.__rules__ = []), (this.__cache__ = null);
  }
  ne.prototype.__find__ = function (a) {
    for (var e = 0; e < this.__rules__.length; e++)
      if (this.__rules__[e].name === a) return e;
    return -1;
  };
  ne.prototype.__compile__ = function () {
    var a = this,
      e = [""];
    a.__rules__.forEach(function (i) {
      !i.enabled ||
        i.alt.forEach(function (t) {
          e.indexOf(t) < 0 && e.push(t);
        });
    }),
      (a.__cache__ = {}),
      e.forEach(function (i) {
        (a.__cache__[i] = []),
          a.__rules__.forEach(function (t) {
            !t.enabled ||
              (i && t.alt.indexOf(i) < 0) ||
              a.__cache__[i].push(t.fn);
          });
      });
  };
  ne.prototype.at = function (a, e, i) {
    var t = this.__find__(a),
      n = i || {};
    if (t === -1) throw new Error("Parser rule not found: " + a);
    (this.__rules__[t].fn = e),
      (this.__rules__[t].alt = n.alt || []),
      (this.__cache__ = null);
  };
  ne.prototype.before = function (a, e, i, t) {
    var n = this.__find__(a),
      r = t || {};
    if (n === -1) throw new Error("Parser rule not found: " + a);
    this.__rules__.splice(n, 0, {
      name: e,
      enabled: !0,
      fn: i,
      alt: r.alt || [],
    }),
      (this.__cache__ = null);
  };
  ne.prototype.after = function (a, e, i, t) {
    var n = this.__find__(a),
      r = t || {};
    if (n === -1) throw new Error("Parser rule not found: " + a);
    this.__rules__.splice(n + 1, 0, {
      name: e,
      enabled: !0,
      fn: i,
      alt: r.alt || [],
    }),
      (this.__cache__ = null);
  };
  ne.prototype.push = function (a, e, i) {
    var t = i || {};
    this.__rules__.push({ name: a, enabled: !0, fn: e, alt: t.alt || [] }),
      (this.__cache__ = null);
  };
  ne.prototype.enable = function (a, e) {
    Array.isArray(a) || (a = [a]);
    var i = [];
    return (
      a.forEach(function (t) {
        var n = this.__find__(t);
        if (n < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + t);
        }
        (this.__rules__[n].enabled = !0), i.push(t);
      }, this),
      (this.__cache__ = null),
      i
    );
  };
  ne.prototype.enableOnly = function (a, e) {
    Array.isArray(a) || (a = [a]),
      this.__rules__.forEach(function (i) {
        i.enabled = !1;
      }),
      this.enable(a, e);
  };
  ne.prototype.disable = function (a, e) {
    Array.isArray(a) || (a = [a]);
    var i = [];
    return (
      a.forEach(function (t) {
        var n = this.__find__(t);
        if (n < 0) {
          if (e) return;
          throw new Error("Rules manager: invalid rule name " + t);
        }
        (this.__rules__[n].enabled = !1), i.push(t);
      }, this),
      (this.__cache__ = null),
      i
    );
  };
  ne.prototype.getRules = function (a) {
    return (
      this.__cache__ === null && this.__compile__(), this.__cache__[a] || []
    );
  };
  $s.exports = ne;
});
var Rs = _((Tb, js) => {
  "use strict";
  var Uf = /\r\n?|\n/g,
    Gf = /\0/g;
  js.exports = function (e) {
    var i;
    (i = e.src.replace(
      Uf,
      `
`
    )),
      (i = i.replace(Gf, "\uFFFD")),
      (e.src = i);
  };
});
var Fs = _((Ib, qs) => {
  "use strict";
  qs.exports = function (e) {
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
var zs = _(($b, Bs) => {
  "use strict";
  Bs.exports = function (e) {
    var i = e.tokens,
      t,
      n,
      r;
    for (n = 0, r = i.length; n < r; n++)
      (t = i[n]),
        t.type === "inline" &&
          e.md.inline.parse(t.content, e.md, e.env, t.children);
  };
});
var Hs = _((jb, Ls) => {
  "use strict";
  var Xf = z().arrayReplaceAt;
  function Vf(a) {
    return /^<a[>\s]/i.test(a);
  }
  function Jf(a) {
    return /^<\/a\s*>/i.test(a);
  }
  Ls.exports = function (e) {
    var i,
      t,
      n,
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
      y;
    if (!!e.md.options.linkify) {
      for (t = 0, n = g.length; t < n; t++)
        if (!(g[t].type !== "inline" || !e.md.linkify.pretest(g[t].content)))
          for (r = g[t].children, d = 0, i = r.length - 1; i >= 0; i--) {
            if (((s = r[i]), s.type === "link_close")) {
              for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
                i--;
              continue;
            }
            if (
              (s.type === "html_inline" &&
                (Vf(s.content) && d > 0 && d--, Jf(s.content) && d++),
              !(d > 0) && s.type === "text" && e.md.linkify.test(s.content))
            ) {
              for (
                u = s.content,
                  y = e.md.linkify.match(u),
                  c = [],
                  l = s.level,
                  f = 0,
                  y.length > 0 &&
                    y[0].index === 0 &&
                    i > 0 &&
                    r[i - 1].type === "text_special" &&
                    (y = y.slice(1)),
                  p = 0;
                p < y.length;
                p++
              )
                (h = y[p].url),
                  (x = e.md.normalizeLink(h)),
                  e.md.validateLink(x) &&
                    ((v = y[p].text),
                    y[p].schema
                      ? y[p].schema === "mailto:" && !/^mailto:/i.test(v)
                        ? (v = e.md
                            .normalizeLinkText("mailto:" + v)
                            .replace(/^mailto:/, ""))
                        : (v = e.md.normalizeLinkText(v))
                      : (v = e.md
                          .normalizeLinkText("http://" + v)
                          .replace(/^http:\/\//, "")),
                    (m = y[p].index),
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
                    (f = y[p].lastIndex));
              f < u.length &&
                ((o = new e.Token("text", "", 0)),
                (o.content = u.slice(f)),
                (o.level = l),
                c.push(o)),
                (g[t].children = r = Xf(r, i, c));
            }
          }
    }
  };
});
var Ns = _((Rb, Ms) => {
  "use strict";
  var Os = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    Zf = /\((c|tm|r)\)/i,
    Qf = /\((c|tm|r)\)/gi,
    Kf = { c: "\xA9", r: "\xAE", tm: "\u2122" };
  function Wf(a, e) {
    return Kf[e.toLowerCase()];
  }
  function Yf(a) {
    var e,
      i,
      t = 0;
    for (e = a.length - 1; e >= 0; e--)
      (i = a[e]),
        i.type === "text" && !t && (i.content = i.content.replace(Qf, Wf)),
        i.type === "link_open" && i.info === "auto" && t--,
        i.type === "link_close" && i.info === "auto" && t++;
  }
  function eh(a) {
    var e,
      i,
      t = 0;
    for (e = a.length - 1; e >= 0; e--)
      (i = a[e]),
        i.type === "text" &&
          !t &&
          Os.test(i.content) &&
          (i.content = i.content
            .replace(/\+-/g, "\xB1")
            .replace(/\.{2,}/g, "\u2026")
            .replace(/([?!])…/g, "$1..")
            .replace(/([?!]){4,}/g, "$1$1$1")
            .replace(/,{2,}/g, ",")
            .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
            .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
            .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
        i.type === "link_open" && i.info === "auto" && t--,
        i.type === "link_close" && i.info === "auto" && t++;
  }
  Ms.exports = function (e) {
    var i;
    if (!!e.md.options.typographer)
      for (i = e.tokens.length - 1; i >= 0; i--)
        e.tokens[i].type === "inline" &&
          (Zf.test(e.tokens[i].content) && Yf(e.tokens[i].children),
          Os.test(e.tokens[i].content) && eh(e.tokens[i].children));
  };
});
var Qs = _((qb, Zs) => {
  "use strict";
  var Us = z().isWhiteSpace,
    Gs = z().isPunctChar,
    Xs = z().isMdAsciiPunct,
    ih = /['"]/,
    Vs = /['"]/g,
    Js = "\u2019";
  function zi(a, e, i) {
    return a.slice(0, e) + i + a.slice(e + 1);
  }
  function ah(a, e) {
    var i, t, n, r, o, s, c, p, u, m, f, l, d, h, x, v, g, y, D, w, b;
    for (D = [], i = 0; i < a.length; i++) {
      for (
        t = a[i], c = a[i].level, g = D.length - 1;
        g >= 0 && !(D[g].level <= c);
        g--
      );
      if (((D.length = g + 1), t.type !== "text")) continue;
      (n = t.content), (o = 0), (s = n.length);
      e: for (; o < s && ((Vs.lastIndex = o), (r = Vs.exec(n)), !!r); ) {
        if (
          ((x = v = !0),
          (o = r.index + 1),
          (y = r[0] === "'"),
          (u = 32),
          r.index - 1 >= 0)
        )
          u = n.charCodeAt(r.index - 1);
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
        if (((m = 32), o < s)) m = n.charCodeAt(o);
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
          ((f = Xs(u) || Gs(String.fromCharCode(u))),
          (l = Xs(m) || Gs(String.fromCharCode(m))),
          (d = Us(u)),
          (h = Us(m)),
          h ? (x = !1) : l && (d || f || (x = !1)),
          d ? (v = !1) : f && (h || l || (v = !1)),
          m === 34 && r[0] === '"' && u >= 48 && u <= 57 && (v = x = !1),
          x && v && ((x = f), (v = l)),
          !x && !v)
        ) {
          y && (t.content = zi(t.content, r.index, Js));
          continue;
        }
        if (v) {
          for (g = D.length - 1; g >= 0 && ((p = D[g]), !(D[g].level < c)); g--)
            if (p.single === y && D[g].level === c) {
              (p = D[g]),
                y
                  ? ((w = e.md.options.quotes[2]), (b = e.md.options.quotes[3]))
                  : ((w = e.md.options.quotes[0]),
                    (b = e.md.options.quotes[1])),
                (t.content = zi(t.content, r.index, b)),
                (a[p.token].content = zi(a[p.token].content, p.pos, w)),
                (o += b.length - 1),
                p.token === i && (o += w.length - 1),
                (n = t.content),
                (s = n.length),
                (D.length = g);
              continue e;
            }
        }
        x
          ? D.push({ token: i, pos: r.index, single: y, level: c })
          : v && y && (t.content = zi(t.content, r.index, Js));
      }
    }
  }
  Zs.exports = function (e) {
    var i;
    if (!!e.md.options.typographer)
      for (i = e.tokens.length - 1; i >= 0; i--)
        e.tokens[i].type !== "inline" ||
          !ih.test(e.tokens[i].content) ||
          ah(e.tokens[i].children, e);
  };
});
var Ws = _((Fb, Ks) => {
  "use strict";
  Ks.exports = function (e) {
    var i,
      t,
      n,
      r,
      o,
      s,
      c = e.tokens;
    for (i = 0, t = c.length; i < t; i++)
      if (c[i].type === "inline") {
        for (n = c[i].children, o = n.length, r = 0; r < o; r++)
          n[r].type === "text_special" && (n[r].type = "text");
        for (r = s = 0; r < o; r++)
          n[r].type === "text" && r + 1 < o && n[r + 1].type === "text"
            ? (n[r + 1].content = n[r].content + n[r + 1].content)
            : (r !== s && (n[s] = n[r]), s++);
        r !== s && (n.length = s);
      }
  };
});
var Li = _((Bb, Ys) => {
  "use strict";
  function ze(a, e, i) {
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
  ze.prototype.attrIndex = function (e) {
    var i, t, n;
    if (!this.attrs) return -1;
    for (i = this.attrs, t = 0, n = i.length; t < n; t++)
      if (i[t][0] === e) return t;
    return -1;
  };
  ze.prototype.attrPush = function (e) {
    this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
  };
  ze.prototype.attrSet = function (e, i) {
    var t = this.attrIndex(e),
      n = [e, i];
    t < 0 ? this.attrPush(n) : (this.attrs[t] = n);
  };
  ze.prototype.attrGet = function (e) {
    var i = this.attrIndex(e),
      t = null;
    return i >= 0 && (t = this.attrs[i][1]), t;
  };
  ze.prototype.attrJoin = function (e, i) {
    var t = this.attrIndex(e);
    t < 0
      ? this.attrPush([e, i])
      : (this.attrs[t][1] = this.attrs[t][1] + " " + i);
  };
  Ys.exports = ze;
});
var ac = _((zb, ic) => {
  "use strict";
  var th = Li();
  function ec(a, e, i) {
    (this.src = a),
      (this.env = i),
      (this.tokens = []),
      (this.inlineMode = !1),
      (this.md = e);
  }
  ec.prototype.Token = th;
  ic.exports = ec;
});
var nc = _((Lb, tc) => {
  "use strict";
  var nh = Bi(),
    pt = [
      ["normalize", Rs()],
      ["block", Fs()],
      ["inline", zs()],
      ["linkify", Hs()],
      ["replacements", Ns()],
      ["smartquotes", Qs()],
      ["text_join", Ws()],
    ];
  function lt() {
    this.ruler = new nh();
    for (var a = 0; a < pt.length; a++) this.ruler.push(pt[a][0], pt[a][1]);
  }
  lt.prototype.process = function (a) {
    var e, i, t;
    for (t = this.ruler.getRules(""), e = 0, i = t.length; e < i; e++) t[e](a);
  };
  lt.prototype.State = ac();
  tc.exports = lt;
});
var sc = _((Hb, oc) => {
  "use strict";
  var ut = z().isSpace;
  function dt(a, e) {
    var i = a.bMarks[e] + a.tShift[e],
      t = a.eMarks[e];
    return a.src.slice(i, t);
  }
  function rc(a) {
    var e = [],
      i = 0,
      t = a.length,
      n,
      r = !1,
      o = 0,
      s = "";
    for (n = a.charCodeAt(i); i < t; )
      n === 124 &&
        (r
          ? ((s += a.substring(o, i - 1)), (o = i))
          : (e.push(s + a.substring(o, i)), (s = ""), (o = i + 1))),
        (r = n === 92),
        i++,
        (n = a.charCodeAt(i));
    return e.push(s + a.substring(o)), e;
  }
  oc.exports = function (e, i, t, n) {
    var r, o, s, c, p, u, m, f, l, d, h, x, v, g, y, D, w, b;
    if (
      i + 2 > t ||
      ((u = i + 1), e.sCount[u] < e.blkIndent) ||
      e.sCount[u] - e.blkIndent >= 4 ||
      ((s = e.bMarks[u] + e.tShift[u]), s >= e.eMarks[u]) ||
      ((w = e.src.charCodeAt(s++)), w !== 124 && w !== 45 && w !== 58) ||
      s >= e.eMarks[u] ||
      ((b = e.src.charCodeAt(s++)),
      b !== 124 && b !== 45 && b !== 58 && !ut(b)) ||
      (w === 45 && ut(b))
    )
      return !1;
    for (; s < e.eMarks[u]; ) {
      if (
        ((r = e.src.charCodeAt(s)), r !== 124 && r !== 45 && r !== 58 && !ut(r))
      )
        return !1;
      s++;
    }
    for (o = dt(e, i + 1), m = o.split("|"), d = [], c = 0; c < m.length; c++) {
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
      ((o = dt(e, i).trim()),
      o.indexOf("|") === -1 ||
        e.sCount[i] - e.blkIndent >= 4 ||
        ((m = rc(o)),
        m.length && m[0] === "" && m.shift(),
        m.length && m[m.length - 1] === "" && m.pop(),
        (f = m.length),
        f === 0 || f !== d.length))
    )
      return !1;
    if (n) return !0;
    for (
      g = e.parentType,
        e.parentType = "table",
        D = e.md.block.ruler.getRules("blockquote"),
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
      u < t && !(e.sCount[u] < e.blkIndent);
      u++
    ) {
      for (y = !1, c = 0, p = D.length; c < p; c++)
        if (D[c](e, u, t, !0)) {
          y = !0;
          break;
        }
      if (y || ((o = dt(e, u).trim()), !o) || e.sCount[u] - e.blkIndent >= 4)
        break;
      for (
        m = rc(o),
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
var pc = _((Ob, cc) => {
  "use strict";
  cc.exports = function (e, i, t) {
    var n, r, o;
    if (e.sCount[i] - e.blkIndent < 4) return !1;
    for (r = n = i + 1; n < t; ) {
      if (e.isEmpty(n)) {
        n++;
        continue;
      }
      if (e.sCount[n] - e.blkIndent >= 4) {
        n++, (r = n);
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
var uc = _((Mb, lc) => {
  "use strict";
  lc.exports = function (e, i, t, n) {
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
    if (n) return !0;
    for (
      c = i;
      c++,
        !(
          c >= t ||
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
var fc = _((Nb, mc) => {
  "use strict";
  var dc = z().isSpace;
  mc.exports = function (e, i, t, n) {
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
      y,
      D,
      w,
      b,
      C,
      S,
      L = e.lineMax,
      j = e.bMarks[i] + e.tShift[i],
      A = e.eMarks[i];
    if (e.sCount[i] - e.blkIndent >= 4 || e.src.charCodeAt(j++) !== 62)
      return !1;
    if (n) return !0;
    for (
      c = l = e.sCount[i] + 1,
        e.src.charCodeAt(j) === 32
          ? (j++, c++, l++, (r = !1), (D = !0))
          : e.src.charCodeAt(j) === 9
          ? ((D = !0),
            (e.bsCount[i] + l) % 4 === 3 ? (j++, c++, l++, (r = !1)) : (r = !0))
          : (D = !1),
        d = [e.bMarks[i]],
        e.bMarks[i] = j;
      j < A && ((o = e.src.charCodeAt(j)), dc(o));

    ) {
      o === 9 ? (l += 4 - ((l + e.bsCount[i] + (r ? 1 : 0)) % 4)) : l++;
      j++;
    }
    for (
      h = [e.bsCount[i]],
        e.bsCount[i] = e.sCount[i] + 1 + (D ? 1 : 0),
        u = j >= A,
        g = [e.sCount[i]],
        e.sCount[i] = l - c,
        y = [e.tShift[i]],
        e.tShift[i] = j - e.bMarks[i],
        b = e.md.block.ruler.getRules("blockquote"),
        v = e.parentType,
        e.parentType = "blockquote",
        f = i + 1;
      f < t &&
      ((S = e.sCount[f] < e.blkIndent),
      (j = e.bMarks[f] + e.tShift[f]),
      (A = e.eMarks[f]),
      !(j >= A));
      f++
    ) {
      if (e.src.charCodeAt(j++) === 62 && !S) {
        for (
          c = l = e.sCount[f] + 1,
            e.src.charCodeAt(j) === 32
              ? (j++, c++, l++, (r = !1), (D = !0))
              : e.src.charCodeAt(j) === 9
              ? ((D = !0),
                (e.bsCount[f] + l) % 4 === 3
                  ? (j++, c++, l++, (r = !1))
                  : (r = !0))
              : (D = !1),
            d.push(e.bMarks[f]),
            e.bMarks[f] = j;
          j < A && ((o = e.src.charCodeAt(j)), dc(o));

        ) {
          o === 9 ? (l += 4 - ((l + e.bsCount[f] + (r ? 1 : 0)) % 4)) : l++;
          j++;
        }
        (u = j >= A),
          h.push(e.bsCount[f]),
          (e.bsCount[f] = e.sCount[f] + 1 + (D ? 1 : 0)),
          g.push(e.sCount[f]),
          (e.sCount[f] = l - c),
          y.push(e.tShift[f]),
          (e.tShift[f] = j - e.bMarks[f]);
        continue;
      }
      if (u) break;
      for (w = !1, s = 0, p = b.length; s < p; s++)
        if (b[s](e, f, t, !0)) {
          w = !0;
          break;
        }
      if (w) {
        (e.lineMax = f),
          e.blkIndent !== 0 &&
            (d.push(e.bMarks[f]),
            h.push(e.bsCount[f]),
            y.push(e.tShift[f]),
            g.push(e.sCount[f]),
            (e.sCount[f] -= e.blkIndent));
        break;
      }
      d.push(e.bMarks[f]),
        h.push(e.bsCount[f]),
        y.push(e.tShift[f]),
        g.push(e.sCount[f]),
        (e.sCount[f] = -1);
    }
    for (
      x = e.blkIndent,
        e.blkIndent = 0,
        C = e.push("blockquote_open", "blockquote", 1),
        C.markup = ">",
        C.map = m = [i, 0],
        e.md.block.tokenize(e, i, f),
        C = e.push("blockquote_close", "blockquote", -1),
        C.markup = ">",
        e.lineMax = L,
        e.parentType = v,
        m[1] = e.line,
        s = 0;
      s < y.length;
      s++
    )
      (e.bMarks[s + i] = d[s]),
        (e.tShift[s + i] = y[s]),
        (e.sCount[s + i] = g[s]),
        (e.bsCount[s + i] = h[s]);
    return (e.blkIndent = x), !0;
  };
});
var xc = _((Ub, hc) => {
  "use strict";
  var rh = z().isSpace;
  hc.exports = function (e, i, t, n) {
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
      if (((s = e.src.charCodeAt(p++)), s !== r && !rh(s))) return !1;
      s === r && o++;
    }
    return o < 3
      ? !1
      : (n ||
          ((e.line = i + 1),
          (c = e.push("hr", "hr", 0)),
          (c.map = [i, e.line]),
          (c.markup = Array(o + 1).join(String.fromCharCode(r)))),
        !0);
  };
});
var _c = _((Gb, yc) => {
  "use strict";
  var bc = z().isSpace;
  function gc(a, e) {
    var i, t, n, r;
    return (
      (t = a.bMarks[e] + a.tShift[e]),
      (n = a.eMarks[e]),
      (i = a.src.charCodeAt(t++)),
      (i !== 42 && i !== 45 && i !== 43) ||
      (t < n && ((r = a.src.charCodeAt(t)), !bc(r)))
        ? -1
        : t
    );
  }
  function vc(a, e) {
    var i,
      t = a.bMarks[e] + a.tShift[e],
      n = t,
      r = a.eMarks[e];
    if (n + 1 >= r || ((i = a.src.charCodeAt(n++)), i < 48 || i > 57))
      return -1;
    for (;;) {
      if (n >= r) return -1;
      if (((i = a.src.charCodeAt(n++)), i >= 48 && i <= 57)) {
        if (n - t >= 10) return -1;
        continue;
      }
      if (i === 41 || i === 46) break;
      return -1;
    }
    return n < r && ((i = a.src.charCodeAt(n)), !bc(i)) ? -1 : n;
  }
  function oh(a, e) {
    var i,
      t,
      n = a.level + 2;
    for (i = e + 2, t = a.tokens.length - 2; i < t; i++)
      a.tokens[i].level === n &&
        a.tokens[i].type === "paragraph_open" &&
        ((a.tokens[i + 2].hidden = !0), (a.tokens[i].hidden = !0), (i += 2));
  }
  yc.exports = function (e, i, t, n) {
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
      y,
      D,
      w,
      b,
      C,
      S,
      L,
      j,
      A,
      E,
      k,
      I,
      P,
      T,
      $ = !1,
      B = !0;
    if (
      e.sCount[i] - e.blkIndent >= 4 ||
      (e.listIndent >= 0 &&
        e.sCount[i] - e.listIndent >= 4 &&
        e.sCount[i] < e.blkIndent)
    )
      return !1;
    if (
      (n &&
        e.parentType === "paragraph" &&
        e.sCount[i] >= e.blkIndent &&
        ($ = !0),
      (A = vc(e, i)) >= 0)
    ) {
      if (
        ((m = !0),
        (k = e.bMarks[i] + e.tShift[i]),
        (v = Number(e.src.slice(k, A - 1))),
        $ && v !== 1)
      )
        return !1;
    } else if ((A = gc(e, i)) >= 0) m = !1;
    else return !1;
    if ($ && e.skipSpaces(A) >= e.eMarks[i]) return !1;
    if (((x = e.src.charCodeAt(A - 1)), n)) return !0;
    for (
      h = e.tokens.length,
        m
          ? ((T = e.push("ordered_list_open", "ol", 1)),
            v !== 1 && (T.attrs = [["start", v]]))
          : (T = e.push("bullet_list_open", "ul", 1)),
        T.map = d = [i, 0],
        T.markup = String.fromCharCode(x),
        y = i,
        E = !1,
        P = e.md.block.ruler.getRules("list"),
        b = e.parentType,
        e.parentType = "list";
      y < t;

    ) {
      for (
        j = A,
          g = e.eMarks[y],
          u = D = e.sCount[y] + A - (e.bMarks[i] + e.tShift[i]);
        j < g;

      ) {
        if (((r = e.src.charCodeAt(j)), r === 9))
          D += 4 - ((D + e.bsCount[y]) % 4);
        else if (r === 32) D++;
        else break;
        j++;
      }
      if (
        ((o = j),
        o >= g ? (p = 1) : (p = D - u),
        p > 4 && (p = 1),
        (c = u + p),
        (T = e.push("list_item_open", "li", 1)),
        (T.markup = String.fromCharCode(x)),
        (T.map = f = [i, 0]),
        m && (T.info = e.src.slice(k, A - 1)),
        (L = e.tight),
        (S = e.tShift[i]),
        (C = e.sCount[i]),
        (w = e.listIndent),
        (e.listIndent = e.blkIndent),
        (e.blkIndent = c),
        (e.tight = !0),
        (e.tShift[i] = o - e.bMarks[i]),
        (e.sCount[i] = D),
        o >= g && e.isEmpty(i + 1)
          ? (e.line = Math.min(e.line + 2, t))
          : e.md.block.tokenize(e, i, t, !0),
        (!e.tight || E) && (B = !1),
        (E = e.line - i > 1 && e.isEmpty(e.line - 1)),
        (e.blkIndent = e.listIndent),
        (e.listIndent = w),
        (e.tShift[i] = S),
        (e.sCount[i] = C),
        (e.tight = L),
        (T = e.push("list_item_close", "li", -1)),
        (T.markup = String.fromCharCode(x)),
        (y = i = e.line),
        (f[1] = y),
        (o = e.bMarks[i]),
        y >= t || e.sCount[y] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4)
      )
        break;
      for (I = !1, s = 0, l = P.length; s < l; s++)
        if (P[s](e, y, t, !0)) {
          I = !0;
          break;
        }
      if (I) break;
      if (m) {
        if (((A = vc(e, y)), A < 0)) break;
        k = e.bMarks[y] + e.tShift[y];
      } else if (((A = gc(e, y)), A < 0)) break;
      if (x !== e.src.charCodeAt(A - 1)) break;
    }
    return (
      m
        ? (T = e.push("ordered_list_close", "ol", -1))
        : (T = e.push("bullet_list_close", "ul", -1)),
      (T.markup = String.fromCharCode(x)),
      (d[1] = y),
      (e.line = y),
      (e.parentType = b),
      B && oh(e, h),
      !0
    );
  };
});
var kc = _((Xb, wc) => {
  "use strict";
  var sh = z().normalizeReference,
    Hi = z().isSpace;
  wc.exports = function (e, i, t, n) {
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
      y,
      D,
      w = 0,
      b = e.bMarks[i] + e.tShift[i],
      C = e.eMarks[i],
      S = i + 1;
    if (e.sCount[i] - e.blkIndent >= 4 || e.src.charCodeAt(b) !== 91) return !1;
    for (; ++b < C; )
      if (e.src.charCodeAt(b) === 93 && e.src.charCodeAt(b - 1) !== 92) {
        if (b + 1 === C || e.src.charCodeAt(b + 1) !== 58) return !1;
        break;
      }
    for (
      c = e.lineMax,
        y = e.md.block.ruler.getRules("reference"),
        d = e.parentType,
        e.parentType = "reference";
      S < c && !e.isEmpty(S);
      S++
    )
      if (!(e.sCount[S] - e.blkIndent > 3) && !(e.sCount[S] < 0)) {
        for (g = !1, u = 0, m = y.length; u < m; u++)
          if (y[u](e, S, c, !0)) {
            g = !0;
            break;
          }
        if (g) break;
      }
    for (
      v = e.getLines(i, S, e.blkIndent, !1).trim(), C = v.length, b = 1;
      b < C;
      b++
    ) {
      if (((r = v.charCodeAt(b)), r === 91)) return !1;
      if (r === 93) {
        l = b;
        break;
      } else
        r === 10
          ? w++
          : r === 92 && (b++, b < C && v.charCodeAt(b) === 10 && w++);
    }
    if (l < 0 || v.charCodeAt(l + 1) !== 58) return !1;
    for (b = l + 2; b < C; b++)
      if (((r = v.charCodeAt(b)), r === 10)) w++;
      else if (!Hi(r)) break;
    if (
      ((h = e.md.helpers.parseLinkDestination(v, b, C)),
      !h.ok || ((p = e.md.normalizeLink(h.str)), !e.md.validateLink(p)))
    )
      return !1;
    for (b = h.pos, w += h.lines, o = b, s = w, x = b; b < C; b++)
      if (((r = v.charCodeAt(b)), r === 10)) w++;
      else if (!Hi(r)) break;
    for (
      h = e.md.helpers.parseLinkTitle(v, b, C),
        b < C && x !== b && h.ok
          ? ((D = h.str), (b = h.pos), (w += h.lines))
          : ((D = ""), (b = o), (w = s));
      b < C && ((r = v.charCodeAt(b)), !!Hi(r));

    )
      b++;
    if (b < C && v.charCodeAt(b) !== 10 && D)
      for (D = "", b = o, w = s; b < C && ((r = v.charCodeAt(b)), !!Hi(r)); )
        b++;
    return (b < C && v.charCodeAt(b) !== 10) || ((f = sh(v.slice(1, l))), !f)
      ? !1
      : (n ||
          (typeof e.env.references > "u" && (e.env.references = {}),
          typeof e.env.references[f] > "u" &&
            (e.env.references[f] = { title: D, href: p }),
          (e.parentType = d),
          (e.line = i + w + 1)),
        !0);
  };
});
var Ec = _((Vb, Cc) => {
  "use strict";
  Cc.exports = [
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
var ft = _((Jb, mt) => {
  "use strict";
  var ch = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
    ph = "[^\"'=<>`\\x00-\\x20]+",
    lh = "'[^']*'",
    uh = '"[^"]*"',
    dh = "(?:" + ph + "|" + lh + "|" + uh + ")",
    mh = "(?:\\s+" + ch + "(?:\\s*=\\s*" + dh + ")?)",
    Ac = "<[A-Za-z][A-Za-z0-9\\-]*" + mh + "*\\s*\\/?>",
    Pc = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    fh = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
    hh = "<[?][\\s\\S]*?[?]>",
    xh = "<![A-Z]+\\s+[^>]*>",
    gh = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    vh = new RegExp(
      "^(?:" + Ac + "|" + Pc + "|" + fh + "|" + hh + "|" + xh + "|" + gh + ")"
    ),
    bh = new RegExp("^(?:" + Ac + "|" + Pc + ")");
  mt.exports.HTML_TAG_RE = vh;
  mt.exports.HTML_OPEN_CLOSE_TAG_RE = bh;
});
var Sc = _((Zb, Dc) => {
  "use strict";
  var yh = Ec(),
    _h = ft().HTML_OPEN_CLOSE_TAG_RE,
    Le = [
      [
        /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
        /<\/(script|pre|style|textarea)>/i,
        !0,
      ],
      [/^<!--/, /-->/, !0],
      [/^<\?/, /\?>/, !0],
      [/^<![A-Z]/, />/, !0],
      [/^<!\[CDATA\[/, /\]\]>/, !0],
      [new RegExp("^</?(" + yh.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
      [new RegExp(_h.source + "\\s*$"), /^$/, !1],
    ];
  Dc.exports = function (e, i, t, n) {
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
    for (c = e.src.slice(p, u), r = 0; r < Le.length && !Le[r][0].test(c); r++);
    if (r === Le.length) return !1;
    if (n) return Le[r][2];
    if (((o = i + 1), !Le[r][1].test(c))) {
      for (; o < t && !(e.sCount[o] < e.blkIndent); o++)
        if (
          ((p = e.bMarks[o] + e.tShift[o]),
          (u = e.eMarks[o]),
          (c = e.src.slice(p, u)),
          Le[r][1].test(c))
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
var $c = _((Qb, Ic) => {
  "use strict";
  var Tc = z().isSpace;
  Ic.exports = function (e, i, t, n) {
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
    return o > 6 || (p < u && !Tc(r))
      ? !1
      : (n ||
          ((u = e.skipSpacesBack(u, p)),
          (s = e.skipCharsBack(u, 35, p)),
          s > p && Tc(e.src.charCodeAt(s - 1)) && (u = s),
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
var Rc = _((Kb, jc) => {
  "use strict";
  jc.exports = function (e, i, t) {
    var n,
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
      l < t && !e.isEmpty(l);
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
            if (h[o](e, l, t, !0)) {
              r = !0;
              break;
            }
          if (r) break;
        }
      }
    return m
      ? ((n = e.getLines(i, l, e.blkIndent, !1).trim()),
        (e.line = l + 1),
        (c = e.push("heading_open", "h" + String(m), 1)),
        (c.markup = String.fromCharCode(f)),
        (c.map = [i, e.line]),
        (c = e.push("inline", "", 0)),
        (c.content = n),
        (c.map = [i, e.line - 1]),
        (c.children = []),
        (c = e.push("heading_close", "h" + String(m), -1)),
        (c.markup = String.fromCharCode(f)),
        (e.parentType = d),
        !0)
      : !1;
  };
});
var Fc = _((Wb, qc) => {
  "use strict";
  qc.exports = function (e, i) {
    var t,
      n,
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
        for (n = !1, r = 0, o = u.length; r < o; r++)
          if (u[r](e, p, m, !0)) {
            n = !0;
            break;
          }
        if (n) break;
      }
    return (
      (t = e.getLines(i, p, e.blkIndent, !1).trim()),
      (e.line = p),
      (s = e.push("paragraph_open", "p", 1)),
      (s.map = [i, e.line]),
      (s = e.push("inline", "", 0)),
      (s.content = t),
      (s.map = [i, e.line]),
      (s.children = []),
      (s = e.push("paragraph_close", "p", -1)),
      (e.parentType = c),
      !0
    );
  };
});
var Lc = _((Yb, zc) => {
  "use strict";
  var Bc = Li(),
    Oi = z().isSpace;
  function le(a, e, i, t) {
    var n, r, o, s, c, p, u, m;
    for (
      this.src = a,
        this.md = e,
        this.env = i,
        this.tokens = t,
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
      if (((n = r.charCodeAt(s)), !m))
        if (Oi(n)) {
          p++, n === 9 ? (u += 4 - (u % 4)) : u++;
          continue;
        } else m = !0;
      (n === 10 || s === c - 1) &&
        (n !== 10 && s++,
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
  le.prototype.push = function (a, e, i) {
    var t = new Bc(a, e, i);
    return (
      (t.block = !0),
      i < 0 && this.level--,
      (t.level = this.level),
      i > 0 && this.level++,
      this.tokens.push(t),
      t
    );
  };
  le.prototype.isEmpty = function (e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  };
  le.prototype.skipEmptyLines = function (e) {
    for (
      var i = this.lineMax;
      e < i && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]);
      e++
    );
    return e;
  };
  le.prototype.skipSpaces = function (e) {
    for (
      var i, t = this.src.length;
      e < t && ((i = this.src.charCodeAt(e)), !!Oi(i));
      e++
    );
    return e;
  };
  le.prototype.skipSpacesBack = function (e, i) {
    if (e <= i) return e;
    for (; e > i; ) if (!Oi(this.src.charCodeAt(--e))) return e + 1;
    return e;
  };
  le.prototype.skipChars = function (e, i) {
    for (var t = this.src.length; e < t && this.src.charCodeAt(e) === i; e++);
    return e;
  };
  le.prototype.skipCharsBack = function (e, i, t) {
    if (e <= t) return e;
    for (; e > t; ) if (i !== this.src.charCodeAt(--e)) return e + 1;
    return e;
  };
  le.prototype.getLines = function (e, i, t, n) {
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
          f + 1 < i || n ? (p = this.eMarks[f] + 1) : (p = this.eMarks[f]);
        c < p && o < t;

      ) {
        if (((s = this.src.charCodeAt(c)), Oi(s)))
          s === 9 ? (o += 4 - ((o + this.bsCount[f]) % 4)) : o++;
        else if (c - m < this.tShift[f]) o++;
        else break;
        c++;
      }
      o > t
        ? (u[r] = new Array(o - t + 1).join(" ") + this.src.slice(c, p))
        : (u[r] = this.src.slice(c, p));
    }
    return u.join("");
  };
  le.prototype.Token = Bc;
  zc.exports = le;
});
var Oc = _((e0, Hc) => {
  "use strict";
  var wh = Bi(),
    Mi = [
      ["table", sc(), ["paragraph", "reference"]],
      ["code", pc()],
      ["fence", uc(), ["paragraph", "reference", "blockquote", "list"]],
      ["blockquote", fc(), ["paragraph", "reference", "blockquote", "list"]],
      ["hr", xc(), ["paragraph", "reference", "blockquote", "list"]],
      ["list", _c(), ["paragraph", "reference", "blockquote"]],
      ["reference", kc()],
      ["html_block", Sc(), ["paragraph", "reference", "blockquote"]],
      ["heading", $c(), ["paragraph", "reference", "blockquote"]],
      ["lheading", Rc()],
      ["paragraph", Fc()],
    ];
  function Ni() {
    this.ruler = new wh();
    for (var a = 0; a < Mi.length; a++)
      this.ruler.push(Mi[a][0], Mi[a][1], { alt: (Mi[a][2] || []).slice() });
  }
  Ni.prototype.tokenize = function (a, e, i) {
    for (
      var t,
        n,
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
      for (n = 0; n < o && ((t = r[n](a, s, i, !1)), !t); n++);
      (a.tight = !c),
        a.isEmpty(a.line - 1) && (c = !0),
        (s = a.line),
        s < i && a.isEmpty(s) && ((c = !0), s++, (a.line = s));
    }
  };
  Ni.prototype.parse = function (a, e, i, t) {
    var n;
    !a ||
      ((n = new this.State(a, e, i, t)), this.tokenize(n, n.line, n.lineMax));
  };
  Ni.prototype.State = Lc();
  Hc.exports = Ni;
});
var Nc = _((i0, Mc) => {
  "use strict";
  function kh(a) {
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
  Mc.exports = function (e, i) {
    for (var t = e.pos; t < e.posMax && !kh(e.src.charCodeAt(t)); ) t++;
    return t === e.pos
      ? !1
      : (i || (e.pending += e.src.slice(e.pos, t)), (e.pos = t), !0);
  };
});
var Gc = _((a0, Uc) => {
  "use strict";
  var Ch = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  Uc.exports = function (e, i) {
    var t, n, r, o, s, c, p, u;
    return !e.md.options.linkify ||
      e.linkLevel > 0 ||
      ((t = e.pos), (n = e.posMax), t + 3 > n) ||
      e.src.charCodeAt(t) !== 58 ||
      e.src.charCodeAt(t + 1) !== 47 ||
      e.src.charCodeAt(t + 2) !== 47 ||
      ((r = e.pending.match(Ch)), !r) ||
      ((o = r[1]),
      (s = e.md.linkify.matchAtStart(e.src.slice(t - o.length))),
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
var Vc = _((t0, Xc) => {
  "use strict";
  var Eh = z().isSpace;
  Xc.exports = function (e, i) {
    var t,
      n,
      r,
      o = e.pos;
    if (e.src.charCodeAt(o) !== 10) return !1;
    if (((t = e.pending.length - 1), (n = e.posMax), !i))
      if (t >= 0 && e.pending.charCodeAt(t) === 32)
        if (t >= 1 && e.pending.charCodeAt(t - 1) === 32) {
          for (r = t - 1; r >= 1 && e.pending.charCodeAt(r - 1) === 32; ) r--;
          (e.pending = e.pending.slice(0, r)), e.push("hardbreak", "br", 0);
        } else
          (e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0);
      else e.push("softbreak", "br", 0);
    for (o++; o < n && Eh(e.src.charCodeAt(o)); ) o++;
    return (e.pos = o), !0;
  };
});
var Zc = _((n0, Jc) => {
  "use strict";
  var Ah = z().isSpace,
    xt = [];
  for (ht = 0; ht < 256; ht++) xt.push(0);
  var ht;
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (a) {
    xt[a.charCodeAt(0)] = 1;
  });
  Jc.exports = function (e, i) {
    var t,
      n,
      r,
      o,
      s,
      c = e.pos,
      p = e.posMax;
    if (e.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (((t = e.src.charCodeAt(c)), t === 10)) {
      for (
        i || e.push("hardbreak", "br", 0), c++;
        c < p && ((t = e.src.charCodeAt(c)), !!Ah(t));

      )
        c++;
      return (e.pos = c), !0;
    }
    return (
      (o = e.src[c]),
      t >= 55296 &&
        t <= 56319 &&
        c + 1 < p &&
        ((n = e.src.charCodeAt(c + 1)),
        n >= 56320 && n <= 57343 && ((o += e.src[c + 1]), c++)),
      (r = "\\" + o),
      i ||
        ((s = e.push("text_special", "", 0)),
        t < 256 && xt[t] !== 0 ? (s.content = o) : (s.content = r),
        (s.markup = r),
        (s.info = "escape")),
      (e.pos = c + 1),
      !0
    );
  };
});
var Kc = _((r0, Qc) => {
  "use strict";
  Qc.exports = function (e, i) {
    var t,
      n,
      r,
      o,
      s,
      c,
      p,
      u,
      m = e.pos,
      f = e.src.charCodeAt(m);
    if (f !== 96) return !1;
    for (t = m, m++, n = e.posMax; m < n && e.src.charCodeAt(m) === 96; ) m++;
    if (
      ((r = e.src.slice(t, m)),
      (p = r.length),
      e.backticksScanned && (e.backticks[p] || 0) <= t)
    )
      return i || (e.pending += r), (e.pos += p), !0;
    for (s = c = m; (s = e.src.indexOf("`", c)) !== -1; ) {
      for (c = s + 1; c < n && e.src.charCodeAt(c) === 96; ) c++;
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
var vt = _((o0, gt) => {
  "use strict";
  gt.exports.tokenize = function (e, i) {
    var t,
      n,
      r,
      o,
      s,
      c = e.pos,
      p = e.src.charCodeAt(c);
    if (
      i ||
      p !== 126 ||
      ((n = e.scanDelims(e.pos, !0)),
      (o = n.length),
      (s = String.fromCharCode(p)),
      o < 2)
    )
      return !1;
    for (
      o % 2 && ((r = e.push("text", "", 0)), (r.content = s), o--), t = 0;
      t < o;
      t += 2
    )
      (r = e.push("text", "", 0)),
        (r.content = s + s),
        e.delimiters.push({
          marker: p,
          length: 0,
          token: e.tokens.length - 1,
          end: -1,
          open: n.can_open,
          close: n.can_close,
        });
    return (e.pos += n.length), !0;
  };
  function Wc(a, e) {
    var i,
      t,
      n,
      r,
      o,
      s = [],
      c = e.length;
    for (i = 0; i < c; i++)
      (n = e[i]),
        n.marker === 126 &&
          n.end !== -1 &&
          ((r = e[n.end]),
          (o = a.tokens[n.token]),
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
        i = s.pop(), t = i + 1;
        t < a.tokens.length && a.tokens[t].type === "s_close";

      )
        t++;
      t--,
        i !== t &&
          ((o = a.tokens[t]), (a.tokens[t] = a.tokens[i]), (a.tokens[i] = o));
    }
  }
  gt.exports.postProcess = function (e) {
    var i,
      t = e.tokens_meta,
      n = e.tokens_meta.length;
    for (Wc(e, e.delimiters), i = 0; i < n; i++)
      t[i] && t[i].delimiters && Wc(e, t[i].delimiters);
  };
});
var yt = _((s0, bt) => {
  "use strict";
  bt.exports.tokenize = function (e, i) {
    var t,
      n,
      r,
      o = e.pos,
      s = e.src.charCodeAt(o);
    if (i || (s !== 95 && s !== 42)) return !1;
    for (n = e.scanDelims(e.pos, s === 42), t = 0; t < n.length; t++)
      (r = e.push("text", "", 0)),
        (r.content = String.fromCharCode(s)),
        e.delimiters.push({
          marker: s,
          length: n.length,
          token: e.tokens.length - 1,
          end: -1,
          open: n.can_open,
          close: n.can_close,
        });
    return (e.pos += n.length), !0;
  };
  function Yc(a, e) {
    var i,
      t,
      n,
      r,
      o,
      s,
      c = e.length;
    for (i = c - 1; i >= 0; i--)
      (t = e[i]),
        !(t.marker !== 95 && t.marker !== 42) &&
          t.end !== -1 &&
          ((n = e[t.end]),
          (s =
            i > 0 &&
            e[i - 1].end === t.end + 1 &&
            e[i - 1].marker === t.marker &&
            e[i - 1].token === t.token - 1 &&
            e[t.end + 1].token === n.token + 1),
          (o = String.fromCharCode(t.marker)),
          (r = a.tokens[t.token]),
          (r.type = s ? "strong_open" : "em_open"),
          (r.tag = s ? "strong" : "em"),
          (r.nesting = 1),
          (r.markup = s ? o + o : o),
          (r.content = ""),
          (r = a.tokens[n.token]),
          (r.type = s ? "strong_close" : "em_close"),
          (r.tag = s ? "strong" : "em"),
          (r.nesting = -1),
          (r.markup = s ? o + o : o),
          (r.content = ""),
          s &&
            ((a.tokens[e[i - 1].token].content = ""),
            (a.tokens[e[t.end + 1].token].content = ""),
            i--));
  }
  bt.exports.postProcess = function (e) {
    var i,
      t = e.tokens_meta,
      n = e.tokens_meta.length;
    for (Yc(e, e.delimiters), i = 0; i < n; i++)
      t[i] && t[i].delimiters && Yc(e, t[i].delimiters);
  };
});
var ip = _((c0, ep) => {
  "use strict";
  var Ph = z().normalizeReference,
    _t = z().isSpace;
  ep.exports = function (e, i) {
    var t,
      n,
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
        c < h && ((n = e.src.charCodeAt(c)), !(!_t(n) && n !== 10));
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
          c < h && ((n = e.src.charCodeAt(c)), !(!_t(n) && n !== 10));
          c++
        );
        if (
          ((p = e.md.helpers.parseLinkTitle(e.src, c, e.posMax)),
          c < h && x !== c && p.ok)
        )
          for (
            l = p.str, c = p.pos;
            c < h && ((n = e.src.charCodeAt(c)), !(!_t(n) && n !== 10));
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
        (u = e.env.references[Ph(r)]),
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
        (m.attrs = t = [["href", f]]),
        l && t.push(["title", l]),
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
var tp = _((p0, ap) => {
  "use strict";
  var Dh = z().normalizeReference,
    wt = z().isSpace;
  ap.exports = function (e, i) {
    var t,
      n,
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
        p < g && ((n = e.src.charCodeAt(p)), !(!wt(n) && n !== 10));
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
        p < g && ((n = e.src.charCodeAt(p)), !(!wt(n) && n !== 10));
        p++
      );
      if (
        ((m = e.md.helpers.parseLinkTitle(e.src, p, e.posMax)),
        p < g && h !== p && m.ok)
      )
        for (
          f = m.str, p = m.pos;
          p < g && ((n = e.src.charCodeAt(p)), !(!wt(n) && n !== 10));
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
        (u = e.env.references[Dh(o)]),
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
        (l.attrs = t =
          [
            ["src", x],
            ["alt", ""],
          ]),
        (l.children = d),
        (l.content = r),
        f && t.push(["title", f])),
      (e.pos = p),
      (e.posMax = g),
      !0
    );
  };
});
var rp = _((l0, np) => {
  "use strict";
  var Sh =
      /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    Th = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  np.exports = function (e, i) {
    var t,
      n,
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
      (t = e.src.slice(s + 1, p)),
      Th.test(t)
        ? ((n = e.md.normalizeLink(t)),
          e.md.validateLink(n)
            ? (i ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", n]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(t)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += t.length + 2),
              !0)
            : !1)
        : Sh.test(t)
        ? ((n = e.md.normalizeLink("mailto:" + t)),
          e.md.validateLink(n)
            ? (i ||
                ((r = e.push("link_open", "a", 1)),
                (r.attrs = [["href", n]]),
                (r.markup = "autolink"),
                (r.info = "auto"),
                (r = e.push("text", "", 0)),
                (r.content = e.md.normalizeLinkText(t)),
                (r = e.push("link_close", "a", -1)),
                (r.markup = "autolink"),
                (r.info = "auto")),
              (e.pos += t.length + 2),
              !0)
            : !1)
        : !1
    );
  };
});
var sp = _((u0, op) => {
  "use strict";
  var Ih = ft().HTML_TAG_RE;
  function $h(a) {
    return /^<a[>\s]/i.test(a);
  }
  function jh(a) {
    return /^<\/a\s*>/i.test(a);
  }
  function Rh(a) {
    var e = a | 32;
    return e >= 97 && e <= 122;
  }
  op.exports = function (e, i) {
    var t,
      n,
      r,
      o,
      s = e.pos;
    return !e.md.options.html ||
      ((r = e.posMax), e.src.charCodeAt(s) !== 60 || s + 2 >= r) ||
      ((t = e.src.charCodeAt(s + 1)),
      t !== 33 && t !== 63 && t !== 47 && !Rh(t)) ||
      ((n = e.src.slice(s).match(Ih)), !n)
      ? !1
      : (i ||
          ((o = e.push("html_inline", "", 0)),
          (o.content = e.src.slice(s, s + n[0].length)),
          $h(o.content) && e.linkLevel++,
          jh(o.content) && e.linkLevel--),
        (e.pos += n[0].length),
        !0);
  };
});
var up = _((d0, lp) => {
  "use strict";
  var cp = nt(),
    qh = z().has,
    Fh = z().isValidEntityCode,
    pp = z().fromCodePoint,
    Bh = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    zh = /^&([a-z][a-z0-9]{1,31});/i;
  lp.exports = function (e, i) {
    var t,
      n,
      r,
      o,
      s = e.pos,
      c = e.posMax;
    if (e.src.charCodeAt(s) !== 38 || s + 1 >= c) return !1;
    if (((t = e.src.charCodeAt(s + 1)), t === 35)) {
      if (((r = e.src.slice(s).match(Bh)), r))
        return (
          i ||
            ((n =
              r[1][0].toLowerCase() === "x"
                ? parseInt(r[1].slice(1), 16)
                : parseInt(r[1], 10)),
            (o = e.push("text_special", "", 0)),
            (o.content = Fh(n) ? pp(n) : pp(65533)),
            (o.markup = r[0]),
            (o.info = "entity")),
          (e.pos += r[0].length),
          !0
        );
    } else if (((r = e.src.slice(s).match(zh)), r && qh(cp, r[1])))
      return (
        i ||
          ((o = e.push("text_special", "", 0)),
          (o.content = cp[r[1]]),
          (o.markup = r[0]),
          (o.info = "entity")),
        (e.pos += r[0].length),
        !0
      );
    return !1;
  };
});
var fp = _((m0, mp) => {
  "use strict";
  function dp(a, e) {
    var i,
      t,
      n,
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
          ((n = e[i]),
          d.push(0),
          (e[f].marker !== n.marker || l !== n.token - 1) && (f = i),
          (l = n.token),
          (n.length = n.length || 0),
          !!n.close)
        ) {
          for (
            u.hasOwnProperty(n.marker) ||
              (u[n.marker] = [-1, -1, -1, -1, -1, -1]),
              o = u[n.marker][(n.open ? 3 : 0) + (n.length % 3)],
              t = f - d[f] - 1,
              s = t;
            t > o;
            t -= d[t] + 1
          )
            if (
              ((r = e[t]),
              r.marker === n.marker &&
                r.open &&
                r.end < 0 &&
                ((c = !1),
                (r.close || n.open) &&
                  (r.length + n.length) % 3 === 0 &&
                  (r.length % 3 !== 0 || n.length % 3 !== 0) &&
                  (c = !0),
                !c))
            ) {
              (p = t > 0 && !e[t - 1].open ? d[t - 1] + 1 : 0),
                (d[i] = i - t + p),
                (d[t] = p),
                (n.open = !1),
                (r.end = i),
                (r.close = !1),
                (s = -1),
                (l = -2);
              break;
            }
          s !== -1 &&
            (u[n.marker][(n.open ? 3 : 0) + ((n.length || 0) % 3)] = s);
        }
    }
  }
  mp.exports = function (e) {
    var i,
      t = e.tokens_meta,
      n = e.tokens_meta.length;
    for (dp(e, e.delimiters), i = 0; i < n; i++)
      t[i] && t[i].delimiters && dp(e, t[i].delimiters);
  };
});
var xp = _((f0, hp) => {
  "use strict";
  hp.exports = function (e) {
    var i,
      t,
      n = 0,
      r = e.tokens,
      o = e.tokens.length;
    for (i = t = 0; i < o; i++)
      r[i].nesting < 0 && n--,
        (r[i].level = n),
        r[i].nesting > 0 && n++,
        r[i].type === "text" && i + 1 < o && r[i + 1].type === "text"
          ? (r[i + 1].content = r[i].content + r[i + 1].content)
          : (i !== t && (r[t] = r[i]), t++);
    i !== t && (r.length = t);
  };
});
var _p = _((h0, yp) => {
  "use strict";
  var kt = Li(),
    gp = z().isWhiteSpace,
    vp = z().isPunctChar,
    bp = z().isMdAsciiPunct;
  function ai(a, e, i, t) {
    (this.src = a),
      (this.env = i),
      (this.md = e),
      (this.tokens = t),
      (this.tokens_meta = Array(t.length)),
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
    var a = new kt("text", "", 0);
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
    var t = new kt(a, e, i),
      n = null;
    return (
      i < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
      (t.level = this.level),
      i > 0 &&
        (this.level++,
        this._prev_delimiters.push(this.delimiters),
        (this.delimiters = []),
        (n = { delimiters: this.delimiters })),
      (this.pendingLevel = this.level),
      this.tokens.push(t),
      this.tokens_meta.push(n),
      t
    );
  };
  ai.prototype.scanDelims = function (a, e) {
    var i = a,
      t,
      n,
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
      t = a > 0 ? this.src.charCodeAt(a - 1) : 32;
      i < d && this.src.charCodeAt(i) === h;

    )
      i++;
    return (
      (r = i - a),
      (n = i < d ? this.src.charCodeAt(i) : 32),
      (p = bp(t) || vp(String.fromCharCode(t))),
      (m = bp(n) || vp(String.fromCharCode(n))),
      (c = gp(t)),
      (u = gp(n)),
      u ? (f = !1) : m && (c || p || (f = !1)),
      c ? (l = !1) : p && (u || m || (l = !1)),
      e ? ((o = f), (s = l)) : ((o = f && (!l || p)), (s = l && (!f || m))),
      { can_open: o, can_close: s, length: r }
    );
  };
  ai.prototype.Token = kt;
  yp.exports = ai;
});
var Cp = _((x0, kp) => {
  "use strict";
  var wp = Bi(),
    Ct = [
      ["text", Nc()],
      ["linkify", Gc()],
      ["newline", Vc()],
      ["escape", Zc()],
      ["backticks", Kc()],
      ["strikethrough", vt().tokenize],
      ["emphasis", yt().tokenize],
      ["link", ip()],
      ["image", tp()],
      ["autolink", rp()],
      ["html_inline", sp()],
      ["entity", up()],
    ],
    Et = [
      ["balance_pairs", fp()],
      ["strikethrough", vt().postProcess],
      ["emphasis", yt().postProcess],
      ["fragments_join", xp()],
    ];
  function ti() {
    var a;
    for (this.ruler = new wp(), a = 0; a < Ct.length; a++)
      this.ruler.push(Ct[a][0], Ct[a][1]);
    for (this.ruler2 = new wp(), a = 0; a < Et.length; a++)
      this.ruler2.push(Et[a][0], Et[a][1]);
  }
  ti.prototype.skipToken = function (a) {
    var e,
      i,
      t = a.pos,
      n = this.ruler.getRules(""),
      r = n.length,
      o = a.md.options.maxNesting,
      s = a.cache;
    if (typeof s[t] < "u") {
      a.pos = s[t];
      return;
    }
    if (a.level < o)
      for (i = 0; i < r && (a.level++, (e = n[i](a, !0)), a.level--, !e); i++);
    else a.pos = a.posMax;
    e || a.pos++, (s[t] = a.pos);
  };
  ti.prototype.tokenize = function (a) {
    for (
      var e,
        i,
        t = this.ruler.getRules(""),
        n = t.length,
        r = a.posMax,
        o = a.md.options.maxNesting;
      a.pos < r;

    ) {
      if (a.level < o) for (i = 0; i < n && ((e = t[i](a, !1)), !e); i++);
      if (e) {
        if (a.pos >= r) break;
        continue;
      }
      a.pending += a.src[a.pos++];
    }
    a.pending && a.pushPending();
  };
  ti.prototype.parse = function (a, e, i, t) {
    var n,
      r,
      o,
      s = new this.State(a, e, i, t);
    for (
      this.tokenize(s), r = this.ruler2.getRules(""), o = r.length, n = 0;
      n < o;
      n++
    )
      r[n](s);
  };
  ti.prototype.State = _p();
  kp.exports = ti;
});
var Ap = _((g0, Ep) => {
  "use strict";
  Ep.exports = function (a) {
    var e = {};
    (a = a || {}),
      (e.src_Any = ot().source),
      (e.src_Cc = st().source),
      (e.src_Z = ct().source),
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
var Ip = _((v0, Tp) => {
  "use strict";
  function At(a) {
    var e = Array.prototype.slice.call(arguments, 1);
    return (
      e.forEach(function (i) {
        !i ||
          Object.keys(i).forEach(function (t) {
            a[t] = i[t];
          });
      }),
      a
    );
  }
  function Gi(a) {
    return Object.prototype.toString.call(a);
  }
  function Lh(a) {
    return Gi(a) === "[object String]";
  }
  function Hh(a) {
    return Gi(a) === "[object Object]";
  }
  function Oh(a) {
    return Gi(a) === "[object RegExp]";
  }
  function Pp(a) {
    return Gi(a) === "[object Function]";
  }
  function Mh(a) {
    return a.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var Sp = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
  function Nh(a) {
    return Object.keys(a || {}).reduce(function (e, i) {
      return e || Sp.hasOwnProperty(i);
    }, !1);
  }
  var Uh = {
      "http:": {
        validate: function (a, e, i) {
          var t = a.slice(e);
          return (
            i.re.http ||
              (i.re.http = new RegExp(
                "^\\/\\/" +
                  i.re.src_auth +
                  i.re.src_host_port_strict +
                  i.re.src_path,
                "i"
              )),
            i.re.http.test(t) ? t.match(i.re.http)[0].length : 0
          );
        },
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (a, e, i) {
          var t = a.slice(e);
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
            i.re.no_http.test(t)
              ? (e >= 3 && a[e - 3] === ":") || (e >= 3 && a[e - 3] === "/")
                ? 0
                : t.match(i.re.no_http)[0].length
              : 0
          );
        },
      },
      "mailto:": {
        validate: function (a, e, i) {
          var t = a.slice(e);
          return (
            i.re.mailto ||
              (i.re.mailto = new RegExp(
                "^" + i.re.src_email_name + "@" + i.re.src_host_strict,
                "i"
              )),
            i.re.mailto.test(t) ? t.match(i.re.mailto)[0].length : 0
          );
        },
      },
    },
    Gh =
      "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    Xh =
      "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split(
        "|"
      );
  function Vh(a) {
    (a.__index__ = -1), (a.__text_cache__ = "");
  }
  function Jh(a) {
    return function (e, i) {
      var t = e.slice(i);
      return a.test(t) ? t.match(a)[0].length : 0;
    };
  }
  function Dp() {
    return function (a, e) {
      e.normalize(a);
    };
  }
  function Ui(a) {
    var e = (a.re = Ap()(a.__opts__)),
      i = a.__tlds__.slice();
    a.onCompile(),
      a.__tlds_replaced__ || i.push(Gh),
      i.push(e.src_xn),
      (e.src_tlds = i.join("|"));
    function t(s) {
      return s.replace("%TLDS%", e.src_tlds);
    }
    (e.email_fuzzy = RegExp(t(e.tpl_email_fuzzy), "i")),
      (e.link_fuzzy = RegExp(t(e.tpl_link_fuzzy), "i")),
      (e.link_no_ip_fuzzy = RegExp(t(e.tpl_link_no_ip_fuzzy), "i")),
      (e.host_fuzzy_test = RegExp(t(e.tpl_host_fuzzy_test), "i"));
    var n = [];
    a.__compiled__ = {};
    function r(s, c) {
      throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + c);
    }
    Object.keys(a.__schemas__).forEach(function (s) {
      var c = a.__schemas__[s];
      if (c !== null) {
        var p = { validate: null, link: null };
        if (((a.__compiled__[s] = p), Hh(c))) {
          Oh(c.validate)
            ? (p.validate = Jh(c.validate))
            : Pp(c.validate)
            ? (p.validate = c.validate)
            : r(s, c),
            Pp(c.normalize)
              ? (p.normalize = c.normalize)
              : c.normalize
              ? r(s, c)
              : (p.normalize = Dp());
          return;
        }
        if (Lh(c)) {
          n.push(s);
          return;
        }
        r(s, c);
      }
    }),
      n.forEach(function (s) {
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
      .map(Mh)
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
      Vh(a);
  }
  function Zh(a, e) {
    var i = a.__index__,
      t = a.__last_index__,
      n = a.__text_cache__.slice(i, t);
    (this.schema = a.__schema__.toLowerCase()),
      (this.index = i + e),
      (this.lastIndex = t + e),
      (this.raw = n),
      (this.text = n),
      (this.url = n);
  }
  function Pt(a, e) {
    var i = new Zh(a, e);
    return a.__compiled__[i.schema].normalize(i, a), i;
  }
  function ee(a, e) {
    if (!(this instanceof ee)) return new ee(a, e);
    e || (Nh(a) && ((e = a), (a = {}))),
      (this.__opts__ = At({}, Sp, e)),
      (this.__index__ = -1),
      (this.__last_index__ = -1),
      (this.__schema__ = ""),
      (this.__text_cache__ = ""),
      (this.__schemas__ = At({}, Uh, a)),
      (this.__compiled__ = {}),
      (this.__tlds__ = Xh),
      (this.__tlds_replaced__ = !1),
      (this.re = {}),
      Ui(this);
  }
  ee.prototype.add = function (e, i) {
    return (this.__schemas__[e] = i), Ui(this), this;
  };
  ee.prototype.set = function (e) {
    return (this.__opts__ = At(this.__opts__, e)), this;
  };
  ee.prototype.test = function (e) {
    if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
      return !1;
    var i, t, n, r, o, s, c, p, u;
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
          (t = e.match(
            this.__opts__.fuzzyIP
              ? this.re.link_fuzzy
              : this.re.link_no_ip_fuzzy
          )) !== null &&
          ((o = t.index + t[1].length),
          (this.__index__ < 0 || o < this.__index__) &&
            ((this.__schema__ = ""),
            (this.__index__ = o),
            (this.__last_index__ = t.index + t[0].length)))),
      this.__opts__.fuzzyEmail &&
        this.__compiled__["mailto:"] &&
        ((u = e.indexOf("@")),
        u >= 0 &&
          (n = e.match(this.re.email_fuzzy)) !== null &&
          ((o = n.index + n[1].length),
          (s = n.index + n[0].length),
          (this.__index__ < 0 ||
            o < this.__index__ ||
            (o === this.__index__ && s > this.__last_index__)) &&
            ((this.__schema__ = "mailto:"),
            (this.__index__ = o),
            (this.__last_index__ = s)))),
      this.__index__ >= 0
    );
  };
  ee.prototype.pretest = function (e) {
    return this.re.pretest.test(e);
  };
  ee.prototype.testSchemaAt = function (e, i, t) {
    return this.__compiled__[i.toLowerCase()]
      ? this.__compiled__[i.toLowerCase()].validate(e, t, this)
      : 0;
  };
  ee.prototype.match = function (e) {
    var i = 0,
      t = [];
    this.__index__ >= 0 &&
      this.__text_cache__ === e &&
      (t.push(Pt(this, i)), (i = this.__last_index__));
    for (var n = i ? e.slice(i) : e; this.test(n); )
      t.push(Pt(this, i)),
        (n = n.slice(this.__last_index__)),
        (i += this.__last_index__);
    return t.length ? t : null;
  };
  ee.prototype.matchAtStart = function (e) {
    if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
      return null;
    var i = this.re.schema_at_start.exec(e);
    if (!i) return null;
    var t = this.testSchemaAt(e, i[2], i[0].length);
    return t
      ? ((this.__schema__ = i[2]),
        (this.__index__ = i.index + i[1].length),
        (this.__last_index__ = i.index + i[0].length + t),
        Pt(this, 0))
      : null;
  };
  ee.prototype.tlds = function (e, i) {
    return (
      (e = Array.isArray(e) ? e : [e]),
      i
        ? ((this.__tlds__ = this.__tlds__
            .concat(e)
            .sort()
            .filter(function (t, n, r) {
              return t !== r[n - 1];
            })
            .reverse()),
          Ui(this),
          this)
        : ((this.__tlds__ = e.slice()),
          (this.__tlds_replaced__ = !0),
          Ui(this),
          this)
    );
  };
  ee.prototype.normalize = function (e) {
    e.schema || (e.url = "http://" + e.url),
      e.schema === "mailto:" &&
        !/^mailto:/i.test(e.url) &&
        (e.url = "mailto:" + e.url);
  };
  ee.prototype.onCompile = function () {};
  Tp.exports = ee;
});
var jp = _((b0, $p) => {
  "use strict";
  $p.exports = {
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
var qp = _((y0, Rp) => {
  "use strict";
  Rp.exports = {
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
var Bp = _((_0, Fp) => {
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
var Op = _((w0, Hp) => {
  "use strict";
  var ni = z(),
    Qh = Ss(),
    Kh = Is(),
    Wh = nc(),
    Yh = Oc(),
    ex = Cp(),
    ix = Ip(),
    Pe = rt(),
    zp = require("punycode"),
    ax = { default: jp(), zero: qp(), commonmark: Bp() },
    tx = /^(vbscript|javascript|file|data):/,
    nx = /^data:image\/(gif|png|jpeg|webp);/;
  function rx(a) {
    var e = a.trim().toLowerCase();
    return tx.test(e) ? !!nx.test(e) : !0;
  }
  var Lp = ["http:", "https:", "mailto:"];
  function ox(a) {
    var e = Pe.parse(a, !0);
    if (e.hostname && (!e.protocol || Lp.indexOf(e.protocol) >= 0))
      try {
        e.hostname = zp.toASCII(e.hostname);
      } catch {}
    return Pe.encode(Pe.format(e));
  }
  function sx(a) {
    var e = Pe.parse(a, !0);
    if (e.hostname && (!e.protocol || Lp.indexOf(e.protocol) >= 0))
      try {
        e.hostname = zp.toUnicode(e.hostname);
      } catch {}
    return Pe.decode(Pe.format(e), Pe.decode.defaultChars + "%");
  }
  function ae(a, e) {
    if (!(this instanceof ae)) return new ae(a, e);
    e || ni.isString(a) || ((e = a || {}), (a = "default")),
      (this.inline = new ex()),
      (this.block = new Yh()),
      (this.core = new Wh()),
      (this.renderer = new Kh()),
      (this.linkify = new ix()),
      (this.validateLink = rx),
      (this.normalizeLink = ox),
      (this.normalizeLinkText = sx),
      (this.utils = ni),
      (this.helpers = ni.assign({}, Qh)),
      (this.options = {}),
      this.configure(a),
      e && this.set(e);
  }
  ae.prototype.set = function (a) {
    return ni.assign(this.options, a), this;
  };
  ae.prototype.configure = function (a) {
    var e = this,
      i;
    if (ni.isString(a) && ((i = a), (a = ax[i]), !a))
      throw new Error('Wrong `markdown-it` preset "' + i + '", check name');
    if (!a) throw new Error("Wrong `markdown-it` preset, can't be empty");
    return (
      a.options && e.set(a.options),
      a.components &&
        Object.keys(a.components).forEach(function (t) {
          a.components[t].rules && e[t].ruler.enableOnly(a.components[t].rules),
            a.components[t].rules2 &&
              e[t].ruler2.enableOnly(a.components[t].rules2);
        }),
      this
    );
  };
  ae.prototype.enable = function (a, e) {
    var i = [];
    Array.isArray(a) || (a = [a]),
      ["core", "block", "inline"].forEach(function (n) {
        i = i.concat(this[n].ruler.enable(a, !0));
      }, this),
      (i = i.concat(this.inline.ruler2.enable(a, !0)));
    var t = a.filter(function (n) {
      return i.indexOf(n) < 0;
    });
    if (t.length && !e)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + t);
    return this;
  };
  ae.prototype.disable = function (a, e) {
    var i = [];
    Array.isArray(a) || (a = [a]),
      ["core", "block", "inline"].forEach(function (n) {
        i = i.concat(this[n].ruler.disable(a, !0));
      }, this),
      (i = i.concat(this.inline.ruler2.disable(a, !0)));
    var t = a.filter(function (n) {
      return i.indexOf(n) < 0;
    });
    if (t.length && !e)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + t);
    return this;
  };
  ae.prototype.use = function (a) {
    var e = [this].concat(Array.prototype.slice.call(arguments, 1));
    return a.apply(a, e), this;
  };
  ae.prototype.parse = function (a, e) {
    if (typeof a != "string") throw new Error("Input data should be a String");
    var i = new this.core.State(a, this, e);
    return this.core.process(i), i.tokens;
  };
  ae.prototype.render = function (a, e) {
    return (
      (e = e || {}), this.renderer.render(this.parse(a, e), this.options, e)
    );
  };
  ae.prototype.parseInline = function (a, e) {
    var i = new this.core.State(a, this, e);
    return (i.inlineMode = !0), this.core.process(i), i.tokens;
  };
  ae.prototype.renderInline = function (a, e) {
    return (
      (e = e || {}),
      this.renderer.render(this.parseInline(a, e), this.options, e)
    );
  };
  Hp.exports = ae;
});
var Np = _((k0, Mp) => {
  "use strict";
  Mp.exports = Op();
});
var Zp = _((E0, Jp) => {
  Jp.exports = function (e, i) {
    var t = /https?:\/\/[^\s/$.?#()].[^\s()]*/i,
      n = {
        BLOCKQUOTE_OPEN: "blockquote_open",
        BLOCKQUOTE_CLOSE: "blockquote_close",
      },
      r = {
        classNameContainer: "c-blockquote",
        classNameAttribution: "c-blockquote__attribution",
        marker: "\u2014",
        removeMarker: !0,
      },
      o = e.utils.assign;
    i = o({}, r, i);
    function s(w) {
      return typeof w == "number" && isFinite(w) && Math.floor(w) === w;
    }
    function c(w) {
      return !w || w.length === 0 || w.trim().length === 0;
    }
    function p(w, b) {
      return Object.prototype.hasOwnProperty.call(w, b);
    }
    function u(w) {
      var b = w.match(t);
      return b !== null ? b.shift() : null;
    }
    function m(w, b) {
      return w.slice(0, b.length) === b;
    }
    function f(w) {
      return w.replace(/^\s+/, "");
    }
    function l(w) {
      return w.replace(/\s+$/, "");
    }
    function d(w, b, C) {
      for (var S = 0, L = b.length; S < L; S++) w.splice(C + S, 0, b[S]);
    }
    function h(w, b, C) {
      (b = s(b) ? b : 0), (C = s(C) ? C : w.length - 1);
      var S = C - b,
        L = w.splice(b, S);
      return L.length;
    }
    function x(w, b) {
      for (var C in b) if (p(b, C) && b[C] !== w[C]) return !1;
      return !0;
    }
    function v(w, b, C) {
      C = s(C) ? C : 0;
      for (var S = C, L = w.length; S < L; S++) if (x(w[S], b)) return S;
      return -1;
    }
    function g(w, b) {
      if (m(w, b)) return 0;
      var C = b.length,
        S = w.indexOf(
          `
` + b,
          C + 1
        );
      return S > C ? S + 1 : -1;
    }
    function y(w, b, C, S, L) {
      (C = s(C) ? C : 0), (S = s(S) ? S : 0), (L = s(L) ? L : w.length);
      for (var j = S; j < L; j++) {
        var A = w[j],
          E = A.content;
        if (!(A.type !== "inline" || A.level !== C + 2 || E.length === 0)) {
          var k = g(E, b);
          if (k !== -1) return j;
        }
      }
      return -1;
    }
    function D(w) {
      for (var b = w.tokens, C = 0, S = b.length; C < S; C++) {
        var L = v(b, { type: n.BLOCKQUOTE_OPEN }, C);
        if (L !== -1) {
          var j = b[L].level,
            A = v(b, { type: n.BLOCKQUOTE_CLOSE, level: j }, L + 1);
          if (A !== -1) {
            var E = y(b, i.marker, j, L + 1, A);
            if (E !== -1) {
              for (var k = L; k <= A; k++) b[k].level++;
              var I = b[E],
                P = I.content,
                T = g(P, i.marker),
                $ = T > 0 ? l(P.slice(0, T)) : null,
                B = T > 0 ? P.slice(T) : P;
              (I.content = $), c($) && (A -= h(b, E - 1, E + 2));
              var M = b[L],
                O = u(B);
              c(O) || M.attrSet("cite", O);
              var N = new w.Token(
                "blockquote_attribution_open",
                "figcaption",
                1
              );
              (N.block = !0), (N.level = j + 1);
              var K = new w.Token("inline", "", 0);
              (K.children = []),
                (K.level = j + 2),
                (K.content = i.removeMarker ? f(B.slice(i.marker.length)) : B);
              var W = new w.Token(
                "blockquote_attribution_close",
                "figcaption",
                -1
              );
              (W.block = !0),
                (W.level = j + 1),
                c(i.classNameAttribution) ||
                  N.attrSet("class", i.classNameAttribution),
                d(b, [N, K, W], A + 1);
              var re = new w.Token("blockquote_container_open", "figure", 1);
              (re.block = !0), (re.level = j);
              var ue = new w.Token("blockquote_container_close", "figure", -1);
              (ue.block = !0),
                (ue.level = j),
                c(i.classNameContainer) ||
                  re.attrSet("class", i.classNameContainer),
                d(b, [ue], A + 4),
                d(b, [re], L),
                (C = A + 5),
                (S = S + 4);
            }
          }
        }
      }
    }
    e.core.ruler.after("block", "attribution", D);
  };
});
var Qi = X(bn());
var $e = require("http"),
  zr = X(require("path"), 1);
function yn(a) {
  let e = Zl(a.headers["x-forwarded-for"] || "");
  return [a.connection.remoteAddress].concat(e);
}
function Zl(a) {
  let e = a.length,
    i = [],
    t = a.length;
  for (let n = a.length - 1; n >= 0; n--)
    switch (a.charCodeAt(n)) {
      case 32:
        t === e && (t = e = n);
        break;
      case 44:
        t !== e && i.push(a.substring(t, e)), (t = e = n);
        break;
      default:
        t = n;
        break;
    }
  return t !== e && i.push(a.substring(t, e)), i;
}
var aa = X(wn(), 1),
  Ql = /^[0-9]+$/,
  si = aa.default.isValid,
  ci = aa.default.parse,
  kn = {
    linklocal: ["169.254.0.0/16", "fe80::/10"],
    loopback: ["127.0.0.1/8", "::1/128"],
    uniquelocal: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "fc00::/7"],
  };
function ta(a, e) {
  let i = yn(a);
  if (!e) return i;
  typeof e != "function" && (e = pi(e));
  for (let t = 0; t < i.length - 1; t++) e(i[t], t) || (i.length = t + 1);
  return i;
}
function pi(a) {
  let e;
  if (typeof a == "string") e = [a];
  else if (Array.isArray(a)) e = a.slice();
  else throw new TypeError("unsupported trust argument");
  for (let i = 0; i < e.length; i++)
    (a = e[i]),
      Object.prototype.hasOwnProperty.call(kn, a) &&
        ((a = kn[a]), e.splice.apply(e, [i, 1].concat(a)), (i += a.length - 1));
  return Wl(Kl(e));
}
function Kl(a) {
  let e = new Array(a.length);
  for (let i = 0; i < a.length; i++) e[i] = Yl(a[i]);
  return e;
}
function Wl(a) {
  let e = a.length;
  return e === 0 ? iu : e === 1 ? tu(a[0]) : au(a);
}
function Yl(a) {
  let e = a.lastIndexOf("/"),
    i = e !== -1 ? a.substring(0, e) : a;
  if (!si(i)) throw new TypeError("invalid IP address: " + i);
  let t = ci(i);
  e === -1 &&
    t.kind() === "ipv6" &&
    ((t = t), t.isIPv4MappedAddress() && (t = t.toIPv4Address()));
  let n = t.kind() === "ipv6" ? 128 : 32,
    r = e !== -1 ? a.substring(e + 1, a.length) : null;
  if (
    (r === null
      ? (r = n)
      : Ql.test(r)
      ? (r = parseInt(r, 10))
      : t.kind() === "ipv4" && si(r)
      ? (r = eu(r))
      : (r = null),
    r <= 0 || r > n)
  )
    throw new TypeError("invalid range on address: " + a);
  return [t, r];
}
function eu(a) {
  let e = ci(a);
  return e.kind() === "ipv4" ? e.prefixLengthFromSubnetMask() : null;
}
function Cn(a, e) {
  let i = ta(a, e);
  return i[i.length - 1];
}
var iu = () => !1;
function au(a) {
  return function (i) {
    if (!si(i)) return !1;
    let t = ci(i),
      n,
      r = t.kind();
    for (let o = 0; o < a.length; o++) {
      let s = a[o],
        c = s[0],
        p = c.kind(),
        u = s[1],
        m = t;
      if (r !== p) {
        if (p === "ipv4" && !t.isIPv4MappedAddress()) continue;
        n || (n = p === "ipv4" ? t.toIPv4Address() : t.toIPv4MappedAddress()),
          (m = n);
      }
      if (m.match(c, u)) return !0;
    }
    return !1;
  };
}
function tu(a) {
  let e = a[0],
    i = e.kind(),
    t = i === "ipv4",
    n = a[1];
  return function (o) {
    if (!si(o)) return !1;
    let s = ci(o);
    if (s.kind() !== i) {
      if (t && !s.isIPv4MappedAddress()) return !1;
      s = t ? s.toIPv4Address() : s.toIPv4MappedAddress();
    }
    return s.match(e, n);
  };
}
var Lr = require("net");
var En = -3,
  nu = -2,
  ru = -1;
function ou(a) {
  let e = a.map(su).sort(lu),
    i = 0;
  for (let n = 1; n < e.length; n++) {
    let r = e[n],
      o = e[i];
    r.start > o.end + 1
      ? (e[++i] = r)
      : r.end > o.end &&
        ((o.end = r.end), (o.index = Math.min(o.index, r.index)));
  }
  e.length = i + 1;
  let t = [...e].sort(pu).map(cu);
  return (t.type = a.type), t;
}
function su(a, e) {
  return { end: a.end, index: e, start: a.start };
}
function cu(a) {
  return { end: a.end, start: a.start };
}
function pu(a, e) {
  return a.index - e.index;
}
function lu(a, e) {
  return a.start - e.start;
}
var uu = class extends Array {
  constructor() {
    super(...arguments), (this.type = "");
  }
  toArray() {
    let a = Array.from(this);
    return (a.type = this.type), a;
  }
};
function du(a, e) {
  let i = new uu();
  for (let t of a) {
    let n = t.split("-"),
      r = Number.parseInt(n[0], 10),
      o = Number.parseInt(n[1], 10);
    Number.isNaN(r)
      ? ((r = e - o), (o = e - 1))
      : Number.isNaN(o) && (o = e - 1),
      o > e - 1 && (o = e - 1),
      !(Number.isNaN(r) || Number.isNaN(o) || r > o || r < 0) &&
        i.push({ end: o, start: r });
  }
  return i;
}
function An(a, e, i) {
  let t = !0;
  if (
    (i && "throwError" in i && i.throwError === !1 && (t = !1),
    !Number.isInteger(a))
  ) {
    if (t) throw new TypeError("Argument 'size' must be an integer.");
    return En;
  }
  if (typeof e != "string") {
    if (t) throw new TypeError("Argument 'header' must be a string.");
    return En;
  }
  let n = e.indexOf("=");
  if (n === -1) return nu;
  let r = e.slice(n + 1).split(","),
    o = du(r, a);
  return o.length < 1
    ? ru
    : ((o.type = e.slice(0, n)), i && i.combine ? ou(o) : o);
}
var mu = /(?:^|,)\s*?no-cache\s*?(?:,|$)/,
  Pn = Date.parse,
  Dn = (a, e) => e === a || e === `W/${a}` || `W/${e}` === a;
function fu(a, e) {
  let i = 0,
    t = 0;
  for (let n = 0, r = e.length; n < r; n++)
    switch (e.charCodeAt(n)) {
      case 32:
        i === t && (i = t = n + 1);
        break;
      case 44:
        if (Dn(a, e.substring(i, t))) return !1;
        i = t = n + 1;
        break;
      default:
        t = n + 1;
        break;
    }
  return !Dn(a, e.substring(i, t));
}
function Sn(a, e) {
  let i = a["if-modified-since"],
    t = a["if-none-match"];
  if (!i && !t) return !1;
  let n = a["cache-control"];
  if (n && mu.test(n)) return !1;
  if (t && t !== "*") {
    let r = e.etag;
    if (!r || fu(r, t)) return !1;
  }
  if (i) {
    let r = e["last-modified"];
    if (!r || !(Pn(r) <= Pn(i))) return !1;
  }
  return !0;
}
var Oe = X($n(), 1),
  jn = require("path"),
  xu = /^\s*([^;\s]*)(?:;|\s|$)/,
  gu = /^text\//i;
function vu(a, e) {
  let i = ["nginx", "apache", void 0, "iana"];
  Object.keys(Oe.default).forEach((t) => {
    let n = Oe.default[t],
      r = n.extensions;
    if (!(!r || !r.length)) {
      a[t] = r;
      for (let o of r) {
        if (e[o]) {
          let s = i.indexOf(Oe.default[e[o]].source),
            c = i.indexOf(n.source);
          if (
            e[o] !== "application/octet-stream" &&
            (s > c || (s === c && e[o].substr(0, 12) === "application/"))
          )
            continue;
        }
        e[o] = t;
      }
    }
  });
}
var bu = Object.create(null),
  Rn = Object.create(null);
vu(bu, Rn);
function na(a) {
  if (!a || typeof a != "string") return !1;
  let e = xu.exec(a),
    i = e && Oe.default[e[1].toLowerCase()];
  return i && i.charset ? i.charset : e && gu.test(e[1]) ? "UTF-8" : !1;
}
function qn(a) {
  if (!a || typeof a != "string") return !1;
  let e = a.indexOf("/") === -1 ? ye(a) : a;
  if (!e) return !1;
  if (e.indexOf("charset") === -1) {
    let i = na(e);
    i && (e += "; charset=" + i.toLowerCase());
  }
  return e;
}
function ye(a) {
  if (!a || typeof a != "string") return !1;
  let e = (0, jn.extname)("x." + a)
    .toLowerCase()
    .substr(1);
  return (e && Rn[e]) || !1;
}
var li = require("http"),
  Fn =
    /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
  _u = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
  Bn = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
  wu = /\\([\u000b\u0020-\u00ff])/g,
  ku = /([\\"])/g,
  zn = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function Cu(a) {
  let e = String(a);
  if (Bn.test(e)) return e;
  if (e.length > 0 && !_u.test(e))
    throw new TypeError("invalid parameter value");
  return '"' + e.replace(ku, "\\$1") + '"';
}
function Eu(a) {
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
var Au = class {
  constructor(a) {
    (this.parameters = {}), (this.type = a);
  }
};
function ra(a) {
  if (!a || typeof a != "object")
    throw new TypeError("argument obj is required");
  let { parameters: e, type: i } = a;
  if (!i || !zn.test(i)) throw new TypeError("invalid type");
  let t = i;
  if (e && typeof e == "object") {
    let n = Object.keys(e).sort();
    for (let r of n) {
      if (!Bn.test(r)) throw new TypeError("invalid parameter name");
      t += "; " + r + "=" + Cu(e[r]);
    }
  }
  return t;
}
function oa(a) {
  if (!a) throw new TypeError("argument string is required");
  let e = typeof a == "object" ? Eu(a) : a;
  if (typeof e != "string")
    throw new TypeError("argument string is required to be a string");
  let i = e.indexOf(";"),
    t = i != -1 ? e.substr(0, i).trim() : e.trim();
  if (!zn.test(t)) throw new TypeError("invalid media type");
  let n = new Au(t.toLowerCase());
  if (i != -1) {
    let r, o, s;
    for (Fn.lastIndex = i; (o = Fn.exec(e)); ) {
      if (o.index !== i) throw new TypeError("invalid parameter format");
      (i += o[0].length),
        (r = o[1].toLowerCase()),
        (s = o[2]),
        s[0] == '"' && (s = s.substr(1, s.length - 2).replace(wu, "$1")),
        (n.parameters[r] = s);
    }
    if (i != e.length) throw new TypeError("invalid parameter format");
  }
  return n;
}
var or = X(rr(), 1);
var ad = (a) => (a.indexOf("/") == -1 ? ye(a) : a),
  td = (a) => typeof a == "string",
  _e = class {
    constructor(e) {
      (this.headers = e.headers), (this.negotiator = new or.default(e));
    }
    types(e, ...i) {
      let t = [];
      if (
        (e && !Array.isArray(e) ? (t = [e, ...i]) : e && (t = [...e, ...i]),
        !t || t.length == 0)
      )
        return this.negotiator.mediaTypes();
      if (!this.headers.accept) return t[0];
      let n = t.map(ad),
        r = this.negotiator.mediaTypes(n.filter(td)),
        [o] = r;
      return o ? t[n.indexOf(o)] : !1;
    }
    get type() {
      return this.types;
    }
    encodings(e, ...i) {
      let t = e;
      return (
        t && !Array.isArray(t) && (t = [t, ...i]),
        !t || t.length == 0
          ? this.negotiator.encodings()
          : this.negotiator.encodings(t)[0] || !1
      );
    }
    get encoding() {
      return this.encodings;
    }
    charsets(e, ...i) {
      let t = e;
      return (
        t && !Array.isArray(t) && (t = [t, ...i]),
        !t || t.length == 0
          ? this.negotiator.charsets()
          : this.negotiator.charsets(t)[0] || !1
      );
    }
    get charset() {
      return this.charsets;
    }
    languages(e, ...i) {
      let t = e;
      return (
        t && !Array.isArray(t) && (t = [t, ...i]),
        !t || t.length == 0
          ? this.negotiator.languages()
          : this.negotiator.languages(t)[0] || !1
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
var sr = require("querystring"),
  da = ({ pattern: a, keys: e }, i = "/") => {
    let t = a.exec(i),
      n = {};
    if (t && typeof e != "boolean")
      for (let r = 0; r < e.length; r++)
        t[r + 1] && (n[e[r]] = decodeURIComponent(t[r + 1]));
    return n;
  },
  cr = (a) => {
    let e = a.indexOf("?");
    return e === -1 ? a.length : e;
  },
  ma = (a) => a.slice(0, cr(a)),
  pr = (a = "/") => (0, sr.parse)(a.slice(cr(a) + 1));
var ui =
    (a) =>
    (...e) =>
      new _e(a).types(e),
  lr =
    (a) =>
    (...e) =>
      new _e(a).encodings(e),
  ur =
    (a) =>
    (...e) =>
      new _e(a).charsets(e),
  dr =
    (a) =>
    (...e) =>
      new _e(a).languages(e),
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
  mr = (a) => (e, i) => {
    let t = Me(a)("Range");
    if (!!t) return An(e, t, i);
  },
  fr = (a, e) => {
    let i = a.method,
      t = e.statusCode;
    return i !== "GET" && i !== "HEAD"
      ? !1
      : (t >= 200 && t < 300) || t === 304
      ? Sn(a.headers, {
          etag: e.getHeader("ETag"),
          "last-modified": e.getHeader("Last-Modified"),
        })
      : !1;
  },
  hr = (a) => a.headers["X-Requested-With"] === "XMLHttpRequest";
var nd = [
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
  xr = ({ path: a, handler: e, fullPath: i, method: t }) => ({
    method: t,
    handler: e || a,
    path: typeof a == "string" ? a : "/",
    fullPath: typeof a == "string" ? i : a,
  }),
  we =
    (a) =>
    ({
      path: e,
      handler: i,
      method: t,
      handlers: n,
      type: r,
      fullPaths: o,
    }) => {
      let s = xr({ path: e, handler: i, method: t, type: r, fullPath: o?.[0] }),
        c = [],
        p = 1;
      n &&
        (c = n
          .flat()
          .map((u) =>
            xr({
              path: e,
              handler: u,
              method: t,
              type: r,
              fullPath: o == null ? null : o[p++],
            })
          ));
      for (let u of [s, ...c]) a.push({ ...u, type: r });
    },
  di = class {
    constructor() {
      (this.middleware = []), (this.mountpath = "/"), (this.apps = {});
      for (let e of nd) this[e.toLowerCase()] = this.add(e);
    }
    add(e) {
      return (...i) => {
        let t = i.slice(1).flat();
        return (
          we(this.middleware)({
            path: i[0],
            handler: t[0],
            handlers: t.slice(1),
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
        we(this.middleware)({
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
        we(this.middleware)({
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
        t = e.slice(1).flat();
      return (
        typeof i == "string"
          ? we(this.middleware)({
              path: i,
              handler: t[0],
              handlers: t.slice(1),
              type: "mw",
            })
          : we(this.middleware)({
              path: "/",
              handler: Array.isArray(i) ? i[0] : i,
              handlers: Array.isArray(i) ? [...i.slice(1), ...t] : t,
              type: "mw",
            }),
        this
      );
    }
  };
var gr = require("crypto"),
  fa = require("fs"),
  rd = (a) => {
    if (a.length === 0) return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
    {
      let e = (0, gr.createHash)("sha1")
          .update(a, "utf8")
          .digest("base64")
          .substring(0, 27),
        i = typeof a == "string" ? Buffer.byteLength(a, "utf8") : a.length;
      return '"' + i.toString(16) + "-" + e + '"';
    }
  },
  od = ({ mtime: a, size: e }) =>
    '"' + a.getTime().toString(16) + "-" + e.toString(16) + '"',
  ha = (a, e) => {
    if (a == null) throw new TypeError("argument entity is required");
    let i = e?.weak || a instanceof fa.Stats,
      t = a instanceof fa.Stats ? od(a) : rd(a);
    return i ? "W/" + t : t;
  };
var Se = require("fs"),
  br = require("http"),
  Te = require("path");
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
  yr = (a, e) =>
    a instanceof Se.Stats
      ? ha(a, { weak: !0 })
      : ha(Buffer.isBuffer(a) ? a : Buffer.from(a, e), { weak: !0 });
function vr(a, e) {
  let i = oa(a);
  return (i.parameters.charset = e), ra(i);
}
var ga = (a, e) => (i) => {
    let t = i;
    if (Buffer.isBuffer(i)) t = i;
    else if (typeof i == "object" && i !== null) t = JSON.stringify(i, null, 2);
    else if (typeof i == "string") {
      let o = e.getHeader("Content-Type");
      o && typeof o == "string"
        ? e.setHeader("Content-Type", vr(o, "utf-8"))
        : e.setHeader("Content-Type", vr("text/html", "utf-8"));
    }
    let n = "utf8",
      r;
    if (
      (i && !e.getHeader("etag") && (r = yr(t, n)) && e.setHeader("etag", r),
      a.fresh && (e.statusCode = 304),
      (e.statusCode === 204 || e.statusCode === 304) &&
        (e.removeHeader("Content-Type"),
        e.removeHeader("Content-Length"),
        e.removeHeader("Transfer-Encoding"),
        (t = "")),
      a.method === "HEAD")
    )
      return e.end(""), e;
    if (typeof i == "object") {
      if (i == null) return e.end(""), e;
      Buffer.isBuffer(i)
        ? (e.getHeader("Content-Type") ||
            e.setHeader("content-type", "application/octet-stream"),
          e.end(t))
        : xa(e)(t, n);
    } else typeof t != "string" && (t = t.toString()), e.end(t, n);
    return e;
  },
  _r = (a, e) => (i) => {
    let t = br.STATUS_CODES[i] || String(i);
    return (
      (e.statusCode = i), e.setHeader("Content-Type", "text/plain"), ga(a, e)(t)
    );
  },
  wr = (a) => (e) => ((a.statusCode = e), a),
  sd = (a, e) => {
    let i = e.maxAge != null && `public,max-age=${e.maxAge}`;
    i && e.immutable
      ? (i += ",immutable")
      : i && e.maxAge === 0 && (i += ",must-revalidate"),
      i && a.setHeader("Cache-Control", i);
  },
  mi =
    (a, e) =>
    (i, t = {}, n) => {
      let {
        root: r,
        headers: o = {},
        encoding: s = "utf-8",
        caching: c,
        ...p
      } = t;
      if (!(0, Te.isAbsolute)(i) && !r)
        throw new TypeError("path must be absolute");
      c && sd(e, c);
      let u = r ? (0, Te.join)(r, i) : i,
        m = (0, Se.statSync)(u);
      (o["Content-Encoding"] = s),
        (o["Last-Modified"] = m.mtime.toUTCString()),
        (o["Content-Type"] = qn((0, Te.extname)(i))),
        (o.ETag = yr(m, s));
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
      let l = (0, Se.createReadStream)(u, p);
      return n && l.on("error", (d) => n(d)).on("end", () => n()), l.pipe(e), e;
    };
var fi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function kr(a, e, i = {}) {
  if ((i.encode || (i.encode = encodeURIComponent), !fi.test(a)))
    throw new TypeError("argument name is invalid");
  let t = i.encode(e);
  if (t && !fi.test(t)) throw new TypeError("argument val is invalid");
  let n = a + "=" + t;
  if (i.maxAge != null) {
    let r = i.maxAge - 0;
    if (isNaN(r) || !isFinite(r))
      throw new TypeError("option maxAge is invalid");
    n += "; Max-Age=" + Math.floor(r);
  }
  if (i.domain) {
    if (!fi.test(i.domain)) throw new TypeError("option domain is invalid");
    n += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!fi.test(i.path)) throw new TypeError("option path is invalid");
    n += "; Path=" + i.path;
  }
  if (
    (i.expires && (n += "; Expires=" + i.expires.toUTCString()),
    i.httpOnly && (n += "; HttpOnly"),
    i.secure && (n += "; Secure"),
    i.sameSite)
  )
    switch (
      typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite
    ) {
      case !0:
      case "strict":
        n += "; SameSite=Strict";
        break;
      case "lax":
        n += "; SameSite=Lax";
        break;
      case "none":
        n += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return n;
}
var va = require("crypto"),
  Cr = (a, e) =>
    `${a}.${(0, va.createHmac)("sha256", e)
      .update(a)
      .digest("base64")
      .replace(/=+$/, "")}`;
var pd = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Er(a) {
  let e = 0,
    i = [],
    t = 0;
  for (var n = 0, r = a.length; n < r; n++)
    switch (a.charCodeAt(n)) {
      case 32:
        t === e && (t = e = n + 1);
        break;
      case 44:
        i.push(a.substring(t, e)), (t = e = n + 1);
        break;
      default:
        e = n + 1;
        break;
    }
  return i.push(a.substring(t, e)), i;
}
function ld(a, e) {
  let i = Array.isArray(e) ? e : Er(String(e));
  for (let r of i)
    if (!pd.test(r))
      throw new TypeError("field argument contains an invalid header name");
  if (a === "*") return a;
  let t = a,
    n = Er(a.toLowerCase());
  if (i.indexOf("*") !== -1 || n.indexOf("*") !== -1) return "*";
  for (let r of i) {
    let o = r.toLowerCase();
    n.indexOf(o) === -1 && (n.push(o), (t = t ? t + ", " + r : r));
  }
  return t;
}
function Ar(a, e) {
  let i = a.getHeader("Vary") || "",
    t = Array.isArray(i) ? i.join(", ") : String(i);
  (i = ld(t, e)) && a.setHeader("Vary", i);
}
var ud =
    /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g,
  dd =
    /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g,
  md = "$1\uFFFD$2",
  Pr = (a) => String(a).replace(dd, md).replace(ud, encodeURI);
var _a = require("http");
var fd = /["'&<>]/;
function Dr(a) {
  let e = fd.exec(a);
  if (!e) return a;
  let i,
    t = "",
    n = 0,
    r = 0;
  for (n = e.index; n < a.length; n++) {
    switch (a.charCodeAt(n)) {
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
    r !== n && (t += a.substring(r, n)), (r = n + 1), (t += i);
  }
  return r !== n ? t + a.substring(r, n) : t;
}
var hd = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g,
  xd = /%[0-9A-Fa-f]{2}/;
var Tr = /[^\x20-\x7e\xa0-\xff]/g;
var gd = /([\\"])/g;
var vd = /^[\x20-\x7e\x80-\xff]+$/,
  bd = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;
var yd = (a) => String(a).replace(Tr, "?"),
  ba = class {
    constructor(e, i) {
      (this.type = e), (this.parameters = i);
    }
  },
  _d = (a) => '"' + String(a).replace(gd, "\\$1") + '"',
  wd = (a) => "%" + String(a).charCodeAt(0).toString(16).toUpperCase();
function kd(a) {
  let e = String(a),
    i = encodeURIComponent(e).replace(hd, wd);
  return "UTF-8''" + i;
}
var Sr = (a) => a.slice(a.lastIndexOf("/") + 1);
function Cd({ parameters: a, type: e }) {
  if (!e || typeof e != "string" || !bd.test(e))
    throw new TypeError("invalid type");
  let i = String(e).toLowerCase();
  if (a && typeof a == "object") {
    let t = Object.keys(a).sort();
    for (let n of t) {
      let r = n.substr(-1) === "*" ? kd(a[n]) : _d(a[n]);
      i += "; " + n + "=" + r;
    }
  }
  return i;
}
function Ed(a, e) {
  if (a === void 0) return;
  let i = {};
  if ((e === void 0 && (e = !0), typeof e == "string" && Tr.test(e)))
    throw new TypeError("fallback must be ISO-8859-1 string");
  let t = Sr(a),
    n = vd.test(t),
    r = typeof e != "string" ? e && yd(t) : Sr(e),
    o = typeof r == "string" && r !== t;
  return (
    (o || !n || xd.test(t)) && (i["filename*"] = t),
    (n || o) && (i.filename = o ? r : t),
    i
  );
}
function ya(a, e = {}) {
  return Cd(new ba(e.type || "attachment", Ed(a, e.fallback)));
}
var hi = require("path"),
  Ad = /;\s*charset\s*=/,
  Ie = (a) => (e, i) => {
    if (typeof e == "string") {
      let t = Array.isArray(i) ? i.map(String) : String(i);
      if (e.toLowerCase() === "content-type") {
        if (Array.isArray(t))
          throw new TypeError("Content-Type cannot be set to an Array");
        if (!Ad.test(t)) {
          let n = na(t.split(";")[0]);
          typeof n == "string" && (t += "; charset=" + n.toLowerCase());
        }
      }
      a.setHeader(e, t);
    } else for (let t in e) Ie(a)(t, e[t]);
    return a;
  },
  wa = (a, e) => (i) => {
    let t = i;
    return (
      i === "back" && (t = Me(a)("Referrer") || "/"),
      e.setHeader("Location", Pr(t)),
      e
    );
  },
  ka = (a) => (e) => a.getHeader(e),
  Ir = (a) => (e) => {
    let i = a.getHeader("Link") || "";
    return (
      i && (i += ", "),
      a.setHeader(
        "Link",
        i +
          Object.keys(e)
            .map((t) => "<" + e[t] + '>; rel="' + t + '"')
            .join(", ")
      ),
      a
    );
  },
  Ca = (a) => (e) => (Ar(a, e), a),
  Ea = (a) => (e) => {
    let i = e.indexOf("/") === -1 ? ye(e) : e;
    return Ie(a)("Content-Type", i), a;
  },
  Aa = (a) => (e, i) => {
    let t = ka(a)(e),
      n = i;
    return (
      t &&
        typeof n != "number" &&
        typeof t != "number" &&
        (n = Array.isArray(t)
          ? t.concat(n)
          : Array.isArray(n)
          ? [t].concat(n)
          : [t, n]),
      Ie(a)(e, n),
      a
    );
  },
  Pa =
    (a, e) =>
    (i, t, n = {}) => {
      let r = a.secret,
        o = n.signed || !1;
      if (o && !r)
        throw new Error('cookieParser("secret") required for signed cookies');
      let s = typeof t == "object" ? "j:" + JSON.stringify(t) : String(t);
      return (
        o && (s = "s:" + Cr(s, r)),
        n.maxAge &&
          ((n.expires = new Date(Date.now() + n.maxAge)), (n.maxAge /= 1e3)),
        n.path == null && (n.path = "/"),
        Aa(e)("Set-Cookie", `${kr(i, String(s), n)}`),
        e
      );
    },
  $r = (a, e) => (i, t) =>
    Pa(a, e)(i, "", Object.assign({}, { expires: new Date(1), path: "/" }, t)),
  jr = (a) => (~a.indexOf("/") ? Pd(a) : { value: ye(a), params: {} });
function Pd(a, e) {
  let i = a.split(/ *; */),
    t = { value: i[0], quality: 1, params: {}, originalIndex: e };
  for (let n of i) {
    let r = n.split(/ *= */);
    r[0] === "q" ? (t.quality = parseFloat(r[1])) : (t.params[r[0]] = r[1]);
  }
  return t;
}
function Dd(a) {
  let e = [];
  for (let i of a) e.push(jr(i));
  return e;
}
var Da = (a, e, i) => (t) => {
    let n = t.default;
    n && delete t.default;
    let r = Object.keys(t),
      o = r.length > 0 ? ui(a)(...r) : !1;
    if ((Ca(e)("Accept"), o))
      e.setHeader("Content-Type", jr(o).value), t[o](a, e, i);
    else if (n) n();
    else {
      let s = new Error("Not Acceptable");
      (s.status = s.statusCode = 406),
        (s.types = Dd(r).map((c) => c.value)),
        i(s);
    }
    return e;
  },
  Rr = (a, e, i) => (t, n) => {
    let r = t;
    n = n || 302;
    let o = "";
    return (
      (r = wa(a, e)(r).getHeader("Location")),
      Da(
        a,
        e,
        i
      )({
        text: () => {
          o = _a.STATUS_CODES[n] + ". Redirecting to " + r;
        },
        html: () => {
          let s = Dr(r);
          o = `<p>${_a.STATUS_CODES[n]}. Redirecting to <a href="${s}">${s}</a></p>`;
        },
      }),
      e.setHeader("Content-Length", Buffer.byteLength(o)),
      (e.statusCode = n),
      a.method === "HEAD" ? e.end() : e.end(o),
      e
    );
  },
  qr = (a, e) => (i, t, n, r) => {
    let o = r,
      s = t,
      c = n || null;
    typeof t == "function"
      ? ((o = t), (s = null))
      : typeof n == "function" && ((o = n), (c = null));
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
    e && Ea(a)((0, hi.extname)(e)), Ie(a)("Content-Disposition", ya(e)), a
  );
function xi(a, e) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var i,
    t,
    n,
    r,
    o = [],
    s = "",
    c = a.split("/");
  for (c[0] || c.shift(); (n = c.shift()); )
    (i = n[0]),
      i === "*"
        ? (o.push("wild"), (s += "/(.*)"))
        : i === ":"
        ? ((t = n.indexOf("?", 1)),
          (r = n.indexOf(".", 1)),
          o.push(n.substring(1, ~t ? t : ~r ? r : n.length)),
          (s += !!~t && !~r ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~r && (s += (~t ? "?" : "") + "\\" + n.substring(r)))
        : (s += "/" + n);
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
      ? (i, t) => (e ? t < e : void 0)
      : typeof e == "string"
      ? pi(e.split(",").map((i) => i.trim()))
      : pi(e || []);
  },
  Sd = ({ middleware: a }, e) =>
    a.find(({ handler: i }) => typeof i == "function" && i.name === e.name),
  Td = (a) => {
    let e = a.connection.encrypted ? "https" : "http";
    if (!vi(a)) return e;
    let i = a.headers["X-Forwarded-Proto"] || e,
      t = i.indexOf(",");
    return t !== -1 ? i.substring(0, t).trim() : i.trim();
  },
  Hr = (a) => {
    let e = a.get("X-Forwarded-Host");
    if (((!e || !vi(a)) && (e = a.get("Host")), !e)) return;
    let i = e.indexOf(":", e[0] === "[" ? e.indexOf("]") + 1 : 0);
    return i !== -1 ? e.substring(0, i) : e;
  },
  Id = (a) => Cn(a, vi(a)).replace(/^.*:/, ""),
  $d = (a) => ta(a, vi(a)),
  jd = (a, e = 2) => {
    let i = Hr(a);
    return i ? ((0, Lr.isIP)(i) ? [i] : i.split(".").reverse()).slice(e) : [];
  },
  Rd = (a, e, i) => {
    !process.env.TESTING && a instanceof Error && console.error(a);
    let t = a.code in $e.STATUS_CODES ? a.code : a.status;
    typeof a == "string" || Buffer.isBuffer(a)
      ? i.writeHead(500).end(a)
      : t in $e.STATUS_CODES
      ? i.writeHead(t).end($e.STATUS_CODES[t])
      : i.writeHead(500).end(a.message);
  },
  qd = (a, e, i) => (t, n, r) => (
    i.render(
      t,
      n,
      (o, s) => {
        if (o) throw o;
        e.send(s);
      },
      r
    ),
    e
  ),
  Fd = (a) => (e, i, t) => {
    let { settings: n } = a;
    (i.get = ka(i)),
      (e.get = Me(e)),
      n?.bindAppToReqRes && ((e.app = a), (i.app = a)),
      n?.networkExtensions &&
        ((e.protocol = Td(e)),
        (e.secure = e.protocol === "https"),
        (e.connection = Object.assign(e.socket, { encrypted: e.secure })),
        (e.hostname = Hr(e)),
        (e.subdomains = jd(e, n.subdomainOffset)),
        (e.ip = Id(e)),
        (e.ips = $d(e))),
      (e.query = pr(e.url)),
      (e.range = mr(e)),
      (e.accepts = ui(e)),
      (e.acceptsCharsets = ur(e)),
      (e.acceptsEncodings = lr(e)),
      (e.acceptsLanguages = dr(e)),
      (e.xhr = hr(e)),
      (i.header = i.set = Ie(i)),
      (i.send = ga(e, i)),
      (i.json = xa(i)),
      (i.status = wr(i)),
      (i.sendStatus = _r(e, i)),
      (i.sendFile = mi(e, i)),
      (i.type = Ea(i)),
      (i.location = wa(e, i)),
      (i.links = Ir(i)),
      (i.vary = Ca(i)),
      (i.cookie = Pa(e, i)),
      (i.clearCookie = $r(e, i)),
      (i.render = qd(e, i, a)),
      (i.format = Da(e, i, t)),
      (i.redirect = Rr(e, i, t)),
      (i.attachment = Fr(i)),
      (i.download = qr(e, i)),
      (i.append = Aa(i)),
      (i.locals = i.locals || Object.create(null)),
      Object.defineProperty(e, "fresh", {
        get: fr.bind(null, e, i),
        configurable: !0,
      }),
      (e.stale = !e.fresh),
      t();
  },
  gi = (a) => (a.charCodeAt(0) === 47 ? a : "/" + a),
  Br = (a) => (a instanceof oe ? a.attach : a),
  Bd = (a) => async (e, i, t) => {
    try {
      a[Symbol.toStringTag] === "AsyncFunction" ? await a(e, i, t) : a(e, i, t);
    } catch (n) {
      t(n);
    }
  },
  oe = class extends di {
    constructor(e = {}) {
      super(),
        (this.middleware = []),
        (this.locals = {}),
        (this.engines = {}),
        (this.onError = e?.onError || Rd),
        (this.noMatchHandler =
          e?.noMatchHandler || this.onError.bind(null, { code: 404 })),
        (this.settings = e.settings || {
          xPoweredBy: !0,
          views: process.cwd(),
        }),
        (this.applyExtensions = e?.applyExtensions),
        (this.attach = (i, t) =>
          setImmediate(this.handler.bind(this, i, t, void 0), i, t));
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
    render(e, i = {}, t, n = {}) {
      (n.viewsFolder =
        n.viewsFolder || this.settings.views || `${process.cwd()}/views`),
        (n.ext = n.ext || e.slice(e.lastIndexOf(".") + 1) || "ejs"),
        (n._locals = n._locals || {}),
        (n.cache = n.cache || process.env.NODE_ENV === "production");
      let r = { ...i, ...this.locals };
      n._locals && (r = { ...r, ...n._locals }),
        e.endsWith(`.${n.ext}`) || (e = `${e}.${n.ext}`);
      let o = n.viewsFolder ? zr.default.join(n.viewsFolder, e) : e;
      return this.engines[n.ext](o, r, n.renderOptions, t), this;
    }
    use(...e) {
      var i;
      let t = e[0],
        n = e.slice(1).flat();
      typeof t == "function" || t instanceof oe
        ? n.unshift(t)
        : Array.isArray(t) && n.unshift(...t);
      let r = typeof t == "string" ? t : "/",
        o;
      for (let u of n)
        u instanceof oe &&
          ((o = xi(r, !0)),
          (u.mountpath = r),
          (this.apps[r] = u),
          (u.parent = this));
      let s = [],
        c = [],
        p = r === "/" ? "" : gi(r);
      for (let u of n)
        if (
          u instanceof oe &&
          ((i = u.middleware) === null || i === void 0 ? void 0 : i.length)
        )
          for (let m of u.middleware) s.push(p + gi(m.path)), c.push(u);
        else s.push(""), c.push(u);
      return (
        we(this.middleware)({
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
      let i = new oe();
      return this.use(e, i), i;
    }
    find(e) {
      return this.middleware.filter((i) => {
        i.regex = i.regex || xi(i.path, i.type === "mw");
        let t;
        return (
          i.fullPath && typeof i.fullPath == "string"
            ? (t = xi(i.fullPath, i.type === "mw"))
            : (t = null),
          i.regex.pattern.test(e) &&
            (i.type === "mw" && t ? t.pattern.test(e) : !0)
        );
      });
    }
    handler(e, i, t) {
      let { xPoweredBy: n } = this.settings;
      n && i.setHeader("X-Powered-By", typeof n == "string" ? n : "tinyhttp");
      let r = this.applyExtensions || Fd(this);
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
          let { path: v, handler: g, regex: y } = f,
            D = y ? da(y, o) : {};
          if (((l.params = { ...l.params, ...D }), v.includes(":"))) {
            let w = Object.values(D)[0],
              b = l.url.slice(l.url.indexOf(w) + w?.length);
            l.url = gi(b);
          } else l.url = gi(l.url.substring(v.length));
          l.path || (l.path = ma(l.url)),
            !((x = this.settings) === null || x === void 0) &&
              x.enableReqRoute &&
              (l.route = Sd(this, g)),
            await Bd(g)(l, d, h);
        },
        u = 0,
        m = () => i.writableEnded || (u < c.length && p(c[u++])(e, i, t));
      (t = t || ((f) => (f ? this.onError(f, e, i) : m()))), m();
    }
    listen(e, i, t = "0.0.0.0") {
      return (0, $e.createServer)().on("request", this.attach).listen(e, t, i);
    }
  };
var Ta = X(require("tty"), 1),
  xe = process.env,
  zd = "NO_COLOR" in xe,
  Ld = "FORCE_COLOR" in xe,
  Hd = process.platform === "win32",
  Od = Ta && Ta.isatty(1) && xe.TERM && xe.TERM !== "dumb",
  Md =
    "CI" in xe &&
    ("GITHUB_ACTIONS" in xe || "GITLAB_CI" in xe || "CIRCLECI" in xe),
  Sa = !zd && (Ld || Hd || Od || Md),
  Ia = (a, e, i, t) => (n) =>
    Sa ? a + (~(n += "").indexOf(e, 4) ? n.replace(i, t) : n) + e : n,
  F = (a, e) =>
    Ia(
      `\x1B[${a}m`,
      `\x1B[${e}m`,
      new RegExp(`\\x1b\\[${e}m`, "g"),
      `\x1B[${a}m`
    ),
  av = Object.defineProperty({}, "enabled", {
    get: () => Sa,
    set: (a) => (Sa = a),
  }),
  tv = F(0, 0),
  bi = Ia("\x1B[1m", "\x1B[22m", /\x1b\[22m/g, "\x1B[22m\x1B[1m"),
  nv = Ia("\x1B[2m", "\x1B[22m", /\x1b\[22m/g, "\x1B[22m\x1B[2m"),
  rv = F(3, 23),
  ov = F(4, 24),
  sv = F(7, 27),
  cv = F(8, 28),
  pv = F(9, 29),
  lv = F(30, 39),
  $a = F(31, 39),
  uv = F(32, 39),
  dv = F(33, 39),
  mv = F(34, 39),
  ja = F(35, 39),
  Ra = F(36, 39),
  fv = F(37, 39),
  hv = F(90, 39),
  xv = F(40, 49),
  gv = F(41, 49),
  vv = F(42, 49),
  bv = F(43, 49),
  yv = F(44, 49),
  _v = F(45, 49),
  wv = F(46, 49),
  kv = F(47, 49),
  Cv = F(90, 39),
  Ev = F(91, 39),
  Av = F(92, 39),
  Pv = F(93, 39),
  Dv = F(94, 39),
  Sv = F(95, 39),
  Tv = F(96, 39),
  Iv = F(97, 39),
  $v = F(100, 49),
  jv = F(101, 49),
  Rv = F(102, 49),
  qv = F(103, 49),
  Fv = F(104, 49),
  Bv = F(105, 49),
  zv = F(106, 49),
  Lv = F(107, 49);
var Nd = X(Mr(), 1),
  Nr = X(Ne(), 1),
  Ba = require("http"),
  yi = (a, e, i, t = {}, n, r) => {
    var o, s;
    let { method: c } = e,
      { statusCode: p } = i,
      u = e.originalUrl || e.url,
      m = (o = t.methods) !== null && o !== void 0 ? o : Ba.METHODS,
      f = (s = t.timestamp) !== null && s !== void 0 ? s : !1,
      l = t.emoji;
    m.includes(c) &&
      f &&
      a.push(
        `${(0, Nr.default)()
          .format(typeof f != "boolean" && f.format ? f.format : "HH:mm:ss")
          .toString()} - `
      ),
      t.ip && a.push(e.ip),
      l && a.push(Nd[p]),
      a.push(c),
      a.push(n || i.statusCode),
      a.push(r || i.statusMessage),
      a.push(u);
  },
  Ur = (a = {}) => {
    var e, i;
    let t = (e = a.methods) !== null && e !== void 0 ? e : Ba.METHODS,
      n =
        (i = a.output) !== null && i !== void 0
          ? i
          : { callback: console.log, color: !0 };
    return (r, o, s) => {
      o.on("finish", () => {
        let c = [];
        if (t.includes(r.method)) {
          let p = o.statusCode.toString();
          if (n.color)
            switch (p[0]) {
              case "2":
                yi(c, r, o, a, Ra(bi(p)), Ra(o.statusMessage)),
                  n.callback(c.join(" "));
                break;
              case "4":
                yi(c, r, o, a, $a(bi(p)), $a(o.statusMessage)),
                  n.callback(c.join(" "));
                break;
              case "5":
                yi(c, r, o, a, ja(bi(p)), ja(o.statusMessage)),
                  n.callback(c.join(" "));
                break;
            }
          else {
            yi(c, r, o, a);
            let u = c.join(" ");
            n.callback(u);
          }
        }
      }),
        s?.();
    };
  };
var ef = X(Jr(), 1),
  af = X(Va(), 1),
  tf = X(Ja(), 1),
  nf = X(it(), 1),
  tt = X(Xo(), 1);
var wl = require("node:path"),
  kl = require("chokidar");
var Qp = X(Np()),
  Kp = require("shiki");
var Up = new Set([!0, !1, "alt", "title"]);
function Gp(a, e) {
  return (Array.isArray(a) ? a : []).filter(([i]) => i !== e);
}
function Xp(a, e) {
  a && a.attrs && (a.attrs = Gp(a.attrs, e));
}
function cx(a, e) {
  if (!Up.has(a)) throw new TypeError(`figcaption must be one of: ${[...Up]}.`);
  if (a === "alt") return e.content;
  let i = e.attrs.find(([t]) => t === "title");
  return Array.isArray(i) && i[1] ? (Xp(e, "title"), i[1]) : void 0;
}
function px(a, e) {
  (e = e || {}),
    a.core.ruler.before("linkify", "image_figures", function (i) {
      let t = 1;
      for (let n = 1, r = i.tokens.length; n < r - 1; ++n) {
        let o = i.tokens[n];
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
          (n !== 0 && i.tokens[n - 1].type !== "paragraph_open") ||
          (n !== r - 1 && i.tokens[n + 1].type !== "paragraph_close")
        )
          continue;
        let s = i.tokens[n - 1],
          c;
        if (
          ((s.type = "figure_open"),
          (s.tag = "figure"),
          (i.tokens[n + 1].type = "figure_close"),
          (i.tokens[n + 1].tag = "figure"),
          e.dataType && i.tokens[n - 1].attrPush(["data-type", "image"]),
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
          let p = cx(e.figcaption, c);
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
          (e.tabindex && (i.tokens[n - 1].attrPush(["tabindex", t]), t++),
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
          c.attrs.push(["data-src", p[1]]), Xp(c, "src");
        }
      }
    });
}
var Vp = px;
var Wp = X(Zp()),
  Yp = async () => {
    let a = await (0, Kp.getHighlighter)({ theme: "material-palenight" });
    return new Qp.default({
      html: !0,
      highlight: (e, i, t) => {
        try {
          return a.codeToHtml(e, { lang: i });
        } catch (n) {
          return console.error(n), "";
        }
      },
    })
      .use(Vp, { dataType: !0, figcaption: !0, lazy: !0, async: !0 })
      .use(Wp.default, {
        classNameContainer: "blockquote",
        classNameAttribution: "blockquote__attribution",
        removeMarker: !1,
      });
  },
  Xi = {};
var el = "/public/main-NPVUTHQB.css";
function ux(a) {
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
    t = "";
  return (
    e.forEach((n, r) => {
      let o = i[r];
      Array.isArray(n) && (n = n.join("")),
        o.endsWith("$") && ((n = ux(n)), (o = o.slice(0, -1))),
        (t += o + n);
    }),
    (t += i[i.length - 1]),
    t
  );
}
var Dt = "/public/agplv3-88x31-AI7BJ3TP.gif";
var St = "/public/alienow-F722NEWX.gif";
var Tt = "/public/anydamn-EPDXWEYY.gif";
var It = "/public/anythingbut-P7SC26EW.gif";
var $t = "/public/benis-SROGCNYG.gif";
var jt = "/public/bestenjoyed-5PPUZ5AV.gif";
var Rt = "/public/bestvw-export-H7ESPG6Y.gif";
var qt = "/public/cards-D57WF3WX.png";
var Ft = "/public/chrome-SDGCSO3K.gif";
var Bt = "/public/coke-UCQSJDCW.png";
var zt = "/public/css-4IZ244C2.png";
var Lt = "/public/firefoxget-PTWTDP3M.gif";
var Ht = "/public/hair-B5ZMUMGL.gif";
var Ot = "/public/javascriptfree-WBIZITKK.gif";
var Mt = "/public/the-largest-88x31-collection-2-UNMROLFA.png";
var Nt = "/public/linux_powered-3XB4JCTP.gif";
var Ut = "/public/macos_mov-5PAXNS2V.gif";
var Gt = "/public/masto-FY7MFTQH.gif";
var Xt = "/public/monero-now-4PJLOID7.gif";
var Vi = "/public/network2-Y2HTEAXS.ico";
var Vt = "/public/opengl-RTCOHNPV.png";
var Jt = "/public/possums-now-I4SEPO7L.png";
var Zt = "/public/slava-JIPXVKUI.gif";
var Qt = "/public/2001-Z77RP4TU.gif";
var Kt = "/public/webstorm-24YHM4P2.png";
var Wt = "/public/wiby-E7GX3O3V.gif";
var Yt = "/public/yanknow-4WCNUAZA.gif";
var en = "/public/calendar-4-VOBBK3IM.png";
var il = "navigation-toggle",
  al = () => R`<input
    type="checkbox"
    id="${il}"
    class="visually-hidden"
  />`,
  tl = () => R`<label
    for="${il}"
    class="hamburger-button big-screen-hidden"
    title="Toggle navigation menu"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10" width="100" height="10" fill="currentColor" />
      <rect y="45" width="100" height="10" fill="currentColor" />
      <rect y="80" width="100" height="10" fill="currentColor" />
    </svg>
  </label>`;
var U = {
    home: "",
    about: "about",
    now: "now",
    rss: "feed",
    archive: "archive",
    tag: "tag",
    post: "post",
    privacyPolicy: "privacy",
  },
  Ji = 4e3,
  Zi = Ji + 1;
var Hx = "latest",
  nl = () => {
    let a = new Date().getFullYear().toString(),
      e = a === "2022" ? "2022" : `2022 - ${a}`;
    return R`<footer class="footer">
    <span>
      Copyright © ${e} Ignore This Page. All rights reserved.
      <a href="/${U.privacyPolicy}">Privacy Policy</a>.
    </span>
    <span class="small-screen-hidden">${Hx}</span>
  </footer>`;
  };
var rl = () => R`<form
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
var Ox = () => R`<svg
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
  ol = () => R`<nav class="navigation">
    <span class="navigation__search"> ${rl()} </span>
    <ul class="navigation__menu">
      <li class="navigation__divider big-screen-hidden" aria-hidden="true"></li>
      <li class="navigation__item">
        <a
          href="/${U.home}"
          class="navigation__button navigation__button--home"
          title="Home"
        >
          ${Ox()}
          <span class="big-screen-hidden">Home</span>
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${U.about}" class="navigation__button">About</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${U.now}" class="navigation__button">Now!</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${U.archive}" class="navigation__button">Archive</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item big-screen-hidden">
        <a class="navigation__button" href="/${U.rss}">RSS Feed</a>
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
var sl = () => R`<a
    href="/${U.rss}"
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
var cl = 10,
  pl = (a = 0) => {
    let e = `${a}`;
    if (e.length > cl) throw new Error("Hit counter overflow");
    let i = e.padStart(cl, "0");
    return R`<div class="hit-counter">
    ${i.split("").map((t) => R`<span class="hit-counter__digit">${t}</span>`)}
  </div>`;
  };
var ll = () => R`<section class="sidebar-banners">
    <img src="${Ht}" alt="No bad hair on the internet" />
    <img src="${Ut}" alt="Made with MacOS" />
    <img src="${Nt}" alt="Linux powered" />
    <a href="https://wiby.me/">
      <img src="${Wt}" alt="Wiby search engine micro banner" />
    </a>
    <img src="${Vt}" alt="OpenGL logo micro banner" />
    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
      <img src="${Dt}" alt="AGPLv3 logo micro banner" />
    </a>
    <img src="${Rt}" alt="Best viewed with computer and monitor" />
    <img src="${Tt}" alt="Best viewed with any damn browser" />
    <a href="https://www.mozilla.org/en-GB/firefox/new/">
      <img
        class="sidebar-banners--rounded"
        src="${Lt}"
        alt="Get Firefox animation micro banner"
      />
    </a>
    <a href="https://www.youtube.com/user/alyankovic/videos">
      <img src="${Yt}" alt="Weird Al Yankovic logo micro banner" />
    </a>
    <a href="https://www.jetbrains.com/webstorm/">
      <img src="${Kt}" alt="WebStorm IDE logo micro banner" />
    </a>
    <img src="${St}" alt="Alien Now micro banner" />
    <img src="${It}" alt="Anything but Chrome gif" />
    <img src="${$t}" alt="Benis Now!" />
    <img src="${jt}" alt="Best enjoyed with Coca-Cola" />
    <img src="${qt}" alt="Cards micro banner" />
    <img src="${Ft}" alt="Chrome is evil" />
    <img src="${Bt}" alt="Powered by Coca-Cola" />
    <img src="${zt}" alt="CSS is awesome" />
    <img src="${Ot}" alt="JavaScript Free Page" />
    <a href="https://capstasher.neocities.org/88x31collection-page1.html">
      <img
        src="${Mt}"
        alt="Largest collection of 88x31 buttons"
      />
    </a>
    <a rel="me" href="https://masto.ai/@i9or">
      <img src="${Gt}" alt="Join Mastodon, leave Twitter"
    /></a>
    <a href="https://www.getmonero.org/">
      <img src="${Xt}" alt="Monero Now" />
    </a>
    <img src="${Jt}" alt="Possums Now" />
    <img src="${Zt}" alt="Glory to Ukraine!" />
    <img src="${Qt}" alt="I wish it was 2001" />
    ${pl(Math.floor(Math.random() * 1e5))}
  </section>`;
var Mx = () => R`<div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No tags yet.
</div>`,
  Nx = (a) => R`<ul
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  ${a.map(
    (e) => R`<li class="sidebar-widget__tag">
      <a href="/${U.tag}/${e.slug}">${e.text}</a>
    </li>`
  )}
</ul>`,
  ul = (a) => R` <section class="sidebar-widget">
    <header class="sidebar-widget__header">Tags</header>
    ${a.length > 0 ? Nx(a) : Mx()}
  </section>`;
var Ux = () => R` <div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No recent posts yet.
</div>`,
  Gx = (a) => R`<ul
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
  dl = (a) => R`<section class="sidebar-widget">
    <header class="sidebar-widget__header">Recent Posts</header>
    ${a.length > 0 ? Gx(a) : Ux()}
  </section>`;
var He = () => process.env.NODE_ENV === "production";
var ml,
  fl = () =>
    He()
      ? ""
      : R(
          ml ||
            (ml = cn([
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
var hl = ({ body: a, tags: e, recentPosts: i }) => R`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="${Vi}" type="image/x-icon" />
        <link rel="icon" href="${Vi}" type="image/x-icon" />
        <link rel="stylesheet" href="${el}" />
        ${fl()}
        <title>Ignore This Page</title>
      </head>
      <body class="body-container">
        ${al()}
        <header class="header">
          <div class="header__title">
            <h1>Ignore This Page</h1>
            <small class="small-screen-hidden">
              Move along, nothing to see here...
            </small>
          </div>
          <div class="header__actions">
            ${sl()} ${tl()}
          </div>
        </header>
        ${ol()}
        <main class="main">${a}</main>
        <aside class="sidebar">
          ${dl(i)} ${ul(e)}
          ${ll()}
        </aside>
        ${nl()}
      </body>
    </html>`;
var ie = require("node:fs/promises"),
  Z = require("node:path"),
  _l = X(Ne());
var xl = X(Ne());
var Xx = (a) =>
    a.length > 0
      ? R` <section class="post__tags">
      <span>Tags:</span>
      ${a
        .map(({ slug: e, text: i }) => R`<a href="/tag/${e}">${i}</a>`)
        .join(", ")}
    </section>`
      : "",
  an = ({
    post: a,
    tags: e = [],
    previousPost: i,
    nextPost: t,
  }) => R`<article class="post">
  <small class="post__date">
    <img
      src="${en}"
      width="16"
      height="16"
      alt="Small calendar icon"
    />
    ${xl.default.unix(a.createdAt).format("MMMM D, YYYY")}
  </small>
  ${Xi.md.render(a.content)}
  <p class="post__fin">☙</p>
  ${Xx(e)}
  <section class="post__navigation">
    ${
      i
        ? R`<a
          href="/${U.post}/${i.slug}"
          title="${i.title}"
        >
          <small>&larr; There</small>
        </a>`
        : "&nbsp;"
    }
    ${
      t
        ? R`<a
          href="/${U.post}/${t.slug}"
          title="${t.title}"
        >
          <small>Here &rarr;</small>
        </a>`
        : "&nbsp;"
    }
  </section>
</article>`;
var Vx = { "C++": "cpp" },
  tn = (a) => {
    let e = a.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let [i, t] of Object.entries(Vx)) e = e.replace(i, t);
    return (
      (e = e.toLowerCase()),
      (e = e.replace(/\s+/g, "-")),
      (e = e.replace(/[^a-z0-9-]/gi, "")),
      e
    );
  };
var rn = X(Ne());
var nn = "MMMM YYYY";
var gl = () => R`<article class="just-a-page">
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  <ul>
    <li>
      <p>${(0, rn.default)("2023-01-25").format(nn)}</p>
      <ul>
        <li>
          Still making an <s>almost</s> static blog <s>engine</s> generator
          using Node.js;
        </li>
        <li>
          Working on a legacy OpenGL demo with retro graphics and old libraries;
        </li>
        <li>
          <s>Studying <a href="https://sarabander.github.io/sicp/">SICP</a>.</s>
          <em>On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${(0, rn.default)("2022-12-04").format(nn)}</p>
      <ul>
        <li>Making an almost static blog engine using Node.js;</li>
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
var vl = () => R`<article class="just-a-page">
  <h1>About</h1>
  <p>Before all, the disclaimer:</p>

  <p>
    <em>
      The views and opinions expressed in the content of this website are solely
      those of the author (i.e. me) and do not necessarily reflect the official
      policy or position of the author's current, future or past employers. Any
      content provided by the author is of their opinion and is not intended to
      malign any religion, ethnic group, club, organization, company,
      individual, or anyone or anything. The information, including but not
      limited to, text, graphics, images, and other material contained on this
      website are for informational purposes only and should not be relied upon
      as legal, financial, or professional advice. Current, future or past
      employer of the author shall not be held liable for any damages incurred
      as a result of using, relying upon or otherwise taking action based on the
      contents of this website.
    </em>
  </p>

  <p>Phew, that was long.</p>

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
var bl = () => R`<article class="just-a-page">
  <h1>Archive</h1>
  <p>Not ready yet...</p>
</article>`;
var yl = () => R`<article class="just-a-page">
  <h1>Privacy Policy</h1>

  <p>
    This privacy policy explains how I collect, use, and disclose information
    through my personal technical blog ("Website"). By using my Website, you
    agree to the collection, use, and disclosure of your information as
    described in this policy.
  </p>

  <h2>Collection of Information</h2>

  <p>
    I don't personally collect information from you when you visit my Website,
    interact with my content, or contact me through the Website. However, I am
    using third party service providers such as Cloudflare. So they may or may
    not collect some of your information. Please reach out to their privacy
    policy. This information may include your IP address, browser type, device
    type, operating system, location, and browsing history. I may also collect
    information you voluntarily provide, such as your name, email address, and
    any other information you provide through forms or comments on the Website
    in the future (there are none at the moment).
  </p>

  <h2>Use of Information</h2>

  <p>
    I use the information I collect to operate and maintain the Website, to
    improve the content and functionality of the Website, and to respond to your
    inquiries. I may also use your information to send you updates,
    notifications, and other communications related to the Website.
  </p>

  <h2>Disclosure of Information</h2>

  <p>
    I do not sell or share your information with third parties for their
    marketing purposes. I may disclose your information to third parties if I
    believe that disclosure is necessary to comply with a legal requirement, to
    protect the rights or property of me or others, or to prevent harm. I may
    also share your information with my service providers and partners who
    assist me in operating the Website and providing services to you.
  </p>

  <h2>Security</h2>

  <p>
    I take reasonable measures to protect your information from unauthorized
    access, use, or disclosure. However, no security measures are 100% effective
    and I cannot guarantee the security of your information.
  </p>

  <h2>Changes to This Policy</h2>

  <p>
    I may update this privacy policy from time to time. If I make changes, I
    will post the updated policy on the Website and update the "Effective Date"
    at the top of the policy. Your continued use of the Website after any
    changes indicates your acceptance of the new policy.
  </p>

  <h2>Contact Me</h2>

  <p>
    If you have any questions about this privacy policy, please contact me using
    this <a href="mailto:dont@bzzr.me">email</a>. Don't contact me if you're a
    spammer, please.
  </p>
</article>`;
var Jx = async (a) => {
    let e = [],
      i = new Map(),
      t = [];
    try {
      let r = await (0, ie.opendir)(a);
      for await (let o of r) {
        let [s, c, p, ...u] = o.name.split("-"),
          m = await (0, ie.readFile)((0, Z.join)(a, o.name), {
            encoding: "utf-8",
          }),
          [f, l, d, h, ...x] = m.split(`
`);
        if (f !== "---" || d !== "---" || h !== "")
          throw new Error(`Post "${o.name}" is formatted incorrectly!`);
        let { tags: v } = JSON.parse(l),
          g = v.map((y) => {
            let D = tn(y);
            return i.set(y, tn(y)), { slug: D, text: y };
          });
        e.push({
          content: x.join(`
`),
          slug: u.join("-").replace(".md", ""),
          tags: g,
          createdAt: (0, _l.default)(`${s}-${c}-${p}`).unix(),
          title: x[0].replace("#", "").trim(),
        });
      }
      e.sort((o, s) => s.createdAt - o.createdAt);
      for (let o = 0; o < 5 && o < e.length; o++)
        t.push({ slug: e[o].slug, title: e[o].title });
    } catch (r) {
      console.error(r);
      return;
    }
    let n = [];
    return (
      i.forEach((r, o) => {
        n.push({ text: o, slug: r });
      }),
      { posts: e, tags: n, recentPosts: t }
    );
  },
  Zx = (a, e) => async (i, t) => {
    let n = hl({ body: i, recentPosts: a, tags: e });
    await (0, ie.mkdir)(t, { recursive: !0 }),
      await (0, ie.writeFile)((0, Z.join)(t, "index.html"), n);
  },
  Qx = async (a) => {
    await (0, ie.writeFile)(
      (0, Z.join)(a, "robots.txt"),
      ["User-agent: *", "Allow: /", ""].join(`
`)
    );
  },
  on = async () => {
    process.stdout.write("Building the blog...");
    let a = process.hrtime(),
      e = (0, Z.resolve)(process.cwd(), "content/posts"),
      i = await Jx(e);
    if (!i)
      throw new Error("Hey chief, something is wrong, no blog data at all!");
    let { tags: t, recentPosts: n, posts: r } = i,
      o = (0, Z.resolve)(process.cwd(), "build");
    if (r.length === 0)
      throw new Error("Hey chief, something is wrong, no posts at all!");
    let s = Zx(n, t);
    await (0, ie.mkdir)(o, { recursive: !0 });
    let c;
    r.length > 1 && (c = { title: r[1].title, slug: r[1].slug }),
      await s(an({ post: r[0], tags: r[0].tags, previousPost: c }), o);
    for (let u = 0; u < r.length; u++) {
      let m, f;
      u > 0 && (f = { slug: r[u - 1].slug, title: r[u - 1].title }),
        u < r.length - 1 &&
          (m = { slug: r[u + 1].slug, title: r[u + 1].title }),
        await s(
          an({ post: r[u], tags: r[u].tags, previousPost: m, nextPost: f }),
          (0, Z.join)(o, U.post, r[u].slug)
        );
    }
    await s(gl(), (0, Z.join)(o, U.now)),
      await s(vl(), (0, Z.join)(o, U.about)),
      await s(bl(), (0, Z.join)(o, U.archive)),
      await s(yl(), (0, Z.join)(o, U.privacyPolicy)),
      await Qx(o),
      He() &&
        (await (0, ie.cp)(
          (0, Z.resolve)(process.cwd(), "content/images"),
          (0, Z.join)(o, "images"),
          { recursive: !0 }
        ),
        await (0, ie.cp)(
          (0, Z.resolve)(process.cwd(), "tmp/public"),
          (0, Z.join)(o, "public"),
          { recursive: !0 }
        ));
    let p = Math.round(process.hrtime(a)[1] / 1e6);
    process.stdout.write(` done in ${p}ms
`);
  };
(async () => {
  if (((Xi.md = await Yp()), await on(), He())) return;
  let a = new tt.default({ port: Zi });
  (0, kl.watch)((0, wl.resolve)(process.cwd(), "content/posts")).on(
    "change",
    async () => {
      await on(),
        console.info("Reloading..."),
        a.clients.forEach((i) => i.send("reload"));
    }
  );
  let e = new oe();
  try {
    e.use(Ur())
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
