import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
const ReactCompilerConfig = {
  // compilationMode: "annotation", // make use of "use memo" directive on top of the component to use it
};

export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
  };
});


