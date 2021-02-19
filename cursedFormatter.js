let chars = "{};"                                                  ;
function format(text)                                              {
  let lines = text.split("\n")                                     ;
  let ends = new Array(lines.length).fill("")                      ;
  let fixedLines = new Array(lines.length).fill("")                ;
  let j = 0                                                        ;
  lines.forEach((line, i) =>                                       {
    while (true)                                                   {
      let last = line.substr(-1, 1)                                ;
      if (chars.includes(last) && last != "")                      {
        ends[i] = last + ends[i] || ""                             ;
        line = line.slice(0, -1)                                   ;}
      else if (last == " ")                                        {
        line = line.slice(0, -1)                                   ;}
      else break                                                   ;}
    let k = 0                                                      ;
    let f = false                                                  ;
    while (k < line.length)                                        {
      let cur = line[k]                                            ;
      if (cur == " ")                                              {
        if (f) line = line.slice(0, k) + line.slice(k + 1)         ;
        else                                                       {
          k++                                                      ;
          continue                                                 ;}}
      else if (chars.includes(cur) && typeof (cur) != "undefined") {
        ends[j] = (ends[j] || "") + cur                            ;
        line = line.slice(0, k) + line.slice(k + 1)                ;
        f = true                                                   ;}
      else break                                                   ;}
    if (/^ *$/.test(line) && i > 0)                                {
      ends[j] = ends[j] + ends[i]                                  ;
      ends[i] = ""                                                 ;}
    else                                                           {
      fixedLines[i] = line                                         ;
      j = i                                                        ;}}
  )                                                                ;
  let longest = Math.max(...(fixedLines.map(line => line.length))) ;
  let result = ""                                                  ;
  fixedLines.forEach((e, i) =>                                     {
    if (ends[i]) result += e.padEnd(longest + 1) + ends[i] + "\n"  ;}
  )                                                                ;
  document.querySelector("#output").innerHTML = result             ;}
