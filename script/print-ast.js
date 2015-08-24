import mdast from 'mdast';
import concat from 'concat-stream'
import inspect from 'unist-util-inspect';

function printAST(markdown) {
  console.error('MARKDOWN:\n', markdown);
  const tree = mdast.parse(markdown);
  console.log(JSON.stringify(tree, null, '  '));
}

function printASTSink() {
  return concat(buffer => printAST(buffer.toString('utf-8')));
}

process.stdin.pipe(printASTSink());
