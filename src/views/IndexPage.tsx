import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const {drinks} = useAppStore()

  const hasDtrinks = useMemo(() => drinks.drinks.length > 0, [drinks])

  return (
    <>
    <h1 className="text-4xl md:text-6xl font-extrabold">Recetas</h1>
    {hasDtrinks ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
        {drinks.drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
          />
        ))}
      </div>
    ) : (<p className="my-10 text-center text-2xl">
          No hay resultados aún, utiliza el formulario para buscar recetas
    </p>)}
    </>
  )
}