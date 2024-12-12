/** @implements {import('@playwright/test/reporter').Reporter} */
class MyReporter {
  constructor(options) {
    console.log(`Iniciando automação ${options.customOption}`);
  }

  onBegin(config, suite) {
    console.log(`Executando ${suite.allTests().length} teste(s)`);
  }

  onTestBegin(test) {
    console.log(`Iniciando teste '${test.title}'`);
  }

  onStepBegin(test, result, step) {
      console.log(`Init Step: ${step.title}`);
  }

  onStepEnd(test, result, step) {
  }

  onTestEnd(test, result) {
    console.log(`Teste '${test.title}' Finalizado`);
    console.log(`Resultado: '${result.status}`);

  }

  onEnd(result) {
    console.log(`Resultado da execução: ${result.status}`);
  }
}

module.exports = MyReporter;