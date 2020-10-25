import { string, integer } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class Pet extends Resource {

    @integer
    id = 1

    @string
    name = ""

    static getPet(){
        return new Pet({ 
            id: 1,
            name: 'Tess'
        })
    }

}