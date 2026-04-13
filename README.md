[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/ngram-kit/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/ngram-kit/actions)
[![License](https://img.shields.io/github/license/Tox1469/ngram-kit?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/ngram-kit?style=flat-square)](https://github.com/Tox1469/ngram-kit/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/ngram-kit?style=flat-square)](https://github.com/Tox1469/ngram-kit/stargazers)

---

# ngram-kit

Gerador de n-gramas de caracteres e palavras, com frequências e intervalos.

## Instalação

```bash
npm install ngram-kit
```

## Uso

```ts
import { charNgrams, wordNgrams, ngramFrequency } from "ngram-kit";

charNgrams("casa", 2); // ["ca", "as", "sa"]
wordNgrams(["o", "gato", "preto"], 2); // ["o gato", "gato preto"]
```

## API

- `charNgrams(text, n, pad?)`
- `wordNgrams(words, n)`
- `ngramRange(text, min, max, mode?)`
- `ngramFrequency(items)`

## Licença

MIT