export default [
  [/square-(\w+)/, ([, c]: [null, string]) => `w-${c} h-${c}`],
]