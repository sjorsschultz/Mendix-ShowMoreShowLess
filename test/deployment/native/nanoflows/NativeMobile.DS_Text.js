import { addEnumerations, t } from "mendix/native";

export const DS_Text = {
  "name": "NativeMobile.DS_Text",
  "instructions": [
    {
      "type": "createObject",
      "label": "37e1f0a5-0886-44a1-b45a-457af3eecdd8",
      "objectType": "NativeMobile.Entity",
      "outputVar": "NewEntity"
    },
    {
      "type": "changeObject",
      "inputVar": "NewEntity",
      "member": "Text",
      "value": {
        "type": "literal",
        "value": "Oekraïne heeft al maanden bijna dagelijks te lijden onder nachtelijke luchtaanvallen , waarbij Rusland honderden drones en raketten gebruikt. De Russen proberen de Oekraïense energie- en warmte-infrastructuur op systematische wijze plat te leggen tijdens de naderende winter.\n\nDe grootste prioriteit voor de Oekraïense regering ligt dan ook bij luchtverdediging. Het land wil vooral meer Amerikaanse Patriots. Dat is een geavanceerd wapensysteem dat raketten gebruikt om vijandelijke vliegtuigen en raketten te onderscheppen.\n\nDe Oekraïense president Volodymyr Zelensky maakte vorige week bekend dat zijn land en de Verenigde Staten een contract voorbereiden voor de verkoop van 25 Patriot-systemen aan Oekraïne. Probleem is dat Oekraïne achteraan in de rij moet aansluiten. Het kan jaren duren voordat Kyiv de systemen ontvangt.\n\nEen ander nadeel van de Patriot zijn de hoge kosten. Met geschatte kosten van 3,5 miljoen euro is een Patriot-raket een dure manier om een Russische Shahed-drone van een geschatte 60.000 euro uit de lucht te schieten. De aanschafprijs van een compleet Patriot-systeem ligt rond 1 miljard euro."
      }
    },
    {
      "type": "return",
      "label": "94329742-87b3-41a9-b703-9e4bd335a9fe",
      "result": {
        "type": "variable",
        "variable": "NewEntity"
      },
      "resultKind": "object"
    }
  ]
};
