import React from "react"
import type { GetStaticProps, NextPage } from "next"
import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react"

const TheBeasts: NextPage = () => (
  <Box h="full" w="full" mt={4} zIndex={0} pl={5} pr={5} top={0} alignContent="center" mb="10em">
    <Heading as="h1" lineHeight={1} letterSpacing={1} mb={2}>
      The Beasts
    </Heading>
    <Text mb="5">
      The Valley of Tahlurin is populated with anthropomorphic Beasts, a collection of species
      spawned from an explosion of magical energy. Over time, these Beasts have divided into two
      main factions: Esher in the West and Valorin in the East.
    </Text>
    <Text mb="5">
      Beast tokens used to play games in the Beast Battle universe will have a core Beast. Each
      faction has six options of Beast Species to choose from.
    </Text>
    <Heading as="h2" fontSize="4xl" color="vividSkyBlue" lineHeight={1} letterSpacing={1} mb={2}>
      Esher
    </Heading>
    <Text mb="5">
      The State of Esher is a sprawling land of fertile soil and isolated villages ribbed with
      bubbling tributaries that flow from the great river to the west. Aligning the mountains around
      the northern and western sides are thick forests. There sits within this forest The Great
      Azure Tree around which the Esher faction thrives.
    </Text>
    <Text mb="5">
      As the division of Calad evolved, several attempts were made to settle in and around the Great
      Tree. It took the ingenuity of Sronbe to make it happen, though. Sronbe was a Rhino and the
      sister of Heannach the Charred, a charismatic leader within the community who was eventually
      murdered. All of Heannach&apos;s attempts to settle around the Great Tree were thwarted either
      by others in the community, or by the Natural Order&apos;s direct intervention. Still, Sronbe
      continued her work, using Heannach&apos;s murder as a catalyst for the final push to settle.
    </Text>
    <Text mb="5">
      Sronbe saw to it that dwellings were made within the boughs of the Great Tree as well as
      underneath, using the roots as a structure to build &apos;The Burrows&apos;. Sronbe and those
      around her settled the land and built a society that is respectful of the Natural Order.
    </Text>
    <Text mb="5">
      Esher is known for their agrarian lifestyle and their acceptance of most things Natural.
    </Text>
    <Heading as="h3">Crocodile</Heading>
    <Text mb="5">
      Crocs were often seen as outcasts before the Elder&apos;s Passing as their physiology made it
      difficult to accept her calming energy. Once she passed and the rise of the factions began,
      Crocs proved themselves an invaluable part of Esher&apos;s society.
    </Text>
    <Text mb="5">
      The Collapsed Bridge Dam, a vital piece of Esher&apos;s infrastructure, exists only because of
      a group of Crocs. Since their espionage collapsed the bridge, they have been protectors of it,
      and most of the waterways that traverse the western states.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Fighter type</ListItem>
    </UnorderedList>
    <Heading as="h3">Elephant</Heading>
    <Text mb="5">
      As much of Esher was built around the Great Azure Tree, there seemed little use for the heavy
      Elephants. Most goods can be transported along the waterways, and most dwellings exist either
      on or under the Great Tree.
    </Text>
    <Text mb="5">
      As Sronbe led her dedicated group, establishing Esher around the Great Tree, it was seen as
      impossible to build structures to support the large, great Elephants. It wasn&apos;t until
      Sronbe established a garrison at the base of The Tree and at the border of the nearby forests
      that she recognized the true value of her gargantuan friends.
    </Text>
    <Text mb="5">
      Elephants became the quintessential guardians of Esher. Their familial culture of honor and
      their desire to protect those around them made them invaluable. But, when Sronbe and Samaa,
      the great Elephant chief realized the Elephant&apos;s desire to traverse their great land it
      made them even more valuable.
    </Text>
    <Text mb="5">
      Since the inception of the Esherian Guard, the heavy thud of an Elephant&apos;s footfall have
      become a welcome sign to the farming villages of Esher. As they patrol their lands keeping
      others safe.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Tank type</ListItem>
    </UnorderedList>
    <Heading as="h3">Leopard</Heading>
    <Text mb="5">
      Even before the Elder&apos;s Passing, the Leopard families have been known for their even
      temperament and reserved ferocity. They are typically astute, aware, and known as patient
      watchers. Still, their grace and strength cannot be underestimated.
    </Text>
    <Text mb="5">
      As early as the first attempt to migrate from the Elder&apos;s Hub to the Great Azure Tree,
      Leopards were keen to join in. Their desire to traverse the limbs of the Great Azure Tree and
      their comfort within them made them naturally drawn to the Great Tree.
    </Text>
    <Text mb="5">
      Heannach brought a large group of Leopards with her on the first attempted settlement and her
      sister Sronbe followed suit. Leopards have been an established group in Esher since the
      earliest days.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Rogue type</ListItem>
    </UnorderedList>
    <Heading as="h3">Deer</Heading>
    <Text mb="5">
      Bounding throughout the lands of Esher there are countless deer maintaining the infrastructure
      of all things. Assuring order and and cohesion in a rural society and within the Great Tree
      and the Burrows as well, the Deer have found their niche.
    </Text>
    <Text mb="5">
      Between their ability to easily traverse the lands and their natural affinity to order and
      analysis, the Deer become the census takers, distributors of goods, and general custodians of
      the Beasts throughout Esher.{" "}
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Mage type</ListItem>
    </UnorderedList>
    <Heading as="h3">Wild Goat</Heading>
    <Text mb="5">
      During the time of the Amity Cover, the Wild Goats found themselves obsessively trying to look
      beyond their physical realm, into the depths of the Natural Order. As they did, however, they
      always came upon what they all described as a &apos;Wall of Yellow Honey&apos; in which their
      minds would stick.
    </Text>
    <Text mb="5">
      Following the Elder&apos;s Passing, this wall dissipated and the Wild Goats found themselves
      able to traverse the depths of the Natural Order. At first, it was overwhelming for the Wild
      Goats to enter this state of exploration as they were introduced to truths of their world
      which were hitherto unknown by the community. As they became more comfortable, however, they
      were able to discover the natural flow of energy that exists between the Natural and Physical
      Orders and how they, and all they interact with, are a crucial part of this.
    </Text>
    <Text mb="5">
      Wild Goats are naturally curious and exploratory creatures. As they found themselves exploring
      the possibility of a new life closer to a source of Natural energies: The Great Tree, they
      jumped on all opportunities to migrate away from what would be Calad. Over time, they became
      entrenched in the fabric of Esher. All Wild Goats that attempted to explore the State of
      Valorin find it rigid, cold, and disconnected.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Shaman type</ListItem>
    </UnorderedList>
    <Heading as="h3">Dog</Heading>
    <Text mb="5">
      As they are naturally playful, inquisitive, and loyal, the Dog families were well suited to
      Elder Whitestone&apos;s Amity Cover. They flourished under the harmonious leadership of the
      Ancient Tortoise and eventually were looked to as leaders within the community.
    </Text>
    <Text mb="5">
      Following the Elder&apos;s Passing, this status as leaders, loyal to their families and
      communities above all else, remained. Dogs, therefore, remained a stable group as the
      community transitioned away from the state of harmony into discontent and eventually outright
      conflict.
    </Text>
    <Text mb="5">
      If the Lions hadn&apos;t established themselves as the &apos;Noble Caste&apos; of Valorin so
      early on, it is likely that Dogs would have migrated to both communities with no ill will to
      the other. Lions, though, it seems, are seen as the antithesis of the Dog and the blood feud
      between the two has isolated Dogs into Esher.
    </Text>
    <Text mb="5">
      Still, their optimism and loyalty make them some of the most adept Beasts for change.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>All types</ListItem>
    </UnorderedList>
    <Heading as="h2" fontSize="4xl" color="vividSkyBlue" lineHeight={1} letterSpacing={1} mb={2}>
      Valorin
    </Heading>
    <Text mb="5">
      As Humbert looked around the fields of tall grass sprawled before him and his group, resting
      just below the base of the mountains to the east, his body could sense the Black Sand. He
      knew, somehow, that he would find it. He knew this was the spot. He jammed the wooden pole
      into the ground and announced to the others, &apos;This is it.&apos;
    </Text>
    <Text mb="5">
      As Bears are natural protectors, Humbert&apos;s next priorities were expected within the
      community: build defensive structures and equip defenders for the settlement. Humbert and the
      settlers of Valorin began working on these tasks and quickly set up a standing militia.
    </Text>
    <Text mb="5">
      Their primary source of food, as the Collapsed Bridge Dam had reduced the number of downstream
      fish to an unsustainable source, became the Great Southern Tree, a red counterpart to the
      Great Azure Fir. From this tree, red fruits were plentiful and the seemingly endless supply
      was quickly turned into all sorts of different food types. The Red Fruit became the staple for
      all Valorin barracks and homes.
    </Text>
    <Heading as="h3">Hippopotamus</Heading>
    <Text mb="5">
      One of the most welcoming Families, the Hippos are often known to be stable, honest, and
      always with a sense of whimsy. Their optimism was a natural part of the community during the
      Amity Cover, and even more so following the Elder&apos;s Passing.
    </Text>
    <Text mb="5">
      As conflict became more common and tensions rose, the Hippos found themselves being
      marginalized due to their optimism and welcoming spirit. Some of the more sinister citizens
      would take advantage of the massive Beasts, using the Hippos for their own gain.
    </Text>
    <Text mb="5">
      As Hippos are naturally welcoming Beasts, they were usually friendly with every other group.
      Still, their behavior and nature drew them most often to the whimsical Rabbits and supportive
      Bears. So, as Humbert and his groups travelled East, he and the Bears implored the Hippos to
      leave with them. Their strength and optimism, Humbert said, would make the settlement great.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Fighter type</ListItem>
    </UnorderedList>
    <Heading as="h3">Boar</Heading>
    <Text mb="5">
      Scattered about the Eastern Valley are pockets of sparsely vegetated, briar-laden landscapes
      called the Torams. Before the Boars came to Valorin, these were typically avoided as they were
      seemingly dry and barren.
    </Text>
    <Text mb="5">
      Tribes of Boars led by Crauh found their way East as the conflicts within Calad grew. As they
      migrated, they began settling the Torams they found, burrowing shallow homes as they
      travelled. Eventually the Crauh and the tribes found Valorin. Along the southern wall there
      was a massive area of Torams for the Boars to settle in. This is where they found the pockets
      of Black Sand scattered throughout.
    </Text>
    <Text mb="5">
      Mining Torams for Black and Grey Sand became a critical part of Valorin&apos;s growth.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Tank type</ListItem>
    </UnorderedList>
    <Heading as="h3">Tiger</Heading>
    <Text mb="5">
      Potentially the most naturally predatory family, the Tigers were one of the most difficult
      Families to assuage by the Amity Cover. As soon as the cover fall, Tigers began to realize
      their true nature and found it difficult to remain in Calad.
    </Text>
    <Text mb="5">
      As they moved outside the main community, they found themselves in the Eastern Valley more
      than anywhere else. So, as Humbert and the groups that followed began making their way across
      the Valley, the Tigers became a common sight. Tigers were naturally solitary creatures, more
      so than all other Families, so they were at first unwilling to settle with the groups. Yet,
      over time, as the trips to and from Calad became more taxing and more dangerous, the Tigers
      found themselves in Valorin more and more. Eventually, they had unintentionally settled in as
      part of the Valorin ecosystem, often bringing meat for others to trade.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Ranger type</ListItem>
    </UnorderedList>
    <Heading as="h3">Rabbit</Heading>
    <Text mb="5">
      Rabbits were always clever, always patient, and always full of whimsy. Still, before the
      Elder&apos;s Passing they were often overlooked as their natural affinity for accessing the
      Threads of Fate and their proclivity for manipulating the Physical Order were subdued by the
      Amity Cover. Upon the Elder&apos;s Passing, however, all Rabbits within the community felt a
      sort of awakening course through them.
    </Text>
    <Text mb="5">
      Much in the vein of the Wild Goats, the Rabbits found themselves discovering new
      possibilities, a new understanding of how the world around them functioned. They felt the
      Physical Order as they never had before. They began to understand how energies flowed through
      world around them. And they began manipulating these energies.
    </Text>
    <Text mb="5">
      The natural friendships that existed for generations between Rabbits and Hippos became even
      stronger. As both were always looking to the whimsical side of things, the two unlikely
      Families were often together. Upon the Rabbits finding their affinity to the Physical Order,
      they flocked closer to the Hippos.
    </Text>
    <Text mb="5">
      As Rabbits were overlooked before the Elder&apos;s Passing, their newfound powers and new
      understanding started to cause fear in other groups. The Hippos, however, knew the true nature
      of the Rabbits. As others saw them as sinister, the Hippos knew they were simply quirky and
      curious. As the Hippos began migrating to Humbert&apos;s new settlement, so too did the
      Rabbits join them.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Warlock type</ListItem>
    </UnorderedList>
    <Heading as="h3">Bear</Heading>
    <Text mb="5">
      Humbert and the settlers joining him included the vast majority of Bears from Calad. As Bears
      are generally known to be protectors and mediators, the unfettered rise of tensions and
      conflict within Calad became too much for them. Humbert offered an opportunity to escape what
      they found intolerable as they saw the division of the families to be too great to mend.
    </Text>
    <Text mb="5">The Eastern Valley was a natural fit for the Bears. </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>Paladin type</ListItem>
    </UnorderedList>
    <Heading as="h3">Lion</Heading>
    <Text mb="5">
      Upon the Elder&apos;s Passing and subsequent release of the Amity Cover, there began a
      revelation by those within the community that their previously quelled baser needs were being
      subdued. As the primal aspects of the Beasts began rising to view within the community, a
      brief period of chaos ensued where society nearly devolved into its most primal state.
    </Text>
    <Text mb="5">
      Out of this, the Lions and the Dogs were able to push for the groups to cease their descent.
      As Lions and Dogs continued, they began to conflict over how the community should be led. Both
      groups became the de facto rulers and were often looked upon to settle disputes. Their
      difference in temperaments, however, led to a conflict at the top layer.
    </Text>
    <Text mb="5">
      Lions sought a new opportunity to establish the community they deemed worthy. They joined
      Humbert as he explored and settled Valorin alongside him.
    </Text>
    <Heading as="h4">Future States:</Heading>
    <UnorderedList mt="2" mb="5" ml="6">
      <ListItem>All types</ListItem>
    </UnorderedList>
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  }
}

export default TheBeasts
