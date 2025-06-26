ciot_ts
=======

To install and use it on your own projects:

1. Create your project

2. Install deps

```shell
npm install --save-dev ts-node typescript
npm install --save-dev @protobuf-ts/plugin
npm install --save-dev vite typescript
npm install vite-plugin-singlefile --save-dev 
npm install vite-plugin-compression --save-dev
```

3. Clone ciot_ts

3. Create a link for cloned ciot_ts repository

```shell
npm link
```

5. Create make file and compile your own protos to `node_modules/src/protos` dir

6. Install vite to build gz app

```

```

7. Create `vite.config.ts` file on your project root:

```ts
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  root: 'examples/simple-web-app',
	plugins: [
    viteSingleFile(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      filter: /\.(html)$/i,
      threshold: 0
    })
  ],
  build: {
    outDir: 'dist'
  }
})
```

8. Add link on your project

```shell
npm link ciot-ts
```

8. Build

```shell
npx vite build
```

