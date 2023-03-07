export default [
  {
    btn: 'py5 px7.5 rounded-2.5 text-white font-600 bg-primary',
  },
  [/^btn-(.*)$/, ([, c]: [null, string]) => `bg-${c}-400 text-${c}-100`],
]