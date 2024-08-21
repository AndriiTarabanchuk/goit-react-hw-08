import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { logoutThunk } from "../auth/operations";

logoutThunk;
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },

  isEditingCard: false,
  contactCard: {
    name: "",
    number: "",
  },
  contactInnerCard: {
    name: "",
    number: "",
  },
};
const handlePending = (state) => {
  state.contacts.loading = true;
};

const handleRejected = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
};
fetchContacts;
const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    editToggleCard: (state, action) => {
      state.isEditingCard = !state.isEditingCard;
      state.contactCard = action.payload;
    },
    changeItemCard: (state, action) => {
      state.contactInnerCard = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        let index = state.contacts.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

//  .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         handleRejected
//       );
export const { editToggleCard, changeItemCard, setName } = slice.actions;
export const contactsReducer = slice.reducer;
