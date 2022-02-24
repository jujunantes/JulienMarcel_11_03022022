import { useState, useEffect } from 'react'

export function useFetch(adresse, indexLogement) {
  const [donnees, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [erreur, seterreur] = useState(false)

  useEffect(() => {
    if (!adresse) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(adresse,{
            headers : { // Nécessaire quand les données ne sont pas servies par un serveur
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
           })
        const donnees = await response.json()
        if(indexLogement == null){
            setData(donnees)
        }
        else {
            if((indexLogement < 0) || (indexLogement > (Object.keys(donnees).length - 1)) ) {
                seterreur(true)
            }
            else {setData(donnees[indexLogement])}
        }
      } catch (err) {
        console.log(err)
        seterreur(true)
      } finally {
        setLoading(false)
      }
    }
    if(adresse !== ''){
        fetchData()
    }
  }, [adresse, indexLogement])
  return { isLoading, donnees, erreur }
}