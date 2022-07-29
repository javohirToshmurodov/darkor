import React from 'react'
import Icon from '../../assets/icons/staticicon.svg'

const Static = () => {
  return (
    <div className='container mt-5'>
      <div className='text-center w-100'>
        <p className='text-primary'>Наши услуги</p>
        <h1 className='mx-auto col-8 title'>
          И нет сомнений, что явные признаки.
        </h1>
        <br />
        <p className='mx-auto text-center col-8'>
          Картельные сговоры не допускают ситуации, при которой непосредственные
          участники технического прогресса могут быть описаны максимально
          подробно.
        </p>
      </div>

      <div className='gap-3 gap-lg-0 row d-flex justify-content-lg-between justify-content-center w-100'>
        <div className='gap-3 p-3 card d-flex justify-content-start custom-card'>
          <div className='ml-3 card-image-top'>
            <img src={Icon} alt='img' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Брендинг от А до Я</h5>
            <p className='card-text'>
              Господа, постоянный количественный рост и сфера нашей активности
              предопределяет высокую востребованность.
            </p>
          </div>
        </div>
        <div className='gap-3 p-3 card d-flex justify-content-start custom-card'>
          <div className='ml-3 card-image-top'>
            <img src={Icon} alt='img' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Веб-дизайн</h5>

            <p className='card-text'>
              Противоположная точка зрения подразумевает, что акционеры
              крупнейших компаний, инициированные исключительно.
            </p>
          </div>
        </div>
        <div className='gap-3 p-3 card d-flex justify-content-start custom-card'>
          <div className='ml-3 card-image-top'>
            <img src={Icon} alt='img' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>SMM Продвижение </h5>
            <p className='card-text'>
              Как уже неоднократно упомянуто, сторонники тоталитаризма в науке
              представляют собой не что иное, как.
            </p>
          </div>
        </div>
        <div className='gap-3 p-3 card d-flex justify-content-start custom-card'>
          <div className='ml-3 card-image-top'>
            <img src={Icon} alt='img' />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              Безусловно, начало повседневной работы по.
            </h5>
            <p className='card-text'>
              Разнообразный и богатый опыт говорит нам, что выбранный нами
              инновационный путь прекрасно подходит для.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Static
