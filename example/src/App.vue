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
              ci-button(text="DEFAULT" @click="onClick")
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
              ci-button(modifier="flat" text="DEFAULT")
              ci-button(modifier="flat" color="primary" text="PRIMARY")
              ci-button(modifier="flat" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Radius
              ci-button(modifier="flat radius" text="DEFAULT")
              ci-button(modifier="flat radius" color="primary" text="PRIMARY")
              ci-button(modifier="flat radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Border
              ci-button(modifier="flat border" text="DEFAULT")
              ci-button(modifier="flat border" color="primary" text="PRIMARY")
              ci-button(modifier="flat border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Raised
              ci-button(modifier="flat raised border" text="DEFAULT")
              ci-button(modifier="flat raised border" color="primary" text="PRIMARY")
              ci-button(modifier="flat raised border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 All Style
              ci-button(modifier="flat border radius raised" text="DEFAULT")
              ci-button(modifier="flat border radius raised" color="primary" text="PRIMARY")
              ci-button(modifier="flat border radius raised" color="secondary" text="SECONDARY")


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
              ci-button(modifier="fab" text="Del")
              ci-button(modifier="fab" color="primary" text="Add")
              ci-button(modifier="fab" color="secondary" text="Top")

            ci-list-cell
              h4 Size
              ci-button(modifier="fab" size="small" text="Del")
              ci-button(modifier="fab" color="primary" text="Add")
              ci-button(modifier="fab" color="secondary" size="big" text="Top")


    ci-block
      ci-block-header(title="Block Button")
      ci-block-body
        ci-list
          ci-list-body
            ci-list-cell
              h4 Normal
              ci-button(modifier="block radius" text="DEFAULT")

            ci-list-cell
              ci-button(modifier="block radius" color="primary" text="PRIMARY")

            ci-list-cell
              ci-button(modifier="block radius" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Flat
              ci-button(modifier="block flat radius border" text="DEFAULT")

            ci-list-cell
              ci-button(modifier="block flat radius border" color="primary" text="PRIMARY")

            ci-list-cell
              ci-button(modifier="block flat radius border" color="secondary" text="SECONDARY")

            ci-list-cell
              h4 Big
              ci-button(modifier="block radius" size="big" text="DEFAULT")

            ci-list-cell
              ci-button(modifier="block radius" color="primary" size="big" text="PRIMARY")

            ci-list-cell
              ci-button(modifier="block radius" color="secondary" size="big" text="SECONDARY")


    ci-block
      ci-block-header(title="Button Example")

      ci-block-body
        ci-media(
          title="Bryan Cranston"
          text="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing."
          image="http://via.placeholder.com/96x96")

      ci-block-footer.ci-text-right
        ci-button(modifier="radius" color="primary" size="small" text="Share")
        ci-button(modifier="radius" color="primary" size="small" text="Like")
</template>

<script>
export default {
  name: 'view-app',

  methods: {
    onClick(evt) {
      console.log('onClick', evt)
    }
  }
}
</script>
