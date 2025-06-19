import { Input } from "@rneui/base";
import { useFormik } from "formik";
import React from "react";
import { View, Text } from "react-native";
import * as Yup from 'yup'
const SignIn = () => {

    const validation = Yup.object().shape({
        email: Yup.string()
            .label('Email')
            .required('Email is required.')
            .email('Email is invalid'),
        password: Yup.string()
            .label('Password')
            .required('Password is required')
    })

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: validation,
        onSubmit: () => { }
    })

    return (
        <View style={{ flex: 1 }}>
            <Text>Log In</Text>
            <Text>Enter your Email and Password</Text>
            <Input
                label={'Email *'}
                // labelStyle={[theme.signInStyle.labelStyle, { fontSize: smallerFontSize }]}
                value={formik.values.email}
                keyboardType='email-address'
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                inputStyle={[theme.signInStyle.input, { fontSize: mediumFontSize }]}
                inputContainerStyle={{ borderColor: theme.borderColor }}
                containerStyle={{ marginTop: 20 }}
                errorMessage={(touched.email && errors.email && typeof errors.email == 'string') ? errors.email : undefined}
                errorStyle={{ fontFamily: theme.medium, fontSize: errorFontSize, left: -4 }}
                onFocus={() => {
                    setRegionValues((prev) => {
                        let temp = { ...prev }
                        temp.open = false
                        return temp
                    })
                }}
            />
        </View>
    )
}
export default SignIn