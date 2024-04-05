import {FC} from "hono/jsx";
import {Layout} from './layout';

import {ShipWithClaps} from '../../bounded_contexts/space-ship-store-front/domain/ShipWithClaps';

type ShipsPageProps = {
    shipsWithClaps: ShipWithClaps[]
}

export const ShipsPage: FC<ShipsPageProps> = ({shipsWithClaps}) => {
    return <Layout>{shipsWithClaps.map(({name}) => (<p>{name}</p>))}</Layout>

}

