export default function attrStrToObj(str) {

  const re = /(\w+)="([^"]+)"/g;
  let matches = null;
  let obj = {};

  while (matches = re.exec(str)) {
    const [all, attr, value] = matches;
    obj[attr] = value;
  }
  return obj;
}
