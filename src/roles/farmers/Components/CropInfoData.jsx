const CropInfoData = ({crop}) => {
    if(crop){
        return (
            <div>
            <section>
                
                <p>Crop Name: {crop.name}</p>
                <p>Crop Scientific Name: {crop.scientific_name}</p>
                <p>Optimal Growth period: {crop.growth_period}</p>
                <p>Optimal temperature: {crop.optimal_temperature}</p>
                <p>Optimal PH: {crop.optimal_ph}</p>
                <p>Crop description: {crop.description}</p>
            </section>
            </div>
        )
    }
}

export default CropInfoData