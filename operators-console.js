Number(false)
0
Number(true)
1
Number(10)
10
Number(-10) -
  10
Number(-10.20) -
  10.2
Number(-10.201) -
  10.201
Number(false)
0
false < 2
true
false > 2
false
2 < 1
false
2 > 1
true
2 > 1 < 0
false
1 < 2 > 0
true
Number("3d")
NaN
Number(null)
0
Number(undefined)
NaN
null + 10
10
null - 10 -
  10
null - 10 -
  10
Number("d")
NaN
Number("d")
NaN
3 == 3
true
3 == "3"
true
3 === "3"
false
  "3" === "3"
true
  "3" === 3
false
  "3" == "3"
true
true == 1
true
true === 1
false
var a = true
undefined
a
true
a == 0
false
a == 1
true
a === 1
false
  "" == 0
true
  "" == 0
true
  ""
""
"" == false
true
null == 0
false
null === 0
false
null == 0
false
null + 10
10
undefined + 10
NaN
0 == false
true
null == false
false
null == 0
false
null
null
null + 10
10
null < 10
true
undefined < 10
false
true1 + 1
VM832: 1 Uncaught ReferenceError: true1 is not defined
at < anonymous >: 1: 1(anonymous) @ VM832: 1
true + 1
2
  "true1" + 1 "true11"
"true" + 1
  "true1"
"true" - 1
NaN
true - 1
0
true < 10
true
  "true" < 10
false
  "rue" < 10
false
  "true" + 10 "true10"
"true" - 10
NaN
