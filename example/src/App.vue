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

    ci-button(modifier="flat" text="DEFAULT")
    ci-button(modifier="flat" color="primary" text="PRIMARY")
    ci-button(modifier="flat" color="secondary" text="SECONDARY")


    h3 Flat Radius Button

    ci-button(modifier="flat radius" text="DEFAULT")
    ci-button(modifier="flat radius" color="primary" text="PRIMARY")
    ci-button(modifier="flat radius" color="secondary" text="SECONDARY")


    h3 Flat Border Button

    ci-button(modifier="flat border" text="DEFAULT")
    ci-button(modifier="flat border" color="primary" text="PRIMARY")
    ci-button(modifier="flat border" color="secondary" text="SECONDARY")


    h3 Flat Raised Button

    ci-button(modifier="flat raised border" text="DEFAULT")
    ci-button(modifier="flat raised border" color="primary" text="PRIMARY")
    ci-button(modifier="flat raised border" color="secondary" text="SECONDARY")


    h3 All Style Button

    ci-button(modifier="flat border radius raised" text="DEFAULT")
    ci-button(modifier="flat border radius raised" color="primary" text="PRIMARY")
    ci-button(modifier="flat border radius raised" color="secondary" text="SECONDARY")

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

    ci-button(modifier="fab" text="Del")
    ci-button(modifier="fab" color="primary" text="Add")
    ci-button(modifier="fab" color="secondary" text="Top")

    ci-button(modifier="fab" size="small" text="Del")
    ci-button(modifier="fab" color="primary" text="Add")
    ci-button(modifier="fab" color="secondary" size="big" text="Top")

    h3 Block Button

    div(style="width: 320px; margin: 0 auto;")
      ci-button(modifier="block radius" text="DEFAULT")
      ci-button(modifier="block radius" color="primary" text="PRIMARY")
      ci-button(modifier="block radius" color="secondary" text="SECONDARY")

      ci-button(modifier="block radius" size="big" text="DEFAULT")
      ci-button(modifier="block radius" color="primary" size="big" text="PRIMARY")
      ci-button(modifier="block radius" color="secondary" size="big" text="SECONDARY")
</template>

<script>
export default {
  name: 'view-app'
}
</script>
