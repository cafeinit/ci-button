<template lang="pug">
  div.view-app
    h2.app-title Button

    ci-block
      ci-block-header(title="Button")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Common
              ci-button(text="DEFAULT")
              ci-button(color="primary" text="PRIMARY")
              ci-button(color="secondary" text="SECONDARY")

              //- ci-button(modifier="flat radius border" text="DEFAULT")
              //- ci-button(color="primary" modifier="fab border" text="DEFAULT")

            ci-list-cell
              h4 Radius
              ci-button(modifier="radius" text="DEFAULT")
              ci-button(modifier="radius" color="primary" text="PRIMARY")
              ci-button(modifier="radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Border
              ci-button(modifier="border" text="DEFAULT")
              ci-button(modifier="border" color="primary" text="PRIMARY")
              ci-button(modifier="border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Raised
              ci-button(modifier="raised border" text="DEFAULT")
              ci-button(modifier="raised border" color="primary" text="PRIMARY")
              ci-button(modifier="raised border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 All Style
              ci-button(modifier="border radius raised" text="DEFAULT")
              ci-button(modifier="border radius raised" color="primary" text="PRIMARY")
              ci-button(modifier="border radius raised" color="secondary" text="SECONDARY")


    ci-block
      ci-block-header(title="Flat Button")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Common
              ci-button-flat(text="DEFAULT")
              ci-button-flat(color="primary" text="PRIMARY")
              ci-button-flat(color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Radius
              ci-button-flat(modifier="radius" text="DEFAULT")
              ci-button-flat(modifier="radius" color="primary" text="PRIMARY")
              ci-button-flat(modifier="radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Border
              ci-button-flat(modifier="border" text="DEFAULT")
              ci-button-flat(modifier="border" color="primary" text="PRIMARY")
              ci-button-flat(modifier="border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Raised
              ci-button-flat(modifier="raised border" text="DEFAULT")
              ci-button-flat(modifier="raised border" color="primary" text="PRIMARY")
              ci-button-flat(modifier="raised border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 All Style
              ci-button-flat(modifier="border radius raised" text="DEFAULT")
              ci-button-flat(modifier="border radius raised" color="primary" text="PRIMARY")
              ci-button-flat(modifier="border radius raised" color="secondary" text="SECONDARY")


    ci-block
      ci-block-header(title="Button Size")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Small
              ci-button(modifier="radius" size="small" text="DEFAULT")
              ci-button(modifier="radius" color="primary" size="small" text="PRIMARY")
              ci-button(modifier="radius" color="secondary" size="small" text="SECONDARY")

            ci-list-cell
              h4 Normal
              ci-button(modifier="radius" text="DEFAULT")
              ci-button(modifier="radius" color="primary" text="PRIMARY")
              ci-button(modifier="radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Big
              ci-button(modifier="radius" size="big" text="DEFAULT")
              ci-button(modifier="radius" color="primary" size="big" text="PRIMARY")
              ci-button(modifier="radius" color="secondary" size="big" text=" SECONDARY")


    ci-block
      ci-block-header(title="Floating Action Button")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Normal
              ci-button-fab(text="Del")
              ci-button-fab(color="primary" text="Add")
              ci-button-fab(color="secondary" text="Top")

            ci-list-cell
              h4 Size
              ci-button-fab(size="small" text="Del")
              ci-button-fab(color="primary" text="Add")
              ci-button-fab(color="secondary" size="big" text="Top")


    ci-block
      ci-block-header(title="Block Button")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Normal
              ci-button-block(modifier="radius" text="DEFAULT")
              ci-button-block(modifier="radius" color="primary" text="PRIMARY")
              ci-button-block(modifier="radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Flat
              ci-button-block(modifier="flat radius border" text="DEFAULT")
              ci-button-block(modifier="flat radius border" color="primary" text="PRIMARY")
              ci-button-block(modifier="flat radius border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Big
              ci-button-block(modifier="radius" size="big" text="DEFAULT")
              ci-button-block(modifier="radius" color="primary" size="big" text="PRIMARY")
              ci-button-block(modifier="radius" color="secondary" size="big" text="SECONDARY")


    ci-block
      ci-block-header(title="Button Example")

      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")

      ci-block-footer.ci-text-right
        ci-button(color="primary" size="small" text="Share")
        ci-button(color="primary" size="small" text="Like")
</template>

<script>
export default {
  name: 'view-app'
}
</script>
