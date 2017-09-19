var tester = require('gitbook-tester');
var test = require('tape');

function expect(t, version, content, expected) {

  tester.builder()
    .withContent(content)
    .withLocalPlugin(__dirname)
    .withBookJson({
      gitbook: version,
      plugins: ['prism', '-highlight']
    })
    .create()
    .then(function(result) {
      t.equal(result[0].content, expected, 'gitbook version ' + version);
    })
    .done();

}

test('highlight javascript code block', function (t) {

  t.plan(2);

  var content = '```js\nfunction() { return true };\n```';
  var expected = '<pre class="language-"><code class="lang-js"><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>';
  expect(t, '>=2.4.1', content, expected);
  expect(t, '>=3.0.0', content, expected);

});

test('highlight csharp code using shortcut', function (t) {

  t.plan(2);

  var content = '```cs\nusing System; class Program {public static void Main(string[] args) {Console.WriteLine("Hello, world!"); } }\n```';
  var expected = '<pre class="language-"><code class="lang-cs"><span class="token keyword">using</span> System<span class="token punctuation">;</span> <span class="token keyword">class</span> <span class="token class-name">Program</span> <span class="token punctuation">{</span><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre>';
  expect(t, '>=2.4.1', content, expected);
  expect(t, '>=3.0.0', content, expected);

});
