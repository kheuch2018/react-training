import Cours from './components/Cours'
import Lampe from './components/Lampe'

const Faty = () => {

    return (
        <div>
            <h1>Hello From Dior</h1>
            <div style={{display: 'flex'}}>
                <Cours title='Deep Learning' />
                <Cours/>
                <Cours/>
            </div>
            
           

        </div>

        
    )
}

export default Faty