<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end">
        <div class="col">
          <q-input
            autogrow
            class="quttertweet"
            bottom-slots
            v-model="QutterTweet"
            placeholder="What's happening?"
            counter
            maxlength="280"
          >
            <template v-slot:before>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div class="col col-shrink">
          <q-btn
            @click="Addnewqueet"
            unelevated
            class="q-mb-lg"
            :disable="!QutterTweet"
            rounded
            color="primary"
            label="Queet"
          />
        </div>
      </div>
      <q-separator class="line-break" size="10px" color="grey-2" />
      <q-list separator>
          <transition-group
      appear
      enter-active-class="animated fadeIn slower"
      leave-active-class="animated fadeOut slow"
    >
        <q-item 
        v-for="queet in queets"
        :key="queet.id"
        class="queet">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <strong>Krishna Chaitanya</strong>
              <span class="text-grey-7"> @k_c_dutt 
                <br class="lt-md">&bull;{{relativeDate(queet.date,relativeDate)}} </span>
            </q-item-label>
            <q-item-label class="queet-content">
              {{queet.content}}
            </q-item-label>
            <div class="comm-icon row justify-between q-mt-sm">
              <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
              <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
              <q-btn
              @click="Queetliked(queet)"
              flat 
              round 
              :color="queet.liked ? 'pink' : 'grey' "
              :icon="queet.liked ? 'fas fa-heart' : 'far fa-heart' "
              size="sm" />
              <q-btn 
              flat 
              round color="grey" 
              icon="fas fa-trash" 
              size="sm"
              @click="Deletequeet(queet)"
              />
            </div>
          </q-item-section>
        </q-item>
          </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from "vue"
import { formatDistance} from 'date-fns'
import db from '../boot/firebase'
import { collection, query, where, orderBy,onSnapshot } from "firebase/firestore"
import { addDoc } from "firebase/firestore"
import { doc, deleteDoc } from "firebase/firestore";
import { updateDoc} from "firebase/firestore";


export default defineComponent({
  name: "PageHome",
  data() {
    return {
      QutterTweet: '',
      queets: [
      // {
      //   id: 'ID1',
      //   content: 'Lorem ipsum dolor sit amet consectetur',
      //   date: 1633072803415,
      //   liked: false
      // },
      // {
      //   id: 'ID2',
      //   content: 'Lorem ipsum dolor sit amet consectetur',
      //   date: 1633072824232,
      //   liked: false
      // }
    ]
    };
  },
  methods:{
    relativeDate(value){
      return formatDistance(value, new Date())
    },
    Addnewqueet(){
      let newqueet = {
        content: this.QutterTweet,
        date: Date.now(),
        liked : false
      }
      // this.queets.unshift(newqueet)
      
      const docRef = addDoc(collection(db, "queets"), {
        content: newqueet.content,
        date: newqueet.date,
        liked: newqueet.liked
      })
      this.QutterTweet = ''
    },
    Deletequeet(queet){
      
      deleteDoc(doc(db, 'queets', queet.id));
    },
    Queetliked(queet){
      const change = doc(db, "queets", queet.id);
      updateDoc(change, {
      liked: !queet.liked
      });
    }
  },
  mounted(){
    const q = query(collection(db, "queets"),orderBy('date'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        let queetChange = change.doc.data()
        queetChange.id= change.doc.id
        if (change.type === 'added') {
            console.log("New city: ", change.doc.data());
            this.queets.unshift(queetChange)
        }
        if (change.type === 'modified') {
            console.log("Modified city: ", change.doc.data());
            let index = this.queets.findIndex(queet => queet.id === queetChange.id)
            Object.assign(this.queets[index], queetChange)

        }
        if (change.type === 'removed') {
            console.log("Removed city: ", change.doc.data());
            let index = this.queets.findIndex(queet => queet.id === queetChange.id)
            this.queets.splice(index,1)
        }
  });
});
  }
});
</script>
<style lang="sass">
.quttertweet
  textarea
    font-size: 19px
    line-height: 1.5 !important
.line-break
  bottom-top: 1px solid
  bottom-bottom: 1px solid
  border-color: $grey-4
.queet:not(:first-child)
  border-top: 1px solid rgba(0,0,0, 0.12)
.queet-content
  white-space: pre-line
.comm-icon
  margin-left : -5px
</style>
