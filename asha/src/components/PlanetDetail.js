import { useEffect } from "react"
import { useParams } from "react-router-dom"

const PlanetDetail = ({onePlanet, getOnePlanet}) => {

    const { planetId } = useParams()

    useEffect (() => {
        // console.log(planetId)
        getOnePlanet(planetId)
    },[planetId])

    return (
        <>
        <h1>{onePlanet.Planet}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis nisi nec urna ultrices, gravida dictum nulla pretium. Suspendisse pharetra quam vitae lobortis pulvinar. Donec non dictum orci. Proin non bibendum nisl. Donec dapibus eu dui porta vehicula. Aliquam egestas consequat turpis eu tempus. Quisque quis euismod ante, et pellentesque tortor. Quisque eget ullamcorper nibh. Curabitur tempor tellus sed augue vestibulum dignissim. Donec at felis lectus. Quisque tristique faucibus cursus. Mauris varius tellus quis odio posuere bibendum. Donec ornare magna vel turpis fringilla blandit. Nam et turpis non quam hendrerit tincidunt et quis ante. Aenean sed est eu eros dapibus posuere.</p>
        <p>Ut cursus nunc quis turpis vulputate posuere. Nunc ut magna ut felis pellentesque cursus at et ligula. Curabitur blandit ex et mauris blandit, eu interdum augue maximus. Vivamus volutpat ex vitae ipsum pulvinar, sit amet interdum libero varius. Praesent nisl sapien, fringilla in porta sit amet, rutrum quis odio. In hac habitasse platea dictumst. Nunc id urna non nibh gravida tempor. Mauris erat tellus, dictum non dictum pretium, sodales nec ipsum. Phasellus faucibus ornare ligula laoreet iaculis. Phasellus tempor est metus, vel blandit nibh hendrerit at. Nulla accumsan diam et sodales hendrerit. Pellentesque a tellus rhoncus, laoreet elit nec, gravida metus. Aliquam in justo vitae justo finibus sodales sit amet et nisl.</p>
        <p>Mauris quis felis tellus. Nulla facilisi. Praesent sit amet ligula urna. Mauris et velit quis turpis dignissim gravida. Quisque dictum porta ante vel fermentum. Nunc purus sapien, vulputate sit amet nisi id, fringilla lobortis neque. Nam felis diam, aliquet quis risus ac, auctor scelerisque lorem. Vestibulum pharetra egestas sodales. Duis magna nisi, fermentum a pharetra in, lobortis ac turpis. Vestibulum hendrerit mauris sed condimentum euismod. Phasellus ultricies tincidunt vestibulum.</p>
        </>
    )
}
export default PlanetDetail