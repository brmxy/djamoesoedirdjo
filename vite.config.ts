import react from '@vitejs/plugin-react-swc';
import Unfonts from 'unplugin-fonts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    Unfonts.vite({
      custom: {
        display: 'block',
        families: {
          'Nimbus Sans D OT': {
            src: './assets/nimbus-sans-d-ot-*',
            transform(font) {
              font.weight =
                font.basename === 'nimbus-sans-d-ot-700' ? 700 : 400;
              font.style = 'normal';
              return font;
            }
          }
        }
      }
    })
  ]
});
