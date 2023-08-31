import { useState } from 'react'
import ColorsGeneration from './ColorGeneration'
import TextGeneration from './TextGeneration'

const features = [
    {
        id: 1,
        feature: 'Color Generation',
        component: <ColorsGeneration />,
    },
    {
        id: 2,
        feature: 'Text Generation',
        component: <TextGeneration />,
    },
]

function App() {
    const [currentItem, setCurrentItem] = useState(0)

    return (
        <section className='features-center'>
            <div className='btn-container'>
                {features.map((item, index) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => setCurrentItem(index)}
                            className={
                                index === currentItem
                                    ? 'feature-btn active-btn'
                                    : 'feature-btn'
                            }
                        >
                            {item.feature}
                        </button>
                    )
                })}
            </div>
            <article
                className='feature-info'
                key={features[currentItem].id}
            >
                {features[currentItem].component}
            </article>
        </section>
    )
}

export default App
