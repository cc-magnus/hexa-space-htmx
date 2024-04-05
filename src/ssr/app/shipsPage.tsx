import {FC} from "hono/jsx";
import {Layout} from './layout';

import {ShipWithClaps} from '../../bounded_contexts/space-ship-store-front/domain/ShipWithClaps';
import {ShipComponentHTMX} from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component.htmx";

type ShipsPageProps = {
    shipsWithClaps: ShipWithClaps[]
}

export const ShipsPage: FC<ShipsPageProps> = ({shipsWithClaps}) => {
    return <Layout>
        <div className="ship-catalogue">
            {shipsWithClaps.map((ship) => (<ShipComponentHTMX ship={ship}/>))}
        </div>
    </Layout>
}
