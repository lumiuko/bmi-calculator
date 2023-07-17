const elements = {
  form: document.getElementById('form'),
  metricInputs: document.getElementById('metric-inputs'),
  imperialInputs: document.getElementById('imperial-inputs'),
  resultReadyValues: document.getElementById('result-ready-values'),
  resultIntro: document.getElementById('result-introduction'),
  resultValue: document.getElementById('result-value'),
  resultText: document.getElementById('result-text'),
  resultRange: document.getElementById('result-range'),
  inputs: {
    metric: {
      height: document.getElementById('height-cm'),
      weight: document.getElementById('weight-kg')
    },
    imperial: {
      height: {
        ft: document.getElementById('height-ft'),
        in: document.getElementById('height-in')
      },
      weight: {
        st: document.getElementById('weight-st'),
        lbs: document.getElementById('weight-lbs')
      }
    }
  }
}

let units = 'metric'

function toggleClass(element, className, condition) {
  condition ? element.classList.add(className) : element.classList.remove(className)
}

function handleChange(event) {
  units = event.target.dataset.value
  toggleClass(elements.metricInputs, 'hidden', units !== 'metric')
  toggleClass(elements.imperialInputs, 'hidden', units !== 'imperial')
  calculateResult()
}

function calculateResult() {
  const LOWER_BMI_LIMIT = 18.5
  const UPPER_BMI_LIMIT = 24.9
  let bmi = 0
  let lowerBMI = 0
  let upperBMI = 0

  if (units === 'metric') {
    const heightSquared = (elements.inputs.metric.height.value / 100) ** 2
    bmi = (elements.inputs.metric.weight.value / heightSquared).toFixed(1)
    lowerBMI = (heightSquared * LOWER_BMI_LIMIT).toFixed(1)
    upperBMI = (heightSquared * UPPER_BMI_LIMIT).toFixed(1)
  } else if (units === 'imperial') {
    const totalHeight = Number(elements.inputs.imperial.height.ft.value) * 12 + Number(elements.inputs.imperial.height.in.value)
    const totalWeight = Number(elements.inputs.imperial.weight.st.value) * 14 + Number(elements.inputs.imperial.weight.lbs.value)
    bmi = ((totalWeight / totalHeight ** 2) * 703).toFixed(1)
    lowerBMI = ((totalHeight ** 2 * LOWER_BMI_LIMIT) / 703).toFixed(1)
    upperBMI = ((totalHeight ** 2 * UPPER_BMI_LIMIT) / 703).toFixed(1)
  }

  let healthResult = ''
  if (bmi < 18.5) {
    healthResult = 'an underweight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    healthResult = 'a healthy weight'
  } else if (bmi >= 25 && bmi <= 29.9) {
    healthResult = 'an overweight'
  } else {
    healthResult = 'an obese'
  }

  let resultRange = ''
  if (units === 'metric') {
    resultRange = `${lowerBMI}kg - ${upperBMI}kg`
  } else if (units === 'imperial') {
    const lowerRangeSt = Math.floor(lowerBMI / 14)
    const lowerRangeLbs = Math.floor(lowerBMI % 14)
    const upperRangeSt = Math.floor(upperBMI / 14)
    const upperRangeLbs = Math.floor(upperBMI % 14)
    resultRange = `${lowerRangeSt}st ${lowerRangeLbs}lbs - ${upperRangeSt}st ${upperRangeLbs}lbs`
  }

  elements.resultValue.textContent = bmi
  elements.resultText.textContent = healthResult
  elements.resultRange.textContent = resultRange

  toggleClass(elements.resultReadyValues, 'visually-hidden', bmi < 1 || bmi > 100 || isNaN(bmi))
  toggleClass(elements.resultIntro, 'visually-hidden', bmi > 1 && bmi < 100 && !isNaN(bmi))
}

document.querySelectorAll('input[type="radio"]').forEach(input => input.addEventListener('change', handleChange))
document.querySelectorAll('input[type="text"]').forEach(input => input.addEventListener('input', calculateResult))
