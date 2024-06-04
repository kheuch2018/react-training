
const Cours = ({title='Machine Learning',author,profession, note, prixCours}) => {
    
    return(
        <div style={{marginLeft: 5}}>
             <div style={{width:400}}>
                <img style={{width: 400, height: 220}} src="https://img-b.udemycdn.com/course/240x135/4621934_5f73_3.jpg"  />
                <h1 style={{fontSize: 18}}>{title}</h1>
                <p style={{color: '#757575'}}>Thibaud Houdon | Développeur python</p>
                <p>5 <span style={{color: 'orange', fontWeight: 'bold'}}>* * * * *</span> (9300)</p>
                <p style={{fontWeight: 'bold', fontSize: 20}}>13,99 $US</p>
             </div>
        </div>
    )
}

export default Cours;

