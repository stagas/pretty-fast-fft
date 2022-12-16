

<h1>
pretty-fast-fft <a href="https://npmjs.org/package/pretty-fast-fft"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-43-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/pretty-fast-fft@1.0.0/dist/pretty-fast-fft.min.js"><img src="https://img.shields.io/badge/brotli-48.2K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

WebAssembly build of a small, pretty fast FFT library (PFFFT).

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i pretty-fast-fft </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add pretty-fast-fft </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add pretty-fast-fft</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
import { add } from 'pretty-fast-fft'

console.log(add(1, 2))
```

</p>
</details></ul></details><details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { add } from 'pretty-fast-fft'

const main = document.querySelector('main')!

main.innerHTML = `<h1>1 + 2 = ${add(1, 2)}</h1>`
```

</p>
</details></ul></details>


This is simply npm packaging for this project:

>  https://github.com/JorenSix/pffft.wasm




## API

<p>  <details id="createRunner$1" title="Function" open><summary><span><a href="#createRunner$1">#</a></span>  <code><strong>createRunner</strong></code><em>(blockSize, stepSize)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="blockSize$3" title="Parameter" ><summary><span><a href="#blockSize$3">#</a></span>  <code><strong>blockSize</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>1024</code></span>  </summary>    <ul><p>number</p>        </ul></details><details id="stepSize$4" title="Parameter" ><summary><span><a href="#stepSize$4">#</a></span>  <code><strong>stepSize</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>128</code></span>  </summary>    <ul><p>number</p>        </ul></details>  <p><strong>createRunner</strong><em>(blockSize, stepSize)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;{<p>  <details id="destroy$9" title="Method" ><summary><span><a href="#destroy$9">#</a></span>  <code><strong>destroy</strong></code><em>()</em>    </summary>  <a href=""></a>  <ul>    <p>      <p><strong>destroy</strong><em>()</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details><details id="processAudio$6" title="Method" ><summary><span><a href="#processAudio$6">#</a></span>  <code><strong>processAudio</strong></code><em>(samples)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="samples$8" title="Parameter" ><summary><span><a href="#samples$8">#</a></span>  <code><strong>samples</strong></code>    </summary>    <ul><p><span>Float32Array</span></p>        </ul></details>  <p><strong>processAudio</strong><em>(samples)</em>  &nbsp;=&gt;  <ul>number  []  []</ul></p></p>    </ul></details></p>}&gt;</ul></p></p>    </ul></details></p>



## Contributing

[Fork](https://github.com/stagas/pretty-fast-fft/fork) or [edit](https://github.dev/stagas/pretty-fast-fft) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
