let obj = JSON.parse(
  '{"arrDom":[{"tag":"HTML","content":"<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"ie=edge\\">\\n    <title>Demo Deface Web</title>\\n    <style>\\n        h1{\\n            font-weight:lighter;\\n            font-family: Arial, Helvetica, sans-serif;\\n        }\\n    </style>\\n</head>\\n<body>\\n    <h1>\\n        Nguy\xe1\xbb\x85n Trung Nh\xe1\xba\xadt Nam - Demo deface web\\n    </h1>\\n\\n\\n</body>"},{"tag":"HEAD","content":"\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <meta http-equiv=\\"X-UA-Compatible\\" content=\\"ie=edge\\">\\n    <title>Demo Deface Web</title>\\n    <style>\\n        h1{\\n            font-weight:lighter;\\n            font-family: Arial, Helvetica, sans-serif;\\n        }\\n    </style>\\n"},{"tag":"META","content":""},{"tag":"META","content":""},{"tag":"META","content":""},{"tag":"TITLE","content":"Demo Deface Web"},{"tag":"STYLE","content":"\\n        h1{\\n            font-weight:lighter;\\n            font-family: Arial, Helvetica, sans-serif;\\n        }\\n    "},{"tag":"BODY","content":"\\n    <h1>\\n        Nguy\xe1\xbb\x85n Trung Nh\xe1\xba\xadt Nam - Demo deface web\\n    </h1>\\n\\n\\n"},{"tag":"H1","content":"\\n        Nguy\xe1\xbb\x85n Trung Nh\xe1\xba\xadt Nam - Demo deface web\\n    "}]}'
);
let count = 0;
obj.arrDom.forEach((value) => {
  obj.arrDom.forEach((k) => {
    if (value.content === k.content && value.tag === k.tag) count++;
  });
});
console.log(count);
