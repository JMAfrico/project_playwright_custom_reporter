class MyReporter {


  onBegin(config, suite) {
    console.log(`Iniciando execução de: ${suite.allTests().length} teste(s)`);
  }

  onTestBegin(test) {
    console.log(`Iniciando '${test.title}'`);
    console.log(`********************************************************************`)
  }

  onStepBegin(test, result, step) {
    if (step.category != 'hook') {
      if (step.category != 'fixture') {
        console.log(`--------------------------------------------------------------------`)
        console.log(`>>>>>> Step: ${step.title}`);
      }
    }
  }

  onStepEnd(test, result, step) {

  }

  onTestEnd(test, result) {
    console.log(``)
    console.log(`********************************************************************`)
    console.log(`Execução '${test.title}' Finalizada`);
    console.log(`Resultado: ${result.status}`);
    console.log(`********************************************************************`)

  }

  //onEnd(result) {
  //  console.log(`Resultado geral: ${result.status}`);
  //  console.log(`**********************************************************************`)
  //}
}

module.exports = MyReporter;