export default {
  editor: {
    label: {
      en: 'Hover Card',
      fr: 'Carte au Survol'
    },
    icon: 'info'
  },
  triggerEvents: [
    {
      name: 'open',
      label: { en: 'On open', fr: 'À l\'ouverture' },
      event: {}
    },
    {
      name: 'close',
      label: { en: 'On close', fr: 'À la fermeture' },
      event: {}
    },
    {
      name: 'link-click',
      label: { en: 'On link click', fr: 'Au clic sur lien' },
      event: {
        link: {},
        index: 0
      }
    }
  ],
  properties: {
    trigger: {
      label: { en: 'Trigger', fr: 'Déclencheur' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'hover', label: { en: 'Hover', fr: 'Survol' } },
          { value: 'focus', label: { en: 'Focus', fr: 'Focus' } }
        ]
      },
      defaultValue: 'hover',
      bindable: true
    },
    side: {
      label: { en: 'Side', fr: 'Côté' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top', label: { en: 'Top', fr: 'Haut' } },
          { value: 'right', label: { en: 'Right', fr: 'Droite' } },
          { value: 'bottom', label: { en: 'Bottom', fr: 'Bas' } },
          { value: 'left', label: { en: 'Left', fr: 'Gauche' } }
        ]
      },
      defaultValue: 'bottom',
      bindable: true
    },
    align: {
      label: { en: 'Align', fr: 'Alignement' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'start', label: { en: 'Start', fr: 'Début' } },
          { value: 'center', label: { en: 'Center', fr: 'Centre' } },
          { value: 'end', label: { en: 'End', fr: 'Fin' } }
        ]
      },
      defaultValue: 'center',
      bindable: true
    },
    openDelay: {
      label: { en: 'Open delay (ms)', fr: 'Délai d\'ouverture (ms)' },
      type: 'Number',
      defaultValue: 700,
      bindable: true
    },
    closeDelay: {
      label: { en: 'Close delay (ms)', fr: 'Délai de fermeture (ms)' },
      type: 'Number',
      defaultValue: 300,
      bindable: true
    },
    offset: {
      label: { en: 'Offset (px)', fr: 'Décalage (px)' },
      type: 'Number',
      defaultValue: 4,
      bindable: true
    },
    triggerText: {
      label: { en: 'Trigger text', fr: 'Texte de déclenchement' },
      type: 'Text',
      defaultValue: 'Hover me',
      bindable: true
    },
    title: {
      label: { en: 'Title', fr: 'Titre' },
      type: 'Text',
      bindable: true
    },
    description: {
      label: { en: 'Description', fr: 'Description' },
      type: 'Text',
      bindable: true
    },
    username: {
      label: { en: 'Username', fr: 'Nom d\'utilisateur' },
      type: 'Text',
      bindable: true
    },
    content: {
      label: { en: 'Content', fr: 'Contenu' },
      type: 'LongText',
      bindable: true
    },
    htmlContent: {
      label: { en: 'HTML content', fr: 'Contenu HTML' },
      type: 'LongText',
      bindable: true
    },
    footer: {
      label: { en: 'Footer', fr: 'Pied de page' },
      type: 'Text',
      bindable: true
    },
    avatarSrc: {
      label: { en: 'Avatar image URL', fr: 'URL de l\'image avatar' },
      type: 'Text',
      bindable: true
    },
    avatarAlt: {
      label: { en: 'Avatar alt text', fr: 'Texte alt de l\'avatar' },
      type: 'Text',
      bindable: true
    },
    avatar: {
      label: { en: 'Avatar icon', fr: 'Icône avatar' },
      type: 'Icon',
      bindable: true
    },
    stats: {
      label: { en: 'Stats', fr: 'Statistiques' },
      type: 'Array',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              label: {
                label: { en: 'Label', fr: 'Libellé' },
                type: 'Text',
                bindable: true
              },
              value: {
                label: { en: 'Value', fr: 'Valeur' },
                type: 'Text',
                bindable: true
              }
            }
          }
        }
      },
      bindable: true
    },
    links: {
      label: { en: 'Links/Actions', fr: 'Liens/Actions' },
      type: 'Array',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              label: {
                label: { en: 'Label', fr: 'Libellé' },
                type: 'Text',
                bindable: true
              },
              icon: {
                label: { en: 'Icon', fr: 'Icône' },
                type: 'Icon',
                bindable: true
              },
              variant: {
                label: { en: 'Variant', fr: 'Variante' },
                type: 'TextSelect',
                options: {
                  options: [
                    { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
                    { value: 'outline', label: { en: 'Outline', fr: 'Contour' } },
                    { value: 'ghost', label: { en: 'Ghost', fr: 'Fantôme' } }
                  ]
                },
                defaultValue: 'default',
                bindable: true
              },
              closeOnClick: {
                label: { en: 'Close on click', fr: 'Fermer au clic' },
                type: 'OnOff',
                defaultValue: true,
                bindable: true
              }
            }
          }
        }
      },
      bindable: true
    },
    triggerClass: {
      label: { en: 'Trigger CSS class', fr: 'Classe CSS du déclencheur' },
      type: 'Text',
      bindable: true
    },
    triggerStyle: {
      label: { en: 'Trigger style', fr: 'Style du déclencheur' },
      type: 'Text',
      bindable: true
    },
    triggerContentClass: {
      label: { en: 'Trigger content CSS class', fr: 'Classe CSS du contenu du déclencheur' },
      type: 'Text',
      bindable: true
    },
    customClass: {
      label: { en: 'Card CSS class', fr: 'Classe CSS de la carte' },
      type: 'Text',
      bindable: true
    }
  }
} 