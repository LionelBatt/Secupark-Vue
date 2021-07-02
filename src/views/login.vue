<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height custom" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12" :loading="loading">
              <template slot="progress">
                <v-progress-linear
                    color="green darken-3"
                    height="10"
                    indeterminate
                ></v-progress-linear>
              </template>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 text--black">Connection</h1>
                        <h4 class="text-center mt-4">Veuillez remplir ce formulaire pour vous connecter.</h4>
                      <v-form ref="form" v-model="valid" lazy-validation
                      @submit.prevent="handleLogin">
                          <br>
                          <br>
                          <v-text-field
                              v-model="user.email"
                              :rules="emailRules"
                              label="Email"
                              name="Email"
                              type="text"
                              color="blue darken-4"
                          />
                          <v-text-field
                              v-model="user.password"
                              :rules="passrule"
                              id="password"
                              label="Password"
                              name="password"
                              type="password"
                              color="blue darken-4"
                          />
                          <div class="text-center mt-3">
                            <br>
                            <br>
                            <v-btn color="success" dark type="submit">Se connecter</v-btn>
                          </div>
                        <div class="text-center mt-3">
                          <br>
                          <br>
                          <v-btn color="success" dark @click="forgot">Mot de passe oublié ?</v-btn>
                        </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="white">
                      <v-img
                          class="white--text align-end"
                          height="300px"
                          src="../assets/logo1.png"></v-img>
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center display-1">Bonjour</h1>
                        <h5
                            class="text-center"
                        >Vous n'avez pas encore de compte inscrivez vous </h5>
                        <br>
                        <div class="text-center">
                          <v-btn class="blue darken-4 white--text" @click="step++">S'enregistrer</v-btn>
                          <br>
                          <br>
                          <v-btn class="blue darken-4 white--text" @click="goHome">Accueil</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="white">
                      <v-img
                          class="white--text align-end"
                          height="300px"
                          src="../assets/logo1.png"></v-img>
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                            class="text-center"
                        >Vous avez deja un compte connctez-vous ici </h5>
                        <br>
                        <div class="text-center">
                          <v-btn class="blue darken-4 white--text" @click="step--">Se connecter</v-btn>
                          <br>
                          <br>
                          <v-btn class="blue darken-4 white--text" @click="goHome">Accueil</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 text--black">S'inscrire</h1>
                        <h4 class="text-center mt-4">Veuillez remplir ce formulaire pour vous inscrire.</h4>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation                         
                          >
                          <v-container>
                            <v-row>
                              <v-col
                                  cols="12"
                                  md="4"
                              >
                                <v-text-field
                                    v-model="register.firstname"
                                    :rules="nameRules"
                                    label="Nom"
                                    required
                                ></v-text-field>
                              </v-col>

                              <v-col
                                  cols="12"
                                  md="4"
                              >
                                <v-text-field
                                    v-model="register.lastname"
                                    :rules="nameRules"
                                    label="Prénom"
                                    required
                                ></v-text-field>
                              </v-col>

                              <v-col
                                  cols="12"
                                  md="4"
                              >
                                <v-text-field
                                    v-model="register.email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                          <v-text-field
                              v-model="register.adresse"
                              :rules="adresseRules"
                              label="Adresse"
                              required
                          ></v-text-field>

                          <v-text-field
                              v-model="register.password"
                              :counter="8"
                              :rules="passrule"
                              label="Mot de passe "
                              required
                          ></v-text-field>

                          <v-text-field
                              v-model="confirmPassword"
                              :counter="8"
                              :rules="passrule"
                              label="Confirmation mot de passe "
                              required
                          ></v-text-field>

                          <v-checkbox
                              v-model="checkbox"
                              :rules="[v => !!v || 'Vous devez acceptez les CGU pour continueer']"
                              label="j'accepte les conditions d'utilisation"
                              required
                          ></v-checkbox>
                          <v-btn
                              :disabled="!valid"
                              color="success"
                              class="mr-4"
                              type="submit" 
                              @click="handleRegister"
                          >
                            Valider
                          </v-btn>
                          <v-btn
                              color="error"
                              class="mr-4"
                              @click="reset"
                          >
                            Reset
                          </v-btn>
                            <v-dialog
                                v-model="dialog"
                                width="600px"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    outlined
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                  Mentions légales
                                </v-btn>
                              </template>
                              <v-card>
                                <v-card-title>
                                  <span class="text-h5">Mentions légales</span>
                                </v-card-title>
                                <v-card-text>
                                  <h2>Définitions</h2>
                                  <p><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.<br>
                                    <b>Prestations et Services :</b> <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> met à disposition des Clients :</p>

                                  <p><b>Contenu :</b> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>

                                  <p><b>Informations clients :</b> Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>


                                  <p><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnommé.</p>
                                  <p><b>Informations personnelles :</b> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                                  <p>Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                                  <h2>1. Présentation du site internet.</h2>
                                  <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                                  </p><p><strong>Propriétaire</strong> :   BATT LIONEL   – 9 Ruue victor hugo 92400 COURBEVOIE<br>

                                  <strong>Responsable publication</strong> : BATT LIONEL – lionel.batt@epsi.fr<br>
                                  Le responsable publication est une personne physique ou une personne morale.<br>
                                  <strong>Webmaster</strong> : BATT Lionel – lionel.batt@epsi.fr<br>
                                  <strong>Hébergeur</strong> : ovh – 2 rue Kellermann 59100 Roubaix 1007<br>
                                  <strong>Délégué à la protection des données</strong> : BATT Lionel – lionel.batt@epsi.fr<br>
                                </p>

                                  <div ng-bind-html="linkHTML"><p>Les mentions légales sont issues du modèle proposé par le  <a href="https://fr.orson.io/1371/generateur-mentions-legales" title="générateur gratuit offert par Orson.io">générateur gratuit offert par Orson.io</a></p></div>



                                  <h2>2. Conditions générales d’utilisation du site et des services proposés.</h2>

                                  <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables.
                                    Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>

                                  <p>L’utilisation du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> sont donc invités à les consulter de manière régulière.</p>

                                  <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
                                    Le site web <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est mis à jour régulièrement par <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>

                                  <h2>3. Description des services fournis.</h2>

                                  <p>Le site internet <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> a pour objet de fournir une information concernant l’ensemble des activités de la société.
                                    <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> s’efforce de fournir sur le site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

                                  <p>Toutes les informations indiquées sur le site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

                                  <h2>4. Limitations contractuelles sur les données techniques.</h2>

                                  <p>Le site utilise la technologie JavaScript.

                                    Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
                                    Le site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                                  <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>

                                  <h2>5. Propriété intellectuelle et contrefaçons.</h2>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.
                                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>.</p>

                                  <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

                                  <h2>6. Limitations de responsabilité.</h2>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> agit en tant qu’éditeur du site. <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>  est responsable de la qualité et de la véracité du Contenu qu’il publie. </p>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>.
                                    Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>

                                  <h2>7. Gestion des données personnelles.</h2>

                                  <p>Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). </p>

                                  <h3>7.1 Responsables de la collecte des données personnelles</h3>

                                  <p>Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : BATT LIONEL. <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>est représenté par BATT LIONEL, son représentant légal</p>

                                  <p>En tant que responsable du traitement des données qu’il collecte, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.
                                    Chaque fois que <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> traite des Données Personnelles, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> les traite.</p>

                                  <h3>7.2 Finalité des données collectées</h3>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est susceptible de traiter tout ou partie des données : </p>

                                  <ul>

                                    <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc. </li>

                                    <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé) </li>

                                    <li>pour améliorer la navigation sur le Site : données de connexion et d’utilisation </li>

                                    <li>pour mener des enquêtes de satisfaction facultatives sur <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> : adresse email </li>
                                    <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</li>


                                  </ul>

                                  <p><a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.</p>

                                  <h3>7.3 Droit d’accès, de rectification et d’opposition</h3>

                                  <p>
                                    Conformément à la réglementation européenne en vigueur, les Utilisateurs de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> disposent des droits suivants : </p>
                                  <ul>

                                    <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite </li>

                                    <li>droit de retirer à tout moment un consentement (article 13-2c RGPD) </li>

                                    <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD) </li>

                                    <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) </li>

                                    <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) </li>

                                    <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné</li>
                                  </ul>

                                  <p>Dès que <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>

                                  <p>Si l’Utilisateur souhaite savoir comment <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> par écrit à l’adresse suivante : </p>

                                  BATT LIONEL – DPO, BATT Lionel <br>
                                  9 Ruue victor hugo 92400 COURBEVOIE.

                                  <p>Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport). </p>

                                  <p>
                                    Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>

                                  <h3>7.4 Non-communication des données personnelles</h3>

                                  <p>
                                    <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                                  <p>
                                    <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ne collecte aucune « données sensibles ».</p>

                                  <p>
                                    Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
                                  <p>
                                    Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> sont principalement les agents de notre service client.</p>

                                  <div ng-bind-html="rgpdHTML"></div>


                                  <h2>8. Notification d’incident</h2>
                                  <p>
                                    Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue.
                                    Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
                                  <p>
                                    Aucune information personnelle de l'utilisateur du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>.</p>

                                  <h3>Sécurité</h3>

                                  <p>
                                    Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe. </p>

                                  <p>
                                    Lors du traitement des Données Personnelles, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>

                                  <h2>9. Liens hypertextes « cookies » et balises (“tags”) internet</h2>
                                  <p>
                                    Le site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>. Cependant, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
                                  Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.
                                  <p></p>

                                  <h3>9.1. « COOKIES »</h3>
                                  <p>
                                    Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</p>
                                  <p>
                                    <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</p>
                                  <p>
                                    Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
                                  <p>
                                    Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
                                  <p>
                                    Le cas échéant, <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
                                  <p>
                                    À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</p>
                                  <p>
                                    Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
                                  <p>
                                    Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> dépose ce type de cookies.</p>

                                  <h3>Article 9.2. BALISES (“TAGS”) INTERNET</h3>


                                  <p>

                                    <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.</p>

                                  <p>
                                    Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci.
                                  </p>
                                  <p>
                                    Cette technologie permet à <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur. </p>
                                  <p>
                                    Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a>, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</p>
                                  <p>
                                  </p><h2>10. Droit applicable et attribution de juridiction.</h2>
                                  <p>
                                    Tout litige en relation avec l’utilisation du site <a href="https://secuparkepsi.herokuapp.com">https://secuparkepsi.herokuapp.com</a> est soumis au droit français.
                                    En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Courbevoie</p>
                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                      color="green darken-1"
                                      text
                                      @click="dialog = false"
                                  >Fermer
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                        </v-form>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import User from '../models/user';
import register from "../models/register";

