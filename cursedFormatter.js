let chars = "{};"                                              ;
function format(text)                                          {
  let lines = text.split("\n")                                 ;
  let longest = Math.max(...(lines.map(line => line.length)))  ;
  let ends = []                                                ;
  let fixedLines = []                                          ;
  let j = 0                                                    ;
  lines.forEach((line, i) =>                                   {
    while (true)                                               {
      let last = line.substr(-1, 1)                            ;
      if (chars.includes(last) && last != "")                  {
        ends[i] = last + (ends[i] || "")                       ;
        line = line.slice(0, -1)                               ;}
      else if (last == " ")                                    {
        line = line.slice(0, -1)                               ;}
      else break                                               ;}
    if (/^ *$/.test(line) && i > 0)                            {
      ends[j] = (ends[j] || "") + (ends[i] || "")              ;}
    else                                                       {
      fixedLines[i] = line                                     ;
      j = i                                                    ;}
  })                                                           ;
  let result = ""                                              ;
  fixedLines.forEach((e, i) =>                                 {
    result += e.padEnd(longest + 1) + (ends[i] || "") + "\n"   ;
  })                                                           ;
  document.querySelector("#output").innerHTML = result         ;}