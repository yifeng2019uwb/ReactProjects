import { useState } from "react";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";

const initPlaces = [
    {id : 0, name: "Egypt"  },
    {id : 1, name: "Japan"  },
    {id : 2, name: "Mexico" },
]

let nextId = 3;

function Place() {
    const [places, setPlace] = useState(initPlaces)
    const [total, setTotal] = useState(nextId);
    const [packed, setPacked] = useState(1);

    function handleAddPlace(place) {
        setTotal(total + 1);
        setPlace([
            ...places,
            {
                id: nextId++,
                name: place
            }
        ]);
    }

    function handleDeletePlace(placeId) {
        setTotal(total - 1);
        setPlace(
            places.filter(place => place.id !== placeId)
        );
    }

    function handleChangePlace(nextPlace) {
        if (nextPlace.packed) {
          setPacked(packed + 1);
        } else {
          setPacked(packed - 1);
        }
        setPlace(places.map(item => {
          if (item.id === nextPlace.id) {
            return nextPlace;
          } else {
            return item;
          }
        }));
      }

    return (
        <>
        <AddPlace
            onAddPlace={handleAddPlace}
        />
        <PlaceList
            places={places}
            onChangePlace={handleChangePlace}
            onDeletePlace={handleDeletePlace}
        />
        <hr />

        </>
      );
}

export default Place;