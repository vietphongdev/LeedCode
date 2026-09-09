# LeedCode

# Cho mảng:
```
const friends = [
  ['Jason', 'Mary'],
  ['Mike', 'Mary'],
  ['Mike', 'Jason'],
  ['Susan', 'Jason'],
  ['John', 'Mary'],
  ['Susan', 'Mary']
];
```
# Yêu Cầu
Thống kê danh sách bạn của mỗi người

# Output
{
  Jason: [ 'Mary', 'Mike', 'Susan' ],
  Mary: [ 'Jason', 'Mike', 'John', 'Susan' ],
  Mike: [ 'Mary', 'Jason' ],
  Susan: [ 'Jason', 'Mary' ],
  John: [ 'Mary' ]
}
