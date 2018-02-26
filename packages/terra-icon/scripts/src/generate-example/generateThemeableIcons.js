/* eslint-disable */
import fs from 'fs';

const outputfile = fs.createWriteStream('../../packages/terra-site/src/examples/icon/components/IconThemeable.jsx', { flags: 'w' });

const generateIconAll = iconObjs => new Promise((resolve) => {

  const themeableIcons = iconObjs.filter(function(iconObj){
    if (iconObj.themeable) {
      return iconObj;
    }
  });

  outputfile.write('// This file is autogenerated from scripts/src/generate-example\n');
  outputfile.write('/* eslint-disable */\n');
  outputfile.write('import React from \'react\';\n');
  outputfile.write('import Table from \'terra-table\';\n');
  themeableIcons.forEach((iconObj) => {
    outputfile.write(iconObj.syntaxImport);
  });

  outputfile.write('const IconAll = () => (\n');
  outputfile.write('  <div>');
  outputfile.write('  <Table isStriped={false} >\n');

  outputfile.write('    <Table.Header>\n');
  outputfile.write(`      <Table.HeaderCell content={'SVG'} key={'svg'} />\n`);
  outputfile.write(`      <Table.HeaderCell content={'Concept'} key={'concept'} />\n`);
  outputfile.write(`      <Table.HeaderCell content={'Code'} key={'code'} />\n`);

  outputfile.write('    </Table.Header>\n');
  outputfile.write('    <Table.Rows>\n');

  themeableIcons.forEach((iconObj) => {
    outputfile.write(`      <tr style={{ backgroundColor: '#EEEEEE' }}>\n`);
    outputfile.write(`        <td>${iconObj.syntaxComponent}</td>\n`);
    outputfile.write(`        <td>${iconObj.name}</td>\n`);
    outputfile.write(`        <td style={{ fontWeight: 'bold' }}>\n`);
    outputfile.write('          <code>\n');
    outputfile.write(`            ${iconObj.syntaxImport}`);
    outputfile.write('          </code>\n');
    outputfile.write('        </td>\n');
    outputfile.write('      </tr>\n');
  });
  outputfile.write('    </Table.Rows>\n');
  outputfile.write('  </Table>\n');
  outputfile.write('  </div>');
  outputfile.write(');\n\n');

  outputfile.write('export default IconAll;\n');

  resolve(iconObjs);
});

export default generateIconAll;
