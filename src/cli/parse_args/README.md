- `-o`: simple bool flag `{o: true}`
- `-o="out"`: simple parameter flag `{o: "out"}`
- `-o "out"`: simple parameter flag with space `{o: "out"}`
- `--output`: named bool flag `{output: true}`
- `--output="out"`: named paremeter`{output: 'out'}`
- `--output "out folder"`: named parameter with space `{output: 'out folder'}`
- `--object:a=b`: object `{object: {a: 'b'}}`
- `--object:a="b c"`: object `{object: {a: 'b c'}}`
- `--list=a,b,c`: object `{list: ['a', 'b', 'c']}`
- `--list=a,b,"c d"`: object `{list: ['a', 'b', 'c d']}`