export default {
  data: () => ({
    user: new User('', ''),
    register:new register('','','','',''),
    dialog: false,
    step: 1,
    loading: false,
    valid: true,
    nameRules: [
      v => !!v || 'Ce champs est requis',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    adresseRules: [
      v => !!v || 'Ce champs est requis',
    ],
    confirmPassword: '',
    passrule: [
      v => !!v || 'Mot de passe requis',
      v => (v && v.length <= 8) || 'le mot de passe doit fair au moins 8 caractère',
    ],
    emailRules: [
      v => !!v || 'Ce champs est requis',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    checkbox: false,
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/UserDashboard');
    }
  },

  methods: {
      goHome () {
        this.$router.replace('/home')
      },
    forgot () {
      this.$router.replace('/forgotPassword')
    },
      validate () {
        this.$refs.form.validate()
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      reset () {
        this.$refs.form.reset()
      },
    handleLogin() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000)
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/UserDashboard');
              },
              error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
              }
          );
        }
      },
      handleRegister() {
      this.message = '';
      this.submitted = true;
        this.$refs.form.validate()
          this.$store.dispatch('auth/register', this.register).then(
            data => {
              // eslint-disable-next-line no-console
              console.log(this.user);
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
      },
    }
  }
</script>
<style>
.custom {
  background-image: url("../assets/parking.jpg");
}
</style>
