<template lang="pug">
  div.view-app
    h2.app-title Button

    h3 Button

    ci-button(text="DEFAULT")
    ci-button(color="primary" text="PRIMARY")
    ci-button(color="secondary" text="SECONDARY")


    h3 Radius Button

    ci-button(modifier="radius" text="DEFAULT")
    ci-button(modifier="radius" color="primary" text="PRIMARY")
    ci-button(modifier="radius" color="secondary" text="SECONDARY")


    h3 Border Button

    ci-button(modifier="border" text="DEFAULT")
    ci-button(modifier="border" color="primary" text="PRIMARY")
    ci-button(modifier="border" color="secondary" text="SECONDARY")


    h3 Raised Button

    ci-button(modifier="raised border" text="DEFAULT")
    ci-button(modifier="raised border" color="primary" text="PRIMARY")
    ci-button(modifier="raised border" color="secondary" text="SECONDARY")

    h3 All Style Button

    ci-button(modifier="border radius raised" text="DEFAULT")
    ci-button(modifier="border radius raised" color="primary" text="PRIMARY")
    ci-button(modifier="border radius raised" color="secondary" text="SECONDARY")


    h3 Flat Button

    ci-button-flat(text="DEFAULT")
    ci-button-flat(color="primary" text="PRIMARY")
    ci-button-flat(color="secondary" text="SECONDARY")


    h3 Flat Radius Button

    ci-button-flat(modifier="radius" text="DEFAULT")
    ci-button-flat(modifier="radius" color="primary" text="PRIMARY")
    ci-button-flat(modifier="radius" color="secondary" text="SECONDARY")


    h3 Flat Border Button

    ci-button-flat(modifier="border" text="DEFAULT")
    ci-button-flat(modifier="border" color="primary" text="PRIMARY")
    ci-button-flat(modifier="border" color="secondary" text="SECONDARY")


    h3 Flat Raised Button

    ci-button-flat(modifier="raised border" text="DEFAULT")
    ci-button-flat(modifier="raised border" color="primary" text="PRIMARY")
    ci-button-flat(modifier="raised border" color="secondary" text="SECONDARY")


    h3 All Style Button

    ci-button-flat(modifier="border radius raised" text="DEFAULT")
    ci-button-flat(modifier="border radius raised" color="primary" text="PRIMARY")
    ci-button-flat(modifier="border radius raised" color="secondary" text="SECONDARY")

    h3 Button Size

    div
      ci-button(modifier="radius" size="small" text="DEFAULT")
      ci-button(modifier="radius" color="primary" size="small" text="PRIMARY")
      ci-button(modifier="radius" color="secondary" size="small" text="SECONDARY")

    div
      ci-button(modifier="radius" text="DEFAULT")
      ci-button(modifier="radius" color="primary" text="PRIMARY")
      ci-button(modifier="radius" color="secondary" text="SECONDARY")

    div
      ci-button(modifier="radius" size="big" text="DEFAULT")
      ci-button(modifier="radius" color="primary" size="big" text="PRIMARY")
      ci-button(modifier="radius" color="secondary" size="big" text=" SECONDARY")

    h3 Floating Action Button

    ci-button-fab(text="Del")
    ci-button-fab(color="primary" text="Add")
    ci-button-fab(color="secondary" text="Top")

    ci-button-fab(size="small" text="Del")
    ci-button-fab(color="primary" text="Add")
    ci-button-fab(color="secondary" size="big" text="Top")

    h3 Block Button

    div(style="width: 320px; margin: 0 auto;")
      ci-button-block(modifier="radius" text="DEFAULT")
      ci-button-block(modifier="radius" color="primary" text="PRIMARY")
      ci-button-block(modifier="radius" color="secondary" text="SECONDARY")

      ci-button-block(modifier="radius" size="big" text="DEFAULT")
      ci-button-block(modifier="radius" color="primary" size="big" text="PRIMARY")
      ci-button-block(modifier="radius" color="secondary" size="big" text="SECONDARY")
</template>

<script>
export default {
  name: 'view-app'
}
</script>
