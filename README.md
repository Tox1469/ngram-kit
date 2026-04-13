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
