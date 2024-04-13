const CropInfoData = ({crop}) => {
    if(crop){
        return (
            <div>
            <section>
                <h2>Crop Information</h2>
                <p>Crop Name: {crop.name}</p>
                <p>Crop Type: {crop.scientific_name}</p>
                <p>Optimal Temperature: {crop.growth_period}</p>
                <p>Optimal PH: {crop.optimal_temperature}</p>
                <p>Optimal Humidity: {crop.optimal_ph}</p>
                <p>Optimal Light: {crop.description}</p>
            </section>
            </div>
        )
    }
}

export default CropInfoData