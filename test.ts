import { black, red, yellow } from './src/ansi/colors/4bit/background_colors/mod.ts';

Deno.stdout.write(new TextEncoder().encode(yellow('Hello')))
