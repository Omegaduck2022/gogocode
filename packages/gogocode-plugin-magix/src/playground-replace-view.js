module.exports = function ({ script, template }) {
    return { script: script.replace(`import View from 'zs_scaffold/view'`, `import View from 'magix5-site/view';`), template };
};